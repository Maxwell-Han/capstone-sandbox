import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'

const ReactLive = () => {
  return (
    <LiveProvider code="<strong>Hello World!</strong>">
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export default ReactLive
