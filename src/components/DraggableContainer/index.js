import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default ({ children, draggableId, key, index }) => (
  <Draggable draggableId={draggableId} key={key} index={index}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        {children}
      </div>
    )}
  </Draggable>
);
