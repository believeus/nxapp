import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TabNavigator, Dimensions, StatusBar } from 'react-native';
import RootStack from './view/StackHomeActivity';
import { MenuProvider } from 'react-native-popup-menu';
import AppIntro from 'rn-app-intro-screen';
import Session from './storage/Session';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',

  }
});

const slides = [
  {
    image: require('./image/enpic/nav1.jpg'),
    imageStyle: styles.image,
    backgroundColor: 'transparent',
  },
  {
    image: require('./image/enpic/nav2.jpg'),
    imageStyle: styles.image,
  },
  {
    image: require('./image/enpic/nav3.jpg'),
    imageStyle: styles.image,
  },
  {
    image: require('./image/enpic/nav4.jpg'),
    imageStyle: styles.image,
  }
];

export default class App extends Component<Props> {
  // static navigationOptions = ({ navigation, screenProps }) => {
  //   return ({
  //   })
  // }
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    }
    // Session.load("launchershow").then((display) => {
    //   this.setState({ showRealApp: display })
    // }).catch((error)=>{
    //   this.setState({ showRealApp: false })
    // });
  }



  render() {

    if (this.state.showRealApp) {
      return <MenuProvider>
        <RootStack />
      </MenuProvider>
    }
    else {
      return <AppIntro
        slides={slides}
        onDone={() => { this.setState({ showRealApp: true }) }}
        onSkip={() => { this.setState({ showRealApp: true }) }}
        showSkipButton={true}
      />
    }



  }
}

