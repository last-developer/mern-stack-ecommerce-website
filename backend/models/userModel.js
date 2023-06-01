const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

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

userSchema.pre('save', async function (next) {
    // if password didn't change then next() else encrypt the password
    if (!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
})

// jwt token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// generating password reset token
userSchema.methods.getResetPasswordToken = function () {

    // generating token
    const resetToken = crypto.randomBytes(20).toString('hex')

    // hashing & adding resetPasswordToken to userschema
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model('User', userSchema);
