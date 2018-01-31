import React from 'react';
import ReactDOM from 'react-dom';

class Mappy extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // makes sure google api is available before loading component on the page
    if (prevProps.google !== this.props.google) {
      console.log(this);
      this.loadMap();
    }
  }

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
    const style = {
      height: '350px',
      width: '100%'
    }
    return (
      <div ref='map' style={style}>
      </div>
    )
  }
}

export default Mappy;
