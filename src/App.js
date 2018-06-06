import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { GoogleApiWrapper } from 'google-maps-react';




class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
