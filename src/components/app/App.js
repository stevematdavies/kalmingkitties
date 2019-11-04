import React from 'react';
import './App.css';
import { Text } from '../../utils/constants';
import Divider from '../divider/divider';

const App = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <h2 className="app-heading app-heading-1">{Text.title}</h2>
        <Divider />
      </div>
    </div>
  );
};

export default App;
