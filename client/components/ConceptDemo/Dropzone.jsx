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
  constructor() {
    super()
    this.state = {
      boxOneEl: {},
      boxTwoEl: {},
      boxThreeEl: {}
    }
    this.setDroppedElement = this.setDroppedElement.bind(this)
  }

  setDroppedElement(el, boxKey) {
    console.log('calling setDroppedElement from Parent Component')
    this.setState({
      [boxKey]: el
    })
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
