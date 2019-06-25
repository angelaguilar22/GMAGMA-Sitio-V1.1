import React, { Component } from 'react';
import HEREMap from 'react-here-maps';

export default class Map extends Component {
  render() {
    return (
      <HEREMap
        appId="oFvmW6FFPWFy8He233Wx"
        appCode="cUnM_frDndKXYemh7RhVWg"
        center={{ lat: 0, lng: 0 }}
        zoom={14}
      />
    )
  }
}