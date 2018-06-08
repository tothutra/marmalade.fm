import React, { Component } from 'react';

const Stat = ({stat, statName, statWord}) => <div className="w-third tc pa3 ba bw2 b--light-gray">
  <div className="f6  biryani ttu">{statName}</div>
  <div className="f5 b biryani-black ttu tracked">{stat} {statWord}</div>
</div>

const About = ({mixes, ...props}) => (
  <div className="ph3 ph4-l">
    <div className="measue center lh-copy f4 ph3">
      <p>Marmalade.fm features the latest and greatest in grooves, beats and world music.</p>
      <p>Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat… we have you covered!</p>
    </div>
    <div className="flex pt3">
      <Stat statName="Featuring..." stat={mixes.length} statWord="mixes"/>
      <Stat statName="Played..." stat={mixes.reduce((accum, current) => accum+current.play_count, 0)} statWord="times"/>
      <Stat statName="With..." stat={mixes.reduce((accum, current) => accum+current.audio_length, 0)} statWord="seconds"/>
    </div>
  </div>
)

export default About
