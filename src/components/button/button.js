import React from 'react';
import './button.css';

const Button = props => {
  const { title, color, callback } = props;
  return <div className="button">{title}</div>;
};

export default Button;
