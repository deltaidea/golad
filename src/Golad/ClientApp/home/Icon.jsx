import React from 'react';

const Icon = ({playerColor, opponentColor, ...customProps}) => (
  <svg viewBox="0 0 270 170" xmlns="http://www.w3.org/2000/svg" {...customProps}>
    <rect height="70" width="70" y="0" x="0" fill={playerColor}/>
    <rect height="70" width="70" y="0" x="100" fill={playerColor}/>
    <rect height="70" width="70" y="100" x="100" fill={opponentColor}/>
    <path d="M 200 100 h 70 v 50 l -20 20 h -50 Z" fill={opponentColor}/>
  </svg>
);

export default Icon;
