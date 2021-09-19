import mongoose from 'mongoose'

const offerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
}, { timestamps: true})

const Offer = mongoose.model('Offer', offerSchema)

export default Offer