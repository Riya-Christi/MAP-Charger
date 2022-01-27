const express = require('express');
const path = require('path');
const app = express();
const ws = require('ws');
const socketIo = require('socket.io');
var cors = require('cors')
app.use(cors())

app.get('/', function (req, res) {
  res.send("hello world");
});

app.use(express.static(__dirname + '/dist/client'))
app.use('/*', function(req,res){
  res.sendFile(path.join(__dirname + '/dist/client/index.html'));
});

// app.use(express.static(__dirname + '/public'))
// app.use('/*', function(req,res){
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// });

const http = require('http');
const server = http.createServer(app);

const io = socketIo(server);
// const socket = require('./socket')(io);

const port = process.env.PORT || 3000;
// process.env.PORT for production
server.listen(port, () => console.log('server started on port ' + `${port}`));

const wss = new ws.Server({ server });

wss.on('connection', (ws) => {

  console.log("new client connected");
  //connection is up, let's add a simple simple event
  ws.on('message', (message) => {
      //log the received message and send it back to the client
     console.log('received: %s', message);
     ws.send(`${message}`);
  }); 
  
});
// io.on('connection',function(socket){
//   console.log("new user connected");
// });
// server.listen(3000,() =>{
//   console.log("socet.io listenening to prt 3000");
// })
