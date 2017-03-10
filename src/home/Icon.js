import React from 'react';

const Icon = ({style}) => (
  <svg viewBox="0 0 270 170" style={style} xmlns="http://www.w3.org/2000/svg">
    <rect height="70" width="70" y="0" x="0" fill="#e53935"/>
    <rect height="70" width="70" y="0" x="100" fill="#e53935"/>
    <rect height="70" width="70" y="100" x="100" fill="#3949ab"/>
    <path d="M 200 100 h 70 v 50 l -20 20 h -50 Z" fill="#3949ab"/>
  </svg>
);

export default Icon;
