import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { PmakeStyles } from '../../atoms';

const UseStyles = PmakeStyles({
  container: {
    paddingBottom: '50px',
    width: '100%',
    height: '100%'
  }
});
export default ({ children, droppableId, type }) => {
  const classes = UseStyles();
  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided, snapshot) => (
        <div className={classes.container} ref={provided.innerRef} {...provided.droppableProps} style={{ backgroundColor: snapshot.isDraggingOver ? '#ccc' : '#e2e2e2' }}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
