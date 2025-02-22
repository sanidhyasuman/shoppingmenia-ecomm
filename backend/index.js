const port = 4000;

const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

require('dotenv').config();
const app = express();
const { connectMongoDb } = require('./connection')
const multer = require('multer');

const path = require('path');
const cors = require('cors');

app.use(express.json());

app.use(cors());

// Database Connection with Mongodb Database
connectMongoDb(process.env.MONGO_URI);

app.get("/", (req, res) => {
    res.send("express is running")
})

// image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });
// creating uploade endpoint for image
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        // image_url: `http://localhost:${port}/images/${req.file.filename}`
        image_url: `https://shoppingmenia-ecomm.onrender.com/images/${req.file.filename}`
    })
})

app.use('/product', productRouter);

app.use('/user', userRouter);


app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port ` + port);
    }
    else {
        console.log("Error starting server: " + error);
    }
});
