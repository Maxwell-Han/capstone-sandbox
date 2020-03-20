import React, {Component} from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
// make the css stylings also

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

class CodeMirrorDemo extends Component {
  constructor() {
    super()
    this.state = {
      code: '//Code'
    }
    this.updateCode = this.updateCode.bind(this)
  }
  updateCode(newCode) {
    this.setState({code: newCode})
  }
  ref = React.createRef()
  render() {
    const options = {lineNumbers: true, theme: 'material', mode: 'javascript'}
    return (
      <div>
        <h4>Code Mirror Goes Here</h4>
        <CodeMirror
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
          ref={self => (this.editor = self)}
        />
      </div>
    )
  }
}

export default CodeMirrorDemo
