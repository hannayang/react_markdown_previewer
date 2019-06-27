import React from 'react'; 
import './Editor.css'; 

const editor = (props) => {
  return (
    <div className = 'textareaWrap'> 
      <textarea
      type = 'text'
      className = 'textarea'
      value = {props.input}
      onChange = {props.changed}
      /> 
    </div> 
  ); 
}; 

export default editor; 

