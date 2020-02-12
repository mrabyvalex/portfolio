import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

export default ({ children, droppableId, type }) => (
  <Droppable droppableId={droppableId} type={type}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        {children}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);
