require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected.");
    } catch (e) {
        console.log("DB is not connected. Problem in db.js");
        console.error(e);
    }
};

module.exports = connectDb;
