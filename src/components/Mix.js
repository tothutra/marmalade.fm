import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PlayButton from './PlayButton'
import PlayMix from './PlayMix'

const Mix = ({name, pictures, slug, ...props}) => (
  <div
    className="aspect-ratio aspect-ratio--3x4 pointer bg-center cover"
    style={{backgroundImage: `url(${pictures.extra_large})`}}
  >
  <Link to={`/show/${slug}`}>
    <div className="ph3 pv4 aspect-ratio--object mix-overlay">
      <div className="flex items-center relative z-2">
        <h1 className="f4 f3-l mv0 white ttu biryani pr2 lh-title">{name}</h1>
        <PlayMix {...props}>
          <PlayButton />
        </PlayMix>
      </div>
    </div>
  </Link>
  </div>
)

export default Mix
