const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:Array,
        required:true,
        unique:true
    },
    size:{
        type:String
    },
    color:{
        type:String
    },
    price:{
        type:Number,
        required:true,
        unique:true
    },
},{
    timestamps:true
});

module.exports = mongoose.model("Product", ProductSchema);