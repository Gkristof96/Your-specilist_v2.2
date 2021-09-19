import mongoose from 'mongoose'

const citiesSchema = mongoose.Schema({
    cityName: { type: String, required: true }
})

const City = mongoose.model('City', citiesSchema)

export default City