import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonIcon from '@material-ui/icons/Person';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="disconta">
    {
      users
        ? (
          <>
            <p style={{fontSize:'1rem',color:"black"}}>Online Users:</p>
            
                {users.map(({name}) => (
                  <p key={name} style={{fontSize:"0.9rem",textTransform:"capitalize",color:"black"}}><PersonIcon style={{color:"green",marginRight:"10px"}}/>{name}</p>
                  
                ))}
            
          </>
        )
        : null
    }
  </div>
);

export default TextContainer;