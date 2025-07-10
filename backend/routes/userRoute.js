const express = require('express');
const {loginUser,registerUser} = require('../controllers/userController');
<<<<<<< HEAD
=======
const requireAuth = require('../middleware/requireAuth');
>>>>>>> feffc19 (Feat)

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

<<<<<<< HEAD
=======
userRouter.get('/profile',requireAuth,(req,res)=>{
    res.json({message:`Welcome user ${req.user}`});
})

>>>>>>> feffc19 (Feat)
module.exports = userRouter;