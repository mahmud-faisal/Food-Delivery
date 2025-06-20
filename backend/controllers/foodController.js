const foodModel = require('../models/foodModel');
const fs = require('fs');
const path = require('path');

const addFood = async (req,res)=>{
try{
    const image_filename =`${req.file.filename}`;
    
    const food  = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
         image: image_filename,
    });
    
    await food.save();
    res.status(201).json({success: true,message:'Food item added successfully',food})
}
catch(err){
    res.status(500).json({success: false,message:"Failed to add food item"});
}


}
const listFood = async(req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});

        
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}

const removeFood = async(req,res)=>{
    try{
       const {id} = req.params;
       const food = await foodModel.findByIdAndDelete(id);
       const imagePath = path.join(__dirname, '..', 'uploads', food.image);
       fs.unlink(imagePath, (err) => {
         if (err) console.log("Image delete error:", err);
       });
   
       res.send({success:true,message:'Item is deleted'})
    }
    catch(err){
        res.send({success:false,message:'Item is not deleted'})
    }
}

module.exports = {addFood,listFood,removeFood};