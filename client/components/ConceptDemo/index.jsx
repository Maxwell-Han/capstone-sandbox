import React, {Component} from 'react'
import Sidebar from './Sidebar'
import DropZone from './Dropzone'
import axios from 'axios'
import CodeMirror from '../CodeMirrorDemo'

class ConceptDemo extends Component {
  constructor() {
    super()
    this.state = {
      components: [],
      code: ''
    }
    this.updateCode = this.updateCode.bind(this)
  }

  parseComponent(obj) {
    const open = obj.openTag
    const close = obj.closeTag
    const textContent = obj.textContent || ''
    return `${open}${textContent}${close}`
  }

  updateCode(componentsArr) {
    const parsedCode = componentsArr.map(c => this.parseComponent(c)).join('\n')
    this.setState({
      code: parsedCode
    })
  }

  async componentDidMount() {
    const {data} = await axios.get('api/components')
    this.setState({
      components: data
    })
  }

  render() {
    return (
      <section className="concept-container">
        <Sidebar components={this.state.components} />
        <DropZone updateCode={this.updateCode} />
        <CodeMirror
          key={this.state.code.length}
          code={this.state.code || 'hello world'}
        />
      </section>
    )
  }
}

export default ConceptDemo
