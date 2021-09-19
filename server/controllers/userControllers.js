import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import Provider from '../models/providerModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email })

  if(user && (await user.matchPassword(password))) {
    const provider = await Provider.findOne({ user: user._id})
    res.json({
        _id: user._id,
        name: provider.name,
        image: provider.image,
        email: user.email,
        token: generateToken(user._id)
    })
  } else {
      res.status(401)
      throw new Error('Érvénytelen email vagy jelszó!')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    email,
    password
  })
  const provider = await Provider.create({
    user: user._id,
    name: name
  })

  if(user && provider) {
    res.status(201).json({
        _id: user._id,
        name: provider.name,
        image: provider.image,
        email: user.email,
        token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile by Id
// @route   GET /api/users/profile
// @access  Public
const getUserProfileById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  const provider = await Provider.findOne({user: req.params.id})

  if(user) {
    res.json({
      id: user._id,
      email: user.email,
      name: provider.name,
      image: provider.image,
      rating: provider.rating,
      bio: provider.bio,
      tel: provider.tel,
      city: provider.city,
      numReviews: provider.numReviews,
      reviews: provider.reviews,
      gallery: provider.gallery,
      professions: provider.professions
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Change user password
// @route   PUT /api/users/profile
// @access  Private
const changeUserPassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  const { password, newPassword } = req.body
  console.log(req.body)
  if(user && (await user.matchPassword(password))) {
    console.log('done')
    user.password = newPassword
    console.log(user.password)
    await user.save()
    res.json({ message: 'Password changed'})
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    delete user and contain provider
// @route   DELETE /api/users/profile/delete
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  console.log(user)
  const provider = await Provider.findOne({ user: user._id})

  if(user && provider) {
    await user.remove()
    await provider.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
    authUser,
    getUserProfileById,
    registerUser,
    changeUserPassword,
    deleteUser
}