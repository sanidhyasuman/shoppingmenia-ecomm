const {fetchUser} = require("../middleware/index");
const express = require("express");

const router = express.Router();

const {
    removefromcart,
    getcart,
    addToCart,
    login,
    signup,
} = require("../controllers/user");


router.post('/removefromcart',fetchUser, removefromcart);

//creating endpoint to get cartdata
router.post('/getcart',fetchUser, getcart);


//creating endpoint for adding products in cartdata
router.post('/addtocart',fetchUser,  addToCart);

//creating API for registration
router.post('/signup', signup);

//creating API for login
router.post('/login', login);

module.exports = router;