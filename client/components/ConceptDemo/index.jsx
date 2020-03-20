import React, {Component} from 'react'
import Sidebar from './Sidebar'
import DropZone from './Dropzone'
import axios from 'axios'

class ConceptDemo extends Component {
  constructor() {
    super()
    this.state = {
      components: []
    }
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
        <DropZone />
      </section>
    )
  }
}

export default ConceptDemo
