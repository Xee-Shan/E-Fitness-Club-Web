const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:String,
  email:String, 
  phoneNumber:String, 
  address:String, 
  orderList:{
    type:Array,
    default:[]
  }
});

const Order = mongoose.model("Order", userSchema);
module.exports.Order = Order;
