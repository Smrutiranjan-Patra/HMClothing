const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

console.log(path.join(__dirname, "/index.html"));

app.get('/', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, "index.html"));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})


app.get('/product', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, "products.html"));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.get('/signin', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, "sign In.html"));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.get('/cart', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, "cart.html"));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})


app.get('/address', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, "address.html"));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})


app.get('/payment', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, "payment.html"));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});