import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { PmakeStyles } from '../../atoms';
import { DroppableContainer, DraggableContainer, DummyComponent } from '../../components';

const UseStyles = PmakeStyles({
  container: {
    display: 'flex'
  },
  menu: {
    width: '30%'
  },
  layout: {
    width: '70%'
  }
});

export default () => {
  const classes = UseStyles();
  const [items, updateItems] = useState(['a', 'b', 'c']);
  const onDragEnd = (result) => console.log('drag result', result);
  return (
    <div className={classes.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.menu}>
          <DroppableContainer droppableId='components' type='componentpool'>
            {items.map((item, index) => (
              <DraggableContainer draggableId={item} index={index} key={item}>
                <DummyComponent title={item} />
              </DraggableContainer>
            ))}
          </DroppableContainer>
        </div>
        <div className={classes.layout}>layout</div>
      </DragDropContext>
    </div>
  );
};
