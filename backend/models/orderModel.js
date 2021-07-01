import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requierd: true,
        ref: 'User'
    },
    orderItems: [{
        name: { type: String, requierd: true },
        qty: { type: Number, requierd: true },
        image: { type: String, requierd: true },
        price: { type: Number, requierd: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            requierd: true,
            ref: 'Product'
        },
    }],
    shippingAddress: {
        address: { type: String, requierd: true },
        address: { type: String, requierd: true },
        address: { type: String, requierd: true },
        address: { type: String, requierd: true },
    },
    paymentMethod: {
        type: String,
        requierd: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: {
        type: Number,
        requierd: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        requierd: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        requierd: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        requierd: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        requierd: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
}, {
    timestamps: true
})

const Order = mongoose.model("Order", orderSchema)

export default Order