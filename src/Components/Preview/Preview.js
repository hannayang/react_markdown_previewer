import React from 'react';
import marked from 'marked';
import './Preview.css'; 

const renderer = new marked.Renderer();

const preview = (props) => {
  return (
    <div className="preview"
      dangerouslySetInnerHTML={{__html: marked(props.editorInput, { renderer: renderer })}} />
  )
} 

export default preview; 
