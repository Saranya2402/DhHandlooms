const express=require('express');

const router=express.Router();

const ProductModel= require('../models/ProductsModel.js');

const bcryptjs=require('bcryptjs');

const jwt=require('jsonwebtoken')

router.get(
    '/get',         // http://www.website.com/user/get
    function() {
        ProductsModel
        .find()
        .then(
            function(dbDocument) {
                res.json(
                    {
                        message: dbDocument
                    }
                )
            }
        )
        .catch(
            (err) => {
                console.log(err);
                res.status(503).json(
                    {
                        "status": "not ok",
                        "message": "Please try again later"
                    }
                );
            }
        )
    }
)


module.exports=router;