import mongoose from 'mongoose'


const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, requied: true },
    rating: { type: Number, required: true },
    message: { type: String, required: true },
}, { timestamps: true })

const providerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "/images/profile/default-profile.png"
    },
    tel: {
        type: String
    },
    city: {
        type: String
    },
    bio: {
        type: String
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
    professions: [{
        name: { type: String, required: true}
    }],
    gallery: [{
        path: { type: String, required: true}
    }, { timestamps: true }]

}, {
    timestamps: true
})

const Provider = mongoose.model('Provider', providerSchema)

export default Provider