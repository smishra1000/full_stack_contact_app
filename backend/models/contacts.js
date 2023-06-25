const mongoose = require("mongoose")

let ContactsSchema = mongoose.Schema({name:String,phone:String,address:String,email:String,image:String})

module.exports = mongoose.model("contacts",ContactsSchema,"contacts")

