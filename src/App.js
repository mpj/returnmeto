import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  reportLocationClicked(event) {
    event.preventDefault()
    navigator
      .geolocation
      .getCurrentPosition(position => 
        console.log(
          "lat lon",
          position.coords.latitude, 
          position.coords.longitude
        )
      )
  }
  render() {
    return (
      <div>Hello. I am lost. Help me be found by reporting
        my location to my owner. 
        <form>
          <label for="email">Email (optional, if you want a reward)</label>
          <input id="email" value="" />
          <button 
            onClick={this.reportLocationClicked.bind(this)}>
              Report location
          </button>
        </form>
      </div>
    );
  }
}

export default App;
