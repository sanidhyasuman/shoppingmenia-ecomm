const express = require("express");
const {  addProduct,
    removeproduct,
    allproducts,
    newcollections,
    popularinwomen, } = require("../controllers/product");

const router = express.Router();

router.post('/addproduct', addProduct);

router.post('/removeproduct', removeproduct);
//creating API for getting all products
router.get('/allproducts', allproducts);

// creating endpoint for newcollection data
router.get('/newcollections', newcollections);

//creating api for popular in women section
router.get('/popularinwomen', popularinwomen);



module.exports = router;