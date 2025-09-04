const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next)=>{
    console.log(req)
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({
            success:'false',
            message:'Authorization Token Required'
        })
    }

    const token = authorization.split(' ')[1];

    try{
        const {id} = jwt.verify(token,process.env.JWT_SECRET);
        req.user = id;
        next();
    }catch(error){
        console.log(error.message)
        res.status(401).json({message: "Invalid token"});
    }
    
};

module.exports = requireAuth;