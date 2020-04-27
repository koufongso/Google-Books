const router = require('express').Router();
const axios = require("axios");
const db = require("../models");
const key = require("../keys");

router.get("/books", (req, res) => {
    db.Books.find({}, (err, result) => {
        res.json(result);
    });
});

router.get("/books/:id", (req, res) => {
    db.Books.findOne({ bookID: req.params.id }, (err, result) => {
        res.json(result);
    });
});

router.post("/books", (req, res) => {
    db.Books.create(req.body, (err, result) => {
        res.json(result);
    });
})

router.delete("/books/:id", (req, res) => {
    db.Books.deleteOne({ bookID: req.params.id }, (err, result) => {
        res.json(result);
    });
})


router.get("/search/:name", (req, res) => {
    console.log("search")
    let name = 
    console.log(`https://www.googleapis.com/books/v1/volumes?q=${req.params.name}&projection=full&key=${key}`)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.name}&projection=full&key=${key}`)
        .then((response) => {
            // console.log(response);
            res.send(response.data);
        })
        .catch(err=>{res.status(422).json(err)})
})



module.exports = router;