import React, { Component } from 'react';
import Counter from './Counter'
import Stat from './Stat'

const About = ({mixes, ...props}) => (
  <div className="ph3 ph4-l pad-bottom">
    <div className="measue center lh-copy">
      <div className="ph3">
        <p className="mt0">Marmalade.fm features the latest and greatest in grooves, beats and world music.</p>
        <p>Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have you covered!</p>
      </div>
      <div className="pt3">
        <Stat statName="Featuring..." stat={mixes.length} statWord="mixes"/>
        <Stat statName="Played..." stat={mixes.reduce((accum, current) => accum+current.play_count, 0)} statWord="times"/>
        <Stat statName="With..." stat={mixes.reduce((accum, current) => accum+current.audio_length, 0)} statWord="seconds"/>
      </div>
    </div>
  </div>
)

export default About
