const express = require('express');
const multer = require('multer');
const { listFood,addFood,removeFood } = require('../controllers/foodController');


const foodRouter = express.Router();

// img storage engine
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(_req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({storage:storage});




foodRouter.post('/add',upload.single('image'),addFood);

foodRouter.get('/list',listFood)

foodRouter.delete('/:id',removeFood);


module.exports = foodRouter;