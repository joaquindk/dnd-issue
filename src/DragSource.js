import React, { Component } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragSource } from 'react-dnd';
/** Session source contract passed to the drop targe. */
const source = {
  beginDrag(props: DndProps) {
    console.log("Dragging started");
   return {};
  },
  endDrag() {
    console.log("Dragging ended");
  }
};

class DragSourceComponent extends Component {
  componentDidMount() {
    const { connectDragPreview } = this.props;

    /** Use empty image as a drag preview so browsers don't draw it */
    connectDragPreview(getEmptyImage());
  }

  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div style={{backgroundColor: 'lightblue', width: '500px', height: '200px'}}
      >
        {isDragging ? 'Being dragged' : 'Drag me'}
      </div>
    );
  }
}
export default DragSource('Example', source, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))(DragSourceComponent);
