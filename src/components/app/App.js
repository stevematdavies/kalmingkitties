import React from 'react';
import { Text } from '../../utils/constants';
import Divider from '../divider/divider';
import Logo from '../logo/logo';
import Viewer from '../viewer/viewer';
import Button from '../button/button';

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <h2 className="app-heading app-heading-1">{Text.title}</h2>
          <Logo feature="inline" />
        </span>
        <Divider />
        <Viewer />
        <Divider />
        <Button title="Get me a Kute Kitty!" />
      </div>
    </div>
  );
};

export default App;
