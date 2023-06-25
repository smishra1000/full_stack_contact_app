const express = require("express")
const ContactsModel = require("../models/contacts")
const path = require("path") 

const router = express.Router();


router.get("/allcontacts",function(req,res){
    ContactsModel.find({}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send({err:err})
    })
})

router.post("/create",function(req,res){
    let contact = new ContactsModel(req.body)
    contact.save().then(function(data){
        res.send({msg:"contacts created successfully"})
    }).catch(function(err){
        res.send({err:err})
    })
})

router.get("/byname/:name",function(req,res){
    ContactsModel.find({name:req.params.name}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send({err:err})
    })
})

router.get("/byId/:id",function(req,res){
    ContactsModel.findOne({"_id":req.params.id}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send({err:err})
    })
})


router.put("/edit/:id",function(req,res){
    ContactsModel.findByIdAndUpdate({"_id":Object(req.params.id)},req.body,{upsert:true}).then(function(data){
        res.send({msg:"contacts updated successfully"})
    }).catch(function(err){
        res.send({err:err})
    })
})

router.delete("/:_id",function(req,res){
    ContactsModel.findByIdAndRemove({"_id":Object(req.params._id)}).then(function(data){
        res.send({msg:"contacts deleted successfully"})
    }).catch(function(err){
        res.send({err:err})
    })
})

router.post("/profilepic",function(req,res){
    console.log(req.files)
    const fileName = req.files.profilepic.name
    const fileData = req.files.profilepic;
    const uploadPath = path.join(__dirname,"../","uploads");
    console.log(fileName,fileData,uploadPath)
    fileData.mv(uploadPath + "/"+fileName,function(err){
        if (err)
        return res.status(500).send(err);
      res.send({image:fileName});
    })
   
})






module.exports = router