const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blogtuto').then(
    ()=>{
        console.log('connected to db');
    }
).catch(()=>{
    console.log(err);
})

module.exports = mongoose;