import React from 'react';
import './App.css';
import Navigation from './Header.js';
import Main from './View.js';

const App = () => (
  <div className='app'>
    <h1>Router Demo Training</h1>
    <Navigation />
    <Main />
  </div>
);

export default App;


