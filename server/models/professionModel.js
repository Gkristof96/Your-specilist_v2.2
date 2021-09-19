import mongoose from 'mongoose'

const professionSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    professionList: [String]
})

const Profession = mongoose.model('Profession', professionSchema)

export default Profession