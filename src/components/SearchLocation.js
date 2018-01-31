import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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
      <form className="offset-by-three six columns" onSubmit={(e) => this.findLocation(e)}>
        <h2>Feeling Spicy?</h2>
        <h4>Time to chill out,man</h4>
        {/* <PlacesAutocomplete inputProps={inputProps} placeholder="Enter your location in Toronto"/> */}
        <button className="button-primary u-full-width" type="submit">Auto-detect Location?</button>
      </form>
    )
  }
}

export default SearchLocation;
