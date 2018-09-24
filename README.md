# react-native-unsplash-screen
[![https://nodei.co/npm/react-native-unsplash-screen.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-native-unsplash-screen.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-native-unsplash-screen)

A react-native package that provides you the most awe-inspiring splash-screen/loading screen made from pictures provided by Unsplash API. The pictures you get are randomized and you get a new picture everytime 😌.

Use it for bootstrapping your new application and get it done right the first time 😎 or just let it be as is in your application throughout 😊.

It also praises the artists on Unsplash by providing a link back to their work on Unsplash ✌🏻.

## Installation
`yarn add react-native-unsplash-screen`
or
`npm i react-native-unsplash-screen`

After you have the package installed, you need to add some native code for android and ios. To let react-native handle that, just run

`react-native link`

This will do the necessary changes in your native android/ios code.

## Usage
### Unsplash key
Go to [Unsplash Developers](https://unsplash.com/developers) and register your app to get a demo access key which gives you 50 requests per hour, which should be enough for smaller projects, but you can always opt for the production or enterprise keys.
### Go for it
Once you have the key, import the screen as any other component in your code and provide the Unsplash API `access_key` and your app's name.

```js
import React, {Component} from 'react';
import UnSplashScreen from 'react-native-unsplash-screen';

export default class App extends Component {
  render() {
    return (
      <UnSplashScreen
        clientId="YOUR_ACCESS_KEY"
        logoText="YOUR_APP_NAME" // defaults to 'MyApp'
      />
    );
  }
}

```

...and voila

<img src="https://github.com/vishal9950/react-native-unsplash-screen/blob/master/sample/voila.gif" height= "437" width="213">

Note that it is just a component, so you can go all crazy about how you are gonna use it. I personally used it as a splash screen as well as a loading screen 👌🏻.

Depending on your use case you can make changes to the component by forking the repo and applying your changes over it.

For any issues, head on to the issue section [here](https://github.com/vishal9950/react-native-unsplash-screen/issues).

Happy Coding! 😊
