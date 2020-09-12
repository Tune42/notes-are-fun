/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import Menu from './Components/Menu.js';
import Notes from './Components/Notes.js';

function App() {
  return (
    <div className="App">
      <Menu />
      <Notes />
    </div>
  );
}

export default App;
