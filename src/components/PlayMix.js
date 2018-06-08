import React, { Component } from 'react';
  const PlayMix = ({playMix, id, children, currentMix, playing}) => (
    <div className={`pointer ${id === currentMix && playing && 'playing'}`} onClick={() => playMix(id)}>
        {children}
    </div>
  )

export default PlayMix
