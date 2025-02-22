
const Product = require("../models/product");

async function addProduct(req, res) {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name,
        // message: "Product added successfully"
    })
}

async function removeproduct(req, res) {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed successfully");
    res.json({
        success: true,
        name: req.body.name,
        // message: "Product removed successfully"
    })
}

async function allproducts(req, res) {
    let products = await Product.find({});
    console.log("all products fetched successfully");
    res.send(products);
}

async function newcollections(req, res) {
    let products = await Product.find({});
    let newcollections = products.slice(-1).slice(-8);
    console.log("new collections fetched successfully");
    res.send(newcollections);
}

async function popularinwomen(req, res) {
    try {
        // Fetch only the first 4 items directly from MongoDB
        let popular_in_women = await Product.find({ category: "women" }).limit(4);
        
        console.log("Popular in women fetched successfully");
        res.status(200).json(popular_in_women);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
    addProduct,
    removeproduct,
    allproducts,
    newcollections,
    popularinwomen,
}