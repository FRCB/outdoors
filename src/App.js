import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
          <body>
          <div className="header"></div>
          <style>
          @import url('https://fonts.googleapis.com/css?family=Delius');
</style>
          <h1 className="App-title"> Let's go Outdoors!</h1>
          <div className="main-content">
            < img src="http://savetreessaveearth.com/wp-content/uploads/2015/06/savetreesaveearth-img1.gif" alt="Tree"/>
          </div>
          
          </body>
     {routes}
      </div>
    );
  }
}

export default App;
