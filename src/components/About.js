import React, { Component } from 'react';
import {connect} from 'react-redux'

import Counter from './Counter'
import Stat from './Stat'

const About = ({mixes}) => (
  <div className="ph3 ph4-l pad-bottom mb4">
    <div className="measure center lh-copy">
      <p className="mt0">Marmalade.fm features the latest and greatest in grooves, beats and world music.</p>
      <p className="mt0">Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have you covered!</p>
        <Stat statName="Featuring..." stat={mixes.length} statWord="mixes"/>
        <Stat statName="Played..." stat={mixes.reduce((accum, current) => accum+current.play_count, 0)} statWord="times"/>
        <Stat statName="With..." stat={mixes.reduce((accum, current) => accum+current.audio_length, 0)} statWord="seconds"/>
    </div>
  </div>
)

export default connect(state => state)(About)
