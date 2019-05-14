import React, { Component } from 'react';
import './App.css';
import Editor from '../Components/Editor/Editor'; 
import Preview from '../Components/Preview/Preview'; 
import Toolbar from '../Components/Toolbar/Toolbar'; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      editorMaximized: false, 
      previewMaximized: false, 
      editorInput: `
# Welcome to Hanna's React Markdown Previewer!

## Marked - Markdown Parser 
[Marked](https://github.com/markedjs/marked/) lets you convert [Markdown](https://daringfireball.net/projects/markdown/) into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

### How To Use This Demo:

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple. 
  
### And here's some cool stuff you can try:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
        - Pretty awesome, huh? 


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...

Last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`
    }; 

  this.changeHandler = this.changeHandler.bind(this); 
  this.editorMaxHandler = this.editorMaxHandler.bind(this); 
  this.previewMaxHandler = this.previewMaxHandler.bind(this); 
  }

  changeHandler(event) {
    this.setState({
      editorInput: event.target.value
    }); 
  }; 

  editorMaxHandler() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    }); 
  }; 

  previewMaxHandler() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    }); 
  }; 
  
  render () {
    const classes = this.state.editorMaximized ? 
          ['editorWrap maximized', 
           'previewWrap hide', 
           'fa fa-compress'] : 
          this.state.previewMaximized ?
          ['editorWrap hide', 
           'previewWrap maximized', 
           'fa fa-compress'] :
          ['editorWrap', 
           'previewWrap', 
           'fa fa-arrows-alt'];

    return (
      <div className = 'App'>
        <div className = {classes[0]}>
          <Toolbar 
            text = 'Editor (type in Markdown format in this box)' 
            icon = {classes[2]}
            clicked = {this.editorMaxHandler}
            />
          <Editor 
            input = {this.state.editorInput}
            changed = {this.changeHandler} />
        </div>
        <div className = {classes[1]}>
          <Toolbar 
            text = 'Preview' 
            icon = {classes[2]}
            clicked = {this.previewMaxHandler}
            />
          <Preview
            editorInput = {this.state.editorInput} />
        </div>
      </div>    
    );
  }; 
}; 

export default App;
