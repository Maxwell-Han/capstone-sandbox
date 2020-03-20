import React from 'react'
import {useDrop} from 'react-dnd'
import {ItemTypes} from '../../constants'
import TextElement from './Elements/Generic'

// item is the MenuItem and its props
const DropArea = props => {
  const {setEl, id} = props
  const handleDroppedItem = item => {
    console.log(id, 'DROPPING ITEM with contents of ', item)
    setEl(item.component, id)
  }

  const [{isOver, canDrop, item}, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => {
      console.log('dropping an item!', item)
      handleDroppedItem(item.content)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      item: monitor.getItem()
    })
  })

  return (
    <div ref={drop} className="drop-area">
      {isOver && (
        <div
          style={{
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'blue',
            margin: '0 auto'
          }}
        />
      )}
      {props.children}
    </div>
  )
}

export default DropArea
