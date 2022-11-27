const mongoose = require('mongoose');
const ObjectID=mongoose.Schema.ObjectId;

const orderHistorySchema = new mongoose.Schema({
        userId:{
            type:ObjectID,
            required:true,
            ref:'users'
        },
        productId:{
            type:ObjectID,
            required:true,
            ref:'products'
        },
       total:{
        type:Number,
        required:true
       }    
    }
    ,{
        timestamps:true
    })


const Order = new mongoose.model("order",orderHistorySchema)
module.exports=Order;