import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import Mappy from './Mappy';

class Container extends React.Component {

  render() {
    // const style = {
    //   width: 100vh,
    //   height: 100vh
    //   // position: 'relative'
    // }
    return (
      <div>
        <Mappy google={this.props.google} userLoc={this.props.userLoc} loadMap={this.props.loadMap}/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyDmDmWLXi-H79HnKH2A9NrWyTJuZ2vJY1o`
})(Container)
