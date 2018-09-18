import React from 'react';
import {
  View, Image, StatusBar, Platform,
} from 'react-native';
import { toJson } from 'unsplash-js/src/unsplash';
import { Immersive } from 'react-native-immersive';
import unsplash from '../helpers/authHelper';
import styles from './UnSplashScreen.style';

export default class UnSplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoJson: {},
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      Immersive.on();
      Immersive.setImmersive(true);
    }
    unsplash.photos.getRandomPhoto({ collections: [162468] }).then(toJson).then((json) => {
      this.setState({
        photoJson: json,
      });
    });
  }

  render() {
    const { photoJson } = this.state;
    return (
      <View style={styles.imageContainer}>
        {Platform.OS === 'ios' && <StatusBar hidden />}
        {photoJson.urls
          ? (
            <Image
              style={styles.image}
              source={{ uri: photoJson.urls.raw }}
            />
          )
          : null }
      </View>
    );
  }
}
