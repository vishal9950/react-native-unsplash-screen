import React, { Component } from 'react';
import UnSplashScreen from './src/components/UnSplashScreen.component';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UnSplashScreen />
    );
  }
}
