import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { GoogleApiWrapper } from 'google-maps-react';
// import PlaygroundsMap from './components/Playground/PlaygroundsMap';


class App extends Component {
  render() {
    return (
      <div className="background">

        {/* <body>
          <div className="header">
            <div>Let's go Outdoors!</div>
            <style>
              @import url('https://fonts.googleapis.com/css?family=Delius');
        </style>
          </div>
          <div className="main-content">
            < img src="http://savetreessaveearth.com/wp-content/uploads/2015/06/savetreesaveearth-img1.gif" alt="Tree" />
          </div>
          <div className="footer"></div>
        </body> */}
        {routes}
        {/* <PlaygroundsMap google={this.props.google} /> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({ apikey: 'AIzaSyDi_ANtlUueF2com6-LYfFsyvE32hf59Ao' })(App);
