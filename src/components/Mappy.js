import React from 'react';
import ReactDOM from 'react-dom';

class Mappy extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // makes sure google api is available before loading component on the page
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 10;
      let lat = 43.6532;
      let lng = -79.3832;
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
      <div ref='map' style={style} className="hi">
      </div>
    )
  }
}

export default Mappy;
