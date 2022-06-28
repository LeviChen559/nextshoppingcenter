const express = require("express")
const router = express.Router()

const { getAllProducts, getProductById } = require("../controller/productController")
//Get all products from db
//Get /api/products
// access Pubic


router.get("/", getAllProducts)

//Get a product by id from dbcors
//Get /api/products/:id
// access Pubic
router.get("/:id", getProductById)

module.exports = router