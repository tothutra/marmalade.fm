import React, { Component } from 'react';
import Stat from './Stat'
import differenceInDays from 'date-fns/difference_in_days'

const Tag = ({name, url, ...props}) => (
  <div className="mr2 mb2 o-70">
    <a className="block f6 link blue b ba br2 bw1 pv1 ph2 lh-title" href={url} target="_blank" >{name}</a>
  </div>
)
const Tags = ({tags =[]}) => (
  <div className="tags flex flex-wrap">
    {tags.map(tag => <Tag {...tag} />)}
  </div>
)

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
    const [firstMix={}] = mixes.filter(mix => mix.slug === match.params.slug)
    this.setState({
      mix:firstMix
    })
  }
  render() {
    const {match} = this.props
    const {mix} = this.state
    const {mixes} = this.props
    return (
      <div className="ph3 ph4-l pad-bottom">
        <div className="measure center lh-copy">
          <Tags tags={mix.tags} />
          <p>{mix.description}</p>
          <div className="pt3">
            <Stat statName="Plays" stat={mix.play_count} statWord="times"/>
            <Stat statName="Uploaded" stat={differenceInDays(new Date(), mix.created_time)} statWord="days ago"/>
            <Stat statName="Lasting for" stat={mix.audio_length/60} statWord="minutes"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Show
