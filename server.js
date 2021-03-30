const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const fs = require('fs');
const path = require('path');
const router = express.Router();
app.use(express.static("static"));

// Request route to index.html file located in the static/ directory
router.get('/',function(req,res){
    res.sendfile(path.join(__dirname+'/static/index.html'));
});


const spawn = require('child_process').spawn;

const process = spawn('python', ['./hello.py']);

process.stdout.on('data', data =>{
   console.log(data.toString())
});

setTimeout(function(){
    process.kill(process.ppid, 'SIGHUP')
}, 5000);

//Add the router
app.use('/', router);
server.listen(3000, '127.0.0.1');

console.log('Running at Port 0.0.0.0:3000');
let rawData = fs.readFileSync('json/library.json'); // Library Link: Song List
let allSongs = JSON.parse(rawData);
//console.log(allSongs); // PRINT: LIBRARY LIST
io.on('connection', function(socket){
    console.log('User connected...');

    // Provide the browser with a list of all available songs
    socket.on('request library', function (data) {
        console.log(data);
        let library = JSON.parse(rawData);
        socket.emit('send library', library);
    });

    // Perform the Play action and play the song
    socket.on('request song', function (data) {
        console.log(data);
        let library = JSON.parse(rawData);
        socket.emit('send song', library);
    });
});