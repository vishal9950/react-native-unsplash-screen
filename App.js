import React, { Component } from 'react';
import UnSplashScreen from './components/UnSplashScreen.component';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UnSplashScreen
        clientId="YOUR_ACCESS_KEY"
        logoText="Hipsterage"
      />
    );
  }
}
