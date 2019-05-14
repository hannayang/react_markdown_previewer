import React from 'react'; 

const editor = (props) => {
  const style = {
    width: '45vw', 
    height: '700px', 
    fontSize: '15px', 
    lineHeight: '25px', 
    border: '1px solid #5D4954', 
    borderTop: 'none', 
    margin: '0 10px 20px 10px', 
    padding: '0px 12px'
  }
  return (
    <div> 
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

