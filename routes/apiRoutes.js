const router = require('express').Router();
const db = require("../models");

router.get("/books",(req,res)=>{
    db.Books.find({},(err,result)=>{
        res.json(result);
    });
});

router.get("/books/:id",(req,res)=>{
    db.Books.findOne({bookID:req.params.id},(err,result)=>{
        res.json(result);
    });
});

router.post("/books",(req,res)=>{
    db.Books.create(req.body, (err,result)=>{
        res.json(result);
    });
})

router.delete("/books/:id",(req,res)=>{
    db.Books.deleteOne({bookID:req.params.id}, (err,result)=>{
        res.json(result);
    });
})


module.exports = router;