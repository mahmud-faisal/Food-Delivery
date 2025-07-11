const express = require('express');
const {loginUser,registerUser} = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/profile',requireAuth,(req,res)=>{
    res.json({message:`Welcome user ${req.user}`});
})

module.exports = userRouter;