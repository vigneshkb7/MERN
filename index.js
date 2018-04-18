const express = require('express');
const app = express();
var mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect('mongodb://mern:mern@7ds149279.mlab.com:49279/mern-email',(err)=>{
    if(err){
        console.log('error occured',err);
    }else{
        console.log('connected to mongoDB');
    }
    
});
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 5000; 
//route in intialized
authRoutes(app);
app.listen(5000,()=>{
    console.log('API started----on port 5000');
});