import "./Chat.css"
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import InfoBar from "../Components/InfoBar"
import Messages from "../Components/Messages"
import TextContainer from "../Components/TextContainer"
import Input from "../Components/Input"
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
let socket;
function ChatScreen({location}) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    let ENDPOINT="http://localhost:4000";
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    console.log(socket)
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);
      useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);
    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => {setMessage('')});
        }
      }
    return (
        <>
          <div className="joinMainContainer">
          
          <div style={{width:"80%"}} className="row">
<div className="col-10 mx-auto">
<div className="row  specialbg ">
<InfoBar/>
<div className="row somestyle">
<div className="col-3  order-2 order-lg-1 d-flex flex-column">
    <p className="heading2" style={{textTransform:"capitalize",color:"black",borderBottom:"2px solid black",padding:"10px"}}><MeetingRoomIcon style={{marginRight:"10px"}}/>{room}</p>
    <TextContainer users={users}/>


</div>
<div style={{borderLeft:"2px solid black"}} className="col-9 order-1 order-lg-1 d-flex flex-column">
<div style={{height:"60vh"}}>
<Messages messages={messages} name={name} />

</div>
<div>
<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
</div>
</div></div>
</div>
</div>
</div>
          
     
    </div>
        </>
    )
}

export default ChatScreen
