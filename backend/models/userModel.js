const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "can't exceed 30 characters"],
        minLength: [4, "atleast 4 characters required"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "atleast 8 characters required"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

module.exports = mongoose.model('User', userSchema);
