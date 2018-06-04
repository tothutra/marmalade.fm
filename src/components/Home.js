import React, { Component } from 'react';
import Mix from "./Mix"

const Home = props => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    <div className="mix mb4">
      <Mix
        name="Ambient treasures"
        id="/salvatore-muscat/ambient-treasures-vol1-towards-the-dream/"
      />
    </div>
  </div>
)

export default Home
