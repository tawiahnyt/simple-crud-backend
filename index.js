const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.models.js')
const productRoute = require('./routes/product.route.js')
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello from Node API');
});


mongoose.connect('mongodb+srv://baheja2286:zwyi8Lyg4StZvsoj@backenddb.yzh8n.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backenddb')
.then(() => {
    console.log('Connected to the Database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('Connection failed!');
});