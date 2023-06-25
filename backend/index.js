const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const ContactsRoutes = require("./routes/contacts")
const port = 7000
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/contacts_db")

//middleware 
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())
app.use("/uploads",express.static("uploads"))

app.use("/contacts",ContactsRoutes)

app.listen(7000,()=>{
    console.log("server started on port",port)
})