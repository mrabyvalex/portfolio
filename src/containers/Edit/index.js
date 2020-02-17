import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { PmakeStyles } from '../../atoms';
import { DroppableContainer, DraggableContainer, DummyComponent, LayoutRenderer } from '../../components';
import { deepDiffMapper } from '../../utils/transform';

const UseStyles = PmakeStyles({
  container: {
    display: 'flex'
  },
  menu: {
    width: '30%',
    borderRight: '1px solid'
  },
  layout: {
    width: '70%'
  }
});

export default ({ pageData }) => {
  const classes = UseStyles();
  const [items] = useState(['component', 'layout']);
  const [localDataCopy, updateLocalDataCopy] = useState({});
  const onDragEnd = (result) => {
    debugger;
    const destinationId = result.destination.droppableId;
    const destinationIndex = result.destination.index;
    if (destinationId === 'initlayout') {
      const newEntries = [...localDataCopy.entry];
      newEntries.splice(destinationIndex, 0, `${destinationIndex}`);
      const newLocalData = { ...localDataCopy, entry: newEntries, nodes: { ...localDataCopy.nodes, [destinationIndex]: { title: 'test' } } };
      updateLocalDataCopy(newLocalData);
    }
  };

  useEffect(() => {
    const relevantData = pageData[window.location.pathname];
    if (relevantData && Object.keys(deepDiffMapper.map(relevantData, localDataCopy)).length > 0) {
      updateLocalDataCopy(relevantData);
    }
  }, [pageData]);
  return (
    <div className={classes.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.menu}>
          <DroppableContainer droppableId='components' type='layout'>
            {items.map((item, index) => (
              <DraggableContainer draggableId={item} index={index} key={item}>
                <DummyComponent title={item} />
              </DraggableContainer>
            ))}
          </DroppableContainer>
        </div>
        <div className={classes.layout}>
          <DroppableContainer droppableId='initlayout' type='layout'>
            <LayoutRenderer data={localDataCopy} />
          </DroppableContainer>
        </div>
      </DragDropContext>
    </div>
  );
};
