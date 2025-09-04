const userModel = require('../models/userModel');

// Add items to user cart
const addToCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,Message:"Added to cart"})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,Message:"Unable to add in cart"})
    }
}

// Remove from cart
const removeFromCart =async(req,res)=>{
try {
    let userData  = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(cartData[req.body.itemId]>1){
        cartData[req.body.itemId] -=1;
    }
    else{
        delete cartData[req.body.itemId];
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"Removed From Cart"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"unable to remove from cart"})
}

}

// Fetch user cart
const getCart = async(req,res)=>{
try {
    let userData = await userModel.findById(req.body.userId);
let cartData = await userData.cartData;
res.json({success:true,cartData});
} catch (error) {
    console.log(error.message);
    res.json({success:false,message:"Unable to fetch"})
}
}


module.exports={addToCart,removeFromCart,getCart};