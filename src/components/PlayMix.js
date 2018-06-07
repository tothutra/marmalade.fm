import React, { Component } from 'react';
  const PlayMix = ({playMix, id, children, currentMix}) => (
    <div className={`pointer ${id === currentMix && 'playing'}`} onClick={() => playMix(id)}>
        {children}
    </div>
  )

export default PlayMix
