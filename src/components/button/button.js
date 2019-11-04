import React, { useRef, useEffect } from 'react';
import './button.css';

const Button = props => {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.addEventListener('click', props.callback);
  }, [props.callback]);

  const { title } = props;
  return (
    <div ref={buttonRef} className="button">
      {title}
    </div>
  );
};

export default Button;
