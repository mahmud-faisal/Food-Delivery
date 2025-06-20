const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')
const validator = require('validator')


// Login user
const loginUser = async(req,res)=>{
   const {email,password} = req.body;
   try {
    const user = await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"user doesn't exists."})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.jjson({success:false,message:"Invalid credentials"})
    }

    const token = createToken(user._id);
    res.json({success:true,token})


   } catch (error) {
    res.json({success:false,message:"Error"})
   }
}

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


// Register User
const registerUser = async(req,res)=>{
    const {name,password,email} = req.body;
    try {
        // User already exist check
        const exists  = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:'user already exists.'})
        }
        // validating emailformat & strong pass

        if(!validator.isEmail(email)){
            return res.json({success:false,message:'Enter valid email'})
        }

        if(password.length<8){
            return res.json({success:false,message:'Password shouldbe atleast 8'});
        }

        // hashinng user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,hash);


        const newUser = userModel({
            name:name,
            email:email,
            password:hashedPassword,
        })

        const user = await newUser.save();
         const token = createToken(user._id)   ;
         res.json({success:true,token});



    } catch (error) {
        
    }
}

module.exports ={loginUser,registerUser}