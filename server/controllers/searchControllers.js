import asyncHandler from 'express-async-handler'
import City from '../models/cityModel.js'
import Profession from '../models/professionModel.js'

// @desc    get city data for input
// @route   GET /api/search/city
// @access  Public
const getCityData = asyncHandler(async (req, res) => {
    const cities = await City.find({}).select('-_id')
    let cityData = []
    cities.map((city) => {
        cityData.push(city.cityName)
    })
    res.json(cityData)
})

// @desc    get profession data without categories for input
// @route   GET /api/search/profession
// @access  Public
const getProfessionData = asyncHandler(async (req, res) => {
    const professions = await Profession.find({}).select('professionList')
    let professionData = []
    professions.map((profession) => {
        profession.professionList.map((data) => {
            professionData.push(data)
        })
    })

    res.json(professionData)
})

// @desc    get profession data
// @route   GET /api/search/categories
// @access  Public
const getCategoryData = asyncHandler(async (req, res) => {
    const professions = await Profession.find({})

    res.json(professions)
})

export { getCityData, getProfessionData, getCategoryData }