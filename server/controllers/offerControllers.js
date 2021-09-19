import asyncHandler from 'express-async-handler'
import Offer from '../models/offerModel.js'


// @desc    create an offer
// @route   GET /api/offer/
// @access  Public
const createOffer = asyncHandler(async (req, res) => {
    const { name, email, city, profession, description } = req.body

    await Offer.create({
        name: name,
        email: email,
        city: city,
        profession: profession,
        description: description
    })
    res.json({ message: 'Offer created'})
})

export { createOffer }