import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TabNavigator, Dimensions } from 'react-native';
import RootStack from './view/StackHomeActivity';
import { MenuProvider } from 'react-native-popup-menu';
import AppIntro from 'rn-app-intro-screen';


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').height,
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
  static navigationOptions = ({ navigation, screenProps }) => {
    return ({
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    }
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
        renderNextButton={this._renderNextButton}
      />
    }



  }
}

