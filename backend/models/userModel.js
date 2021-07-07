import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requierd: true
    },
    email: {
        type: String,
        requierd: true,
        unique: true
    },
    password: {
        type: String,
        requierd: true
    },
    isAdmin: {
        type: Boolean,
        requierd: true,
        default: false
    },
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema)

export default User