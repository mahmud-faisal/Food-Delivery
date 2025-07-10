const express = require('express');
const cors = require('cors')
const connectDb = require('./config/db');
const foodRouter = require('./routes/foodRoute');
const userRouter = require('./routes/userRoute');
<<<<<<< HEAD
=======
const cartRouter = require('./routes/cartRoute');
>>>>>>> feffc19 (Feat)
require('dotenv').config();



// app config
const app = express();
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); 
// DB connect
connectDb();


// api end point
app.use('/api/food',foodRouter)
app.use('/api/user',userRouter)
<<<<<<< HEAD
=======
app.use('/api/cart',cartRouter)
>>>>>>> feffc19 (Feat)



app.get('/',(req,res)=>{
    res.send("API working!");
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})