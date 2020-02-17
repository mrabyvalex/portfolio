import React from 'react';
import get from 'lodash.get';
import { DraggableContainer, DummyComponent } from '..';

const LayoutRenderer = ({ data }) => {
  const renderElement = (key) => {
    const item = data.nodes[key];
    return (
      <DraggableContainer draggableId={key} key={key} index={item.index}>
        <DummyComponent title={item.title} />
      </DraggableContainer>
    );
  };
  return <div>{get(data, 'entry', []).map((key) => renderElement(key))}</div>;
};

export default LayoutRenderer;
