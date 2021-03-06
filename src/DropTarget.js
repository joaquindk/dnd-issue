import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';


class DropTargetComponent extends Component {
  render() {
    const { connectDropTarget, isHovering } = this.props;

    return connectDropTarget(
      <div style={{width: '500px', height: '200px', border: '1px solid black'}}>
        {`Drop here - ${isHovering ? 'Is hovering = true' :  'Is hovering = false'}`}
      </div>
    );
  }
}

const dropSpec = {

  drop(props: Props, monitor, component) {
    return {};
  },

  hover(props, monitor, component) {
    console.log("Is hovering target....");
  },
};

export default DropTarget('Example', dropSpec, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isHovering: monitor.isOver(),
  hoveredBy: monitor.getItem(),
}))(DropTargetComponent);
