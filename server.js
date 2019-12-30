const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(3000, '0.0.0.0');
const myresult = require( "./spa.js" );

console.log('Running at Port 0.0.0.0:3000');