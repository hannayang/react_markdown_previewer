import React from 'react';
import marked from 'marked';

const renderer = new marked.Renderer();

const preview = (props) => {
  const style = {
    height: '708px', 
    border: '1px solid #5D4954', 
    borderTop: 'none', 
    overflow: 'scroll', 
    padding: '0px 12px',
  }
  return (
    <div 
      style = {style} 
      dangerouslySetInnerHTML={{__html: marked(props.editorInput, { renderer: renderer })}} />
  )
} 

export default preview; 
