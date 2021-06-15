import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
  <div className="miniInput">
  <div style={{paddingRight:"10px",paddingLeft:"10px"}} class="input-group">
  <input value={message} type="text" class="form-control" placeholder="Type a message..."   onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
</div>
    <button style={{marginRight:"10px"}} className="btn btn-outline-dark" onClick={e => sendMessage(e)}>Send</button>
  
  
  </div>
  </form>
)

export default Input;