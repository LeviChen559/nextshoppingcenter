require("dotenv").config();
const express = require('express')

const connectDB = require("./config/db")

const productRoutes = require("./routes/productRoutes");
const corsOptions = require('./config/corsOptions')
var cors = require('cors')

connectDB();

const app = express();
app.use(cors(corsOptions))
app.use(express.json());

app.use("/api/products",productRoutes)
app.get('/',(req,res)=>{
    res.send("Welcome to Database")
})
const PORT = process.env.PORT || 3750;


app.listen(PORT, () => {
    console.log(
        `The server is running on the port ${PORT}.`)
})