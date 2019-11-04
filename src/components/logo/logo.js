import React from 'react';
import './logo.css';
import img from '../../assets/kitty.png';

const Logo = props => {
  const classname = `kitty-logo ${props.feature}`;
  return (
    <div className="logo">
      <img src={img} alt="kitty logo" className={classname} />
    </div>
  );
};

export default Logo;
