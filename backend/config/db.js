require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, 
            {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        console.log("MongoDB connected successfuly")
    } catch (err) {
        console.error("MongoDB connected fail")
        process.exit(1)
    }
};

module.exports = connectDB