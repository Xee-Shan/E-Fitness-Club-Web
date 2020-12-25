const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const uploadAudio = require("../utils/multerAudio");
const cloudinary = require("../utils/cloudinary");
const auth = require("../middleware/auth");
const {User} = require("../models/userModel");
const { Meditation } = require("../models/meditationModel");

router.post("/uploadAudio", auth,uploadAudio.single("audio"), async (req, res) => {
    try{
     const user=await User.findById(req.user);
     const result1 = await cloudinary.v2.uploader.upload(req.file.path,{ resource_type: "video" }, 
     function(error, result1) {console.log(result1, error); });
     console.log(req.body);
     const meditation = new Meditation({
       title: req.body.title,
       description: req.body.description,
       audioURL: result1.secure_url,
       cloudinary_audio_id: result1.public_id,
       uploaderName: user.name,
       uploaderId:req.user
     });
     await meditation.save((err) => {
       if (err) return res.status(400).json({ success: false, err });
       return res.status(200).json({ success: true });
     });
   }catch(err){
     console.log(err);
   }
   });

   router.post("/uploadImage", auth, upload.single("image"),async (req, res) => {
    try{
     const result2= await cloudinary.uploader.upload(req.file.path);
     const meditation = new Meditation({
       imageURL: result2.secure_url,
       cloudinary_image_id: result2.public_id,
     });
     await meditation.save((err) => {
       if (err) return res.status(400).json({ success: false, err });
       return res.status(200).json({ success: true });
     });
   }catch(err){
     console.log(err);
   }
   });   
   module.exports = router;