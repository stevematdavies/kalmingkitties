import React from 'react';
import './viewer.css';

const Viewer = props => {
  return <div className="viewer">{props.children}</div>;
};

export default Viewer;
