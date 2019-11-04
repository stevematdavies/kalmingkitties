import React, { useState } from 'react';
import { Text } from '../../utils/constants';
import Divider from '../divider/divider';
import Logo from '../logo/logo';
import axios from 'axios';
import Viewer from '../viewer/viewer';
import Button from '../button/button';
import { Api } from '../../utils/constants';

import './App.css';

const App = () => {
  const [imgSrc, setImageSrc] = useState('');

  const callback = async rc => {
    try {
      const q = await axios.get(Api.search, {
        params: { size: 'full' }
      });
      setImageSrc(q.data[0].url);
    } catch (err) {
      console.log(err);
    }
  };

  const getImage = src => {
    return src ? (
      <div className="kitty-image-container">
        <img src={src} className="kitty-image" alt="kitty" />
      </div>
    ) : (
      <Logo feature="placeholder" />
    );
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <h2 className="app-heading app-heading-1">{Text.title}</h2>
          <Logo feature="inline" />
        </span>
        <Divider />
        <Viewer>{getImage(imgSrc)}</Viewer>
        <Divider />
        <Button title="Get me a Kute Kitty!" callback={callback} />
      </div>
    </div>
  );
};

export default App;
