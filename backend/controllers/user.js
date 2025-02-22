const Users = require("../models/user");
const jwt = require('jsonwebtoken');


async function removefromcart(req, res) {
    console.log(req.body, req.user);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("removed")
}

async function getcart(req, res) {
    console.log("getcart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
}

async function addToCart(req, res) {
    console.log(req.body, req.user);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added")
}

async function login(req, res) {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, errors: "wrong password" });
        }
    }
    else {
        res.json({ success: false, errors: "user not found" });
    }
}

async function signup(req, res) {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "user already exist" })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
}

module.exports = {
    removefromcart,
    getcart,
    addToCart,
    login,
    signup,
}