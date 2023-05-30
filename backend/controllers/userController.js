const User = require('../models/userModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

// Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: "im fake id",
            url: "fakeurl"
        }
    })
    const token=user.getJWTToken();

    res.status(200).json({
        success: true,
        token
    })
})