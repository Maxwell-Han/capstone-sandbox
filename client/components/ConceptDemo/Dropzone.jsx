/* eslint-disable react/no-unused-state */
import React, {Component} from 'react'
import DropArea from './DropArea'
import Generic from './Elements/Generic'

const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

class DropZone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxOneEl: {},
      boxTwoEl: {},
      boxThreeEl: {}
    }
    this.setDroppedElement = this.setDroppedElement.bind(this)
  }

  getCodedElements() {
    const keys = Object.keys(this.state)
    const arr = []
    keys.forEach(k => {
      if (!isEmpty(this.state[k])) arr.push(this.state[k])
    })
    return arr
  }

  setDroppedElement(el, boxKey) {
    console.log('calling setDroppedElement from Parent Component')
    this.setState({
      [boxKey]: el
    })
    this.props.updateCode(this.getCodedElements())
  }
  render() {
    const {boxOneEl, boxTwoEl, boxThreeEl} = this.state
    return (
      <section>
        <div className="drop-container">
          <DropArea id="boxOneEl" setEl={this.setDroppedElement}>
            {!isEmpty(boxOneEl) ? <Generic component={boxOneEl} /> : null}
          </DropArea>
          <DropArea id="boxTwoEl" setEl={this.setDroppedElement}>
            {!isEmpty(boxTwoEl) ? <Generic component={boxTwoEl} /> : null}
          </DropArea>
          <DropArea id="boxThreeEl" setEl={this.setDroppedElement}>
            {!isEmpty(boxThreeEl) ? <Generic component={boxThreeEl} /> : null}
          </DropArea>
        </div>
      </section>
    )
  }
}

export default DropZone
