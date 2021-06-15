import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './InfoBar.css';
import ForumIcon from '@material-ui/icons/Forum';
const InfoBar = () => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h4>      
    <ForumIcon style={{marginRight:"20px"}}/>
    Group Chat Application.</h4>
    </div>
    <div className="rightInnerContainer">
      <a href="/">    <CloseIcon style={{color:"black"}}/>
</a>
    </div>
  </div>
);

export default InfoBar;