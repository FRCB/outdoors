import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { GoogleApiWrapper } from 'google-maps-react';
// import PlaygroundsMap from './components/Playground/PlaygroundsMap';



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
