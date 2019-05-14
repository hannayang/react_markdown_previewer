import React from 'react'; 
import './Editor.css'; 

const editor = (props) => {
  const style = {
    height: '700px', 
    width: '99%', 
    fontSize: '15px', 
    lineHeight: '25px', 
    border: 'none'
  }
  return (
    <div className = 'textareaWrap'> 
      <textarea
      type = 'text'
      style = {style}
      value = {props.input}
      onChange = {props.changed}
      /> 
    </div> 
  ); 
}; 

export default editor; 

