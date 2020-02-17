import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { PmakeStyles } from '../../atoms';

const UseStyles = PmakeStyles({
  container: {
    width: 'fit-content'
  }
});
export default ({ children, draggableId, key, index }) => {
  const classes = UseStyles();
  return (
    <Draggable draggableId={draggableId} key={key} index={index}>
      {(provided, snapshot) => (
        <div className={classes.container} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {children}
        </div>
      )}
    </Draggable>
  );
};
