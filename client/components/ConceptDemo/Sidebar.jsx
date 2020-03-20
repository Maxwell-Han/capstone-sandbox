import React from 'react'
import MenuItem from './MenuItem'

const Sidebar = ({components}) => {
  return (
    <section className="sidebar">
      {components.length &&
        components.map(c => <MenuItem key={c.id} component={c} />)}
    </section>
  )
}

export default Sidebar
