const { timeStamp } = require('console');
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema(
    {
        productID:{
            type:String,
            require:true
        },
        productName:{
            type:String,
            require:true
        },
        brandName:{
            type:String,
            require:true
        },
        Price:{
            type:Number,
            require:true,
        },
        stockRemaining:{
            type:Number,
            require:true
        },
        createdDate : {
            type:Date,
            require:true
        },
        productImage:{
            type:String,
            require:true
        },
        productColor:{
            type:String,
            require:false
        },
    }
)

const ProductModel=mongoose.model('product',productSchema);

module.exports=ProductModel;