import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

const dragLayerConnector = monitor => ({
  isDragging: monitor.isDragging(),
  itemType: monitor.getItemType(),
  item: monitor.getItem(),
  currentOffset: monitor.getSourceClientOffset(),
  initialClientOffset: monitor.getInitialClientOffset(),
  initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
});

class DragLayerComponent extends Component<Props> {
  getStyles() {
    const { currentOffset, initialClientOffset, initialSourceClientOffset, withHack } = this.props;

    if (!currentOffset || !initialClientOffset || !initialSourceClientOffset) {
      return {
        display: 'none',
      };
    }
    const { x, y } = currentOffset;
    const { y: yInitPointer } = initialClientOffset;
    const { y: yInitSource } = initialSourceClientOffset;

    // The y-offset transformation is required due to this issue: https://github.com/react-dnd/react-dnd/issues/1041
    return {
      transform: `translate(${x}px, ${y + (withHack ? (yInitPointer - yInitSource + 1) : 0)}px)`,
      position: 'absolute',
      backgroundColor: 'grey',
      width: '200px',
      height: '200px'
    };
  }

  render() {
    const {
      isDragging,
      itemType,
      item,
    } = this.props;

    if (!isDragging) {
      return null;
    }

    if (itemType !== 'Example') {
      return null;
    }

    if (!item) {
      return null;
    }

    const style = this.getStyles();

    return (
      <div style={style}>
        Drag layer preview!
      </div>
    );
  }
}

export default DragLayer(dragLayerConnector)(DragLayerComponent);
