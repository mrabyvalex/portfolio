import React from 'react';
import get from 'lodash.get';
import DraggableContainer from '../DraggableContainer';
import DummyComponent from '../DummyComponent';

const LayoutRenderer = ({ data }) => {
  const renderElement = (key, index) => {
    const item = data.nodes[key];
    return (
      <DraggableContainer draggableId={key} key={key} index={index}>
        <DummyComponent title={item.title} />
      </DraggableContainer>
    );
  };
  return <div>{get(data, 'entry', []).map((key, index) => renderElement(key, index))}</div>;
};

export default LayoutRenderer;
