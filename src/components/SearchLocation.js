import React from 'react';

class SearchLocation extends React.Component {

  // Collects the user's location

      findLocation(e) {
        e.preventDefault();

        const nav = navigator.geolocation;

        const success = (position) => {

          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        this.props.getMyLocation(userLocation);
        }

        const failure = () => {
          console.log("hi");
        }

        nav.getCurrentPosition(success, failure);
      }

  render() {
    return (
      <form className="offset-by-three six columns" onSubmit={this.findLocation.bind(this)}>
        <h2>Feeling Spicy?</h2>
        <h4>Time to chill out,man</h4>
        <input type="text" placeholder="Enter your location in Toronto" className="u-full-width"/>
        <button className="button-primary u-full-width" type="submit">Auto-detect Location?</button>
      </form>
    )
  }
}

export default SearchLocation;
