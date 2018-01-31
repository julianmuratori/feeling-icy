import React from 'react';
import ReactDOM from 'react-dom';
import SearchLocation from './SearchLocation';

class App extends React.Component {

  constructor() {
    super();

    this.getMyLocation = this.getMyLocation.bind(this);

    this.state = {
      location: {
        longitude: [],
        latitude: []
      }
    };
  }

  getMyLocation(userLocation) {
  // copy of state
    const loc = this.state.location;
    const newLat = loc.latitude;
    const newLong = loc.longitude;

  // add new location to copied array
    newLat.push(userLocation.latitude);
    newLong.push(userLocation.longitude);
    console.log(newLat, newLong);

  // set new state
    this.setState({
      location: {
        longitude: newLong,
        latitude: newLat
      }
    });
  }

    render() {
      return (
        <div className="container">
          <SearchLocation getMyLocation={this.getMyLocation}/>
        </div>
      )
    }
}

export default App;
