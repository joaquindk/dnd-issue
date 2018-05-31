import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './App.css';
import DragLayer from './DragLayer';
import DragSource from './DragSource';
import DropTarget from './DropTarget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DragLayer withHack />
        <DragSource />
        <DropTarget />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
