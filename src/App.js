import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Newsitem from './Component/Newsitem'
import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  state = { progress: 10 };

  setProgress = (progressVal) => {
    this.setState({ progress: progressVal });
  }
  render() {
    return (
      <div>
        <Router basename='/'>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Navbar />
          <Switch>
            <Route exact path="/"><Newsitem setProgress={this.setProgress} key='general' category='general' pageSize={9} /></Route>
            <Route exact path="/business"><Newsitem setProgress={this.setProgress} key='business' category='business' pageSize={9} /></Route>
            <Route exact path="/sports"><Newsitem setProgress={this.setProgress} key='sports' category='sports' pageSize={9} /></Route>
            <Route exact path="/entertainment"><Newsitem setProgress={this.setProgress} key='entertainment' category='entertainment' pageSize={9} /></Route>
            <Route exact path="/health"><Newsitem setProgress={this.setProgress} key='health' category='health' pageSize={9} /></Route>
            <Route exact path="/technology"><Newsitem setProgress={this.setProgress} key='technology' category='technology' pageSize={9} /></Route>
            <Route exact path="/science"><Newsitem setProgress={this.setProgress} key='science' category='science' pageSize={9} /></Route>
          </Switch>
        </Router>
      </div>

    )
  }
}
