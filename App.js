import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Some Text</Text>
      </View>
    );
  }
}
