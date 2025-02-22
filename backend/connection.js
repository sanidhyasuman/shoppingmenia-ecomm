const mongoose = require('mongoose');

async function connectMongoDb(url) {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.log('Database connection error:', err));

}

module.exports = {
    connectMongoDb,
};