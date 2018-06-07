import React, { Component } from 'react';
import Mix from "./Mix"

const Home = props => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    <div className="mix mb4">
      <Mix name="A Mystical Ambience" id="/lowlight/a-mystical-ambience/" {...props}/>
    </div>
    <div className="mix mb4">
      <Mix name="Mixtapes #41. Sun Goes Nova. Ambience and Rhythm" id="/sungoesnova/mixtapes-41-sun-goes-nova-ambience-and-rhythm/" {...props}/>
    </div>
    <div className="mix mb4">
      <Mix name="insistence on purity" id="/HeadphoneCommute/k-insistence-on-purity/" {...props}/>
    </div>
  </div>
)

export default Home
