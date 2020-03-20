import React from 'react'
var parse = require('html-react-parser')
import reactElementToJSXString from 'react-element-to-jsx-string'

const HelloWorld = '<div>Hello World</div>'
const CardDemo = () => {
  return (
    <div>
      <h4>Testing BlueprintJS</h4>
      <button>Awesome</button>
    </div>
  )
}

const cardDemoString =
  '<Card interactive={true} elevation={Elevation.TWO}><h4>Testing BlueprintJS</h4><Button>Awesome</Button></Card>'

const SampleLanding = () => {
  console.log(reactElementToJSXString(CardDemo()))
  return (
    <section>
      <h4>Landing Page</h4>
      <div>
        <h5>Hello World!</h5>
      </div>
      <div>
        <h6>Component Preview</h6>
        <div className="component-preview">
          {parse(HelloWorld)}
          {parse(cardDemoString)}
        </div>
      </div>
      <div>{reactElementToJSXString(CardDemo())}</div>
    </section>
  )
}

export default SampleLanding
