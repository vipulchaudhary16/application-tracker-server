const mongoose = require('mongoose');
//create connection with mongo
const connectionStr = 'mongodb://0.0.0.0:27017/mean';

const connectToMongo = () => {
    mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
}

module.exports = { connectToMongo };