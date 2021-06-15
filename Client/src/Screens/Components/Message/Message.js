import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (<div className="messageContainer justifyEnd">
 <div className="messageContainernew backgroundBlue">
            <p className="sentText colorWhite">{trimmedName}</p>
        <hr/>
           <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p> 
        </div>
      </div>

        )
        : (
          <div className="messageContainer justifyStart">
 <div className="messageContainernew backgroundLight">
            <p className="sentText color_black">{user}</p>
        <hr className="color_black"/>
           <p className="messageText color_black">{ReactEmoji.emojify(text)}</p> 
        </div>
      </div>
        )
  );
}

export default Message;