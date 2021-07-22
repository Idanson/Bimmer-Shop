import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: { type: String, requierd: true },
    rating: { type: Number, requierd: true },
    comment: { type: String, requierd: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true,
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        requierd: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        requierd: true,
        default: 0,
    },
    price: {
        type: Number,
        requierd: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        requierd: true,
        default: 0,
    },
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product