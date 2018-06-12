import React, { Component } from 'react';
import Stat from './Stat'

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mix: {},
    }
  }
  componentWillReceiveProps (nextProps) {
    const {match} = this.props
    const {mixes} = nextProps
    const [firstMix] = mixes.filter(mix => mix.slug === match.params.slug)
    if (firstMix) {
      this.setState({
        mix:firstMix
      })
    }
  }
  render() {
    const {match} = this.props
    const {mix} = this.state
    const {mixes} = this.props
    return (
      <div className="ph3 ph4-l pad-bottom">
        <div className="measure center lh-copy">
          <div class="tags"></div>
          <p>{mix.description}</p>
          <div className="pt3">
            <Stat statName="Plays" stat={mix.play_count} statWord="times"/>
            <Stat statName="Uploaded" stat={mix.created_time} statWord="days ago"/>
            <Stat statName="Lasting for" stat={mix.audio_length/60} statWord="minutes"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Show
