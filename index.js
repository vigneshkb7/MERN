const express = require('express');
const app = express();
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 5000;
//route in intialized
authRoutes(app);
app.listen(5000,()=>{
    console.log('API started----on port 5000');
});