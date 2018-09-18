import React from 'react';
import { View, Image } from 'react-native';
import { toJson } from 'unsplash-js/src/unsplash';
import unsplash from '../helpers/authHelper';

export default class UnSplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoJson: {},
    };
  }

  componentWillMount() {
    unsplash.photos.getRandomPhoto({ collections: [162468] }).then(toJson).then((json) => {
      this.setState({
        photoJson: json,
      });
    });
  }

  render() {
    const { photoJson } = this.state;
    return (
      <View>
        {photoJson.urls
          ? (
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: photoJson.urls.raw }}
            />
          )
          : null }
      </View>
    );
  }
}
