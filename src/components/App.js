/*global Mixcloud*/
import React, { Component } from 'react';
import FeaturedMix from './FeaturedMix'
import Header from './Header'
import Home from "./Home"
import { BrowserRouter as Router, Route } from "react-router-dom";
import mixesData from "../data/mixes"


const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: "",
      mix: null,
      mixIds: mixesData,
      mixes: []
    }
  }

  actions = {
    togglePlay: () =>{
      console.log("toggle play")
      this.widget.togglePlay()
    },
    playMix: mixName => {
      const {currentMix} = this.state
      if (currentMix===mixName) {
        //return will stop the code from running
        return this.widget.togglePlay()
      }
      this.setState({
        currentMix: mixName,
      })
      this.widget.load(mixName, true)
    }
  }

  fetchMixes = async () => {
    const {mixIds} = this.state
    mixIds.map(async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com${id}`)
        const data = await response.json()
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, data]
        }))
      } catch (error) {
        console.log(error);
      }
    })
  }


  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player)
    await this.widget.ready
    await this.widget.play()
    this.widget.events.pause.on(() =>
      this.setState({
        playing: false,
      })
    )
    this.widget.events.play.on(() =>
      this.setState({
        playing: true,
      })
    )
  }

  componentDidMount () {
    this.mountAudio()
    this.fetchMixes()
  }

  render() {
    const [firstMix = {}] = this.state.mixes
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix {...this.state} {...this.actions} {...firstMix} id={firstMix.key}/>
            <div className="w-50-l relative z-1">
              <Header />
              {/*<div>
                <button onClick={this.togglePlay}>{this.state.playing? "pause" : "play"}</button>
              </div>*/}
              <Route exact path="/"  component={()=> <Home {...this.state} {...this.actions}/>}/>
              <Route path="/archive"  component={Archive}/>
              <Route path="/about"  component={About}/>
            </div>
          </div>
          {/*<AudioPlayer />*/}
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
            frameBorder="0"
            className="db fixed bottom-0 z-5"
            ref={player => (this.player = player)}
          >
          </iframe>
        </div>
      </Router>
    );
  }
}

export default App;
