const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');



const Author = require('../models/author');

const multer = require ('multer');

 
filename ='';

const mystorage = multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,redirect)=>{
        let date = Date.now();
        let fl = date+'.'+file.mimetype.split('/')[1];
        //012062024.png
        redirect(null,fl);
        filename = fl;

    }
})

const upload = multer ({ storage:mystorage})




// router.post('/register',upload.any('image'),(req,res)=>{

//     data = req.body;

//     author = new Author(data);

//     salt = bcrypt.genSaltSync(10);

//     author.password= bcrypt.hashSync(data.password,salt);

//     author.image=filename;

//     author.save().then(
//         (savedAuth)=>{
//             filename='';
//             res.status(200).send(savedAuth);}
//     )
//     .catch(
//         err=>{
//             res.send(err)
//         }
//     )


// })



// router.post('/login',(req,res)=>{

//     let data = req.body;

//     Author.findOne({email: data.email})
//     .then(
//         (author)=>{
//             let valid=bcrypt.compareSync(data.password,author.password);
//             if(!valid){
//                 res.send('email or password invalid');
//             }else{

//             }
//         }

//     )
//     .catch(err=>{
//         res.send(err);
//     })

// })


// router.get('/all',(req,res)=>{


// })


// router.get('/getbyid/:id',(req,res)=>{


// })



// router.delete('/deletebyid/:id',(req,res)=>{


// })


// router.update('/updatebyid/:id',(req,res)=>{


// })









module.exports = router;
