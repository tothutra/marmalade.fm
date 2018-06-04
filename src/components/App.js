/*global Mixcloud*/
import React, { Component } from 'react';
import FeaturedMix from './FeaturedMix'
import Header from './Header'
import Home from "./Home"
import { BrowserRouter as Router, Route } from "react-router-dom";


const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: ""
    }
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
    console.log(this.widget)
  }

  componentDidMount () {
    this.mountAudio()
  }

  togglePlay = () =>{
    console.log("toggle play")
    this.widget.togglePlay()
  }

  playMix = mixname => {
    this.widget.load(mixname, true)
  }
  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />
              <div>
                <button onClick={this.togglePlay}>{this.state.playing? "pause" : "play"}</button>
              </div>
              <Route exact path="/"  component={Home}/>
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
