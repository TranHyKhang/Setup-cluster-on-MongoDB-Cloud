const mongoose = require('mongoose');

const URL = "mongodb+srv://<yourUserName>:<yourPassword>@cluster0-sjl1v.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log('db connected..!');
}

module.exports = connectDB;