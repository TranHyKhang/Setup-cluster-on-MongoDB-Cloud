const express = require('express');
const connectDB = require('./DB/connection');
const app = express();

connectDB();
const port = 3000;

app.use(express.json({extended: false}))
app.use('/api/userModel', require('./Api/User'));
app.listen(port, () => {
    console.log("Server started");
});