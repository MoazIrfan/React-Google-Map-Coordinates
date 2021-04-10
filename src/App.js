import React, { Component } from "react";
import "./App.css";
import { Map, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  state = {
    center: {
      lat: 37.757815,
      lng: -122.5076404
    }
  };
  handleClick(id, e) {
    this.bvar = id;
  }
  render() {
    const { center } = this.state;
    return (
      <div className="App">
        <header className="App-header">React Google Map Coordinates (Key removed by administrator, plz put your key)</header>
        <div className="loc-ls">
          <ul>
            <li
              id="284097"
              onClick={() =>
                this.setState({ center: { lat: 37.757815, lng: -122.5076404 } })
              }
            >
              <button onClick={this.handleClick.bind(this, 284097)}>
                San Francisco
              </button>
            </li>
            <li
              id="925374"
              onClick={() =>
                this.setState({ center: { lat: 34.137536, lng: -117.9474881 } })
              }
            >
              <button onClick={this.handleClick.bind(this, 925374)}>
                Los Angeles
              </button>
            </li>
            <li
              id="620128"
              onClick={() =>
                this.setState({
                  center: { lat: 36.1251958, lng: -115.3150861 }
                })
              }
            >
              <button onClick={this.handleClick.bind(this, 620128)}>
                Las Vegas
              </button>
            </li>
          </ul>
        </div>

        <div className="map-canvas">
          <h5 className="add-bar">Rand ID: {this.bvar} </h5>
          <Map
            style={{
              height: "80%",
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "center",
              padding: 0
            }}
            google={this.props.google}
            center={center}
            zoom={11}
            onClick={this.onMapClicked}
          />
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "API_KEY"
})(App);
