import React, {Component} from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
// make the css stylings also

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

const styles = {
  container: {
    width: '80%',
    height: '80%'
  }
}
class CodeMirrorDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: props.code || '//Code'
    }
    this.updateCode = this.updateCode.bind(this)
  }
  updateCode(newCode) {
    this.setState({code: newCode})
  }
  // ref = React.createRef()
  render() {
    console.log('instance is ', this.instance)
    const options = {lineNumbers: true, theme: 'material', mode: 'javascript'}
    return (
      <div style={styles.container}>
        <h4>Code Mirror</h4>
        <CodeMirror
          editorDidMount={editor => {
            this.instance = editor
          }}
          value={this.state.code}
          onBeforeChange={(editor, data, code) => {
            this.setState({code})
          }}
          onChange={(editor, data, code) => {
            console.log('controlled', {code})
          }}
          options={options}
          // ref={editor}
        />
      </div>
    )
  }
}

export default CodeMirrorDemo
