import React from 'react';
import {
  View, ImageBackground, StatusBar, Platform, Text,
} from 'react-native';
import { Immersive } from 'react-native-immersive';
import axios from 'axios';
import { PropTypes } from 'prop-types';
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
    const { clientId } = this.props;
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${clientId}&collections=162468`)
      .then((photo) => {
        this.setState({
          photoJson: photo.data,
        });
      });
  }

  render() {
    const { photoJson } = this.state;
    const { logoText } = this.props;
    return (
      <View style={styles.imageContainer}>
        {Platform.OS === 'ios' && <StatusBar hidden />}
        {photoJson.urls
          ? (
            <ImageBackground
              style={styles.image}
              source={{ uri: photoJson.urls.regular }}
            >
              <Text style={styles.textLogo}>{logoText}</Text>
            </ImageBackground>
          )
          : null }
      </View>
    );
  }
}

UnSplashScreen.propTypes = {
  clientId: PropTypes.string.isRequired,
  logoText: PropTypes.string,
};

UnSplashScreen.defaultProps = {
  logoText: 'Your Logo',
};
