import React, { Component } from 'react';
import Counter from './Counter'

const Stat = ({stat, statName, statWord}) => (
  <div className="mb4">
    <div className="f5 black mb0 b">{statName}</div>
      <Counter end={stat} duration={2.75}/>
    <div className="f4 lh-1">{statWord}</div>
  </div>
  )

export default Stat
