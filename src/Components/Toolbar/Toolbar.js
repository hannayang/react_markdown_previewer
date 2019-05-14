import React from 'react'; 
import './Toolbar.css'; 

const toolbar = (props) => {
  return (
    <div className = 'toolbar'>    
        {props.text}
        <i onClick = {props.clicked} className={props.icon}></i>
    </div>
  ); 

}

export default toolbar; 
