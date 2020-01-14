const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const fs = require('fs');
const path = require('path');
const router = express.Router();
app.use(express.static("static"));
router.get('/',function(req,res){
    res.sendfile(path.join(__dirname+'/static/index.html'));

});

//add the router
app.use('/', router);
server.listen(3000, '0.0.0.0');

console.log('Running at Port 0.0.0.0:3000');
let rawData = fs.readFileSync('json/library.json');
let allSongs = JSON.parse(rawData);
console.log(allSongs);
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('request library', function (data) {
        console.log(data);
        let library = JSON.parse(rawData);
        socket.emit('send library', library);
    });
});