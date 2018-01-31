import React from 'react';
import ReactDOM from 'react-dom';
import SearchLocation from './SearchLocation';
import Container from './Container';

class App extends React.Component {

  constructor() {
    super();

    this.getMyLocation = this.getMyLocation.bind(this);
    this.loadMap = this.loadMap.bind(this);
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

// loads a bunch of map shit
  loadMap() {
    if (this.props && this.props.google) {
      const loc = this.props.userLoc;
      const latEmpty = Object.keys(loc.latitude).length;
      const longEmpty = Object.keys(loc.longitude).length;
      let lat = 43.70011;
      let lng = -79.4163;

      if (latEmpty !== 0) {
        lat = loc.latitude;
      }
      if (longEmpty !== 0) {
        lng = loc.longitude;
      }
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 10;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }


    render() {
      return (
        <div className="container">
          <SearchLocation getMyLocation={this.getMyLocation} loadMap={this.loadMap}/>
          <Container userLoc={this.state.location} loadMap={this.loadMap}/>
        </div>
      )
    }
}

export default App;
