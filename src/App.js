import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import PlaygroundsMap from './components/Playground/PlaygroundsMap';


class App extends Component {
  render() {
    return (
      <div className="App">
      {routes}
      <PlaygroundsMap google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({ apikey: 'AIzaSyDi_ANtlUueF2com6-LYfFsyvE32hf59Ao'})(App);
