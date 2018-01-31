import React from 'react';
// import {render} from 'react-dom';
import SearchLocation from './SearchLocation';
import Container from './Container';

class App extends React.Component {

  constructor() {
    super();

    this.getMyLocation = this.getMyLocation.bind(this);
    // this.userLoc = this.userLocation.bind(this);

    this.state = {
      location: {
        longitude: {},
        latitude: {}
      }
    };
  }



  // Pulls user location from auto-detect button and adds to state
  getMyLocation(userLocation) {
  // copy of state
    const loc = {...this.state.location};

  // add new location to copy
    loc.latitude = userLocation.latitude;
    loc.longitude = userLocation.longitude;

  // set new state
    this.setState({ location: loc });
  }


    render() {
      return (
        <div className="container">
          <SearchLocation getMyLocation={this.getMyLocation}/>
          <Container userLoc={this.state.location}/>
        </div>
      )
    }
}

export default App;
