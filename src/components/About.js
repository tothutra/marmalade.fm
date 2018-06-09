import React, { Component } from 'react';
import Counter from './Counter'

const Stat = ({stat, statName, statWord}) => (<div className="mb4">
  <div className="f5 black mb0 b">{statName}</div>
  <Counter end={stat} duration={2.75}/>
  <div className="f4 lh-1">{statWord}</div>
</div>
)

const About = ({mixes, ...props}) => (
  <div className="ph3 ph4-l measue center">
    <div className="lh-copy ph3">
      <p className="mt0">Marmalade.fm features the latest and greatest in grooves, beats and world music.</p>
      <p>Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have you covered!</p>
    </div>
    <div className="pt3">
      <Stat statName="Featuring..." stat={mixes.length} statWord="mixes"/>
      <Stat statName="Played..." stat={mixes.reduce((accum, current) => accum+current.play_count, 0)} statWord="times"/>
      <Stat statName="With..." stat={mixes.reduce((accum, current) => accum+current.audio_length, 0)} statWord="seconds"/>
    </div>
  </div>
)

export default About
