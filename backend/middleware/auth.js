const jwt = require('jsonwebtoken');

const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers;
    console.log(req)
    console.log(token)

    if(!token){
        return res.json({success:false,message:"Not authorised"})
    }

    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        console.log(token_decode)
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

module.exports = authMiddleware;