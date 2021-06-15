require('dotenv').config();
const express=require("express");
const http=require("http");
const bodyParser=require('body-parser')
const cors=require('cors')
const PORT=process.env.PORT || 4000;
const app=express();
const socketio=require("socket.io");
const myroutes=require("./router")
const server=http.createServer(app);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

app.use(cors());
app.use(express.json());
app.use(myroutes)
const io=socketio(server,{
  cors: {
        origin: true,
        credentials: true
      }
});
  // const io=socketio(server,{
  //   cors: {
  //     origin: "http://localhost:3000",
  //     credentials: true
  //   }
  // });
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
})