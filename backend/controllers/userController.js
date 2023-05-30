const User = require('../models/userModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

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

    sendToken(user,201,res);
})

// Login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // check email & password
    if (!email || !password) {
        return next(new ErrorHander("please enter email & password both", 400))
    }

    // find user
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHander("invalid email or password", 401))
    }

    // match password
    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHander("invalid email or password", 401))
    }

    sendToken(user,200,res);
})

// user logout
exports.logout=catchAsyncErrors(async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });

    res.status(200).json({
        success:true,
        message:"Logged out"
    })

})