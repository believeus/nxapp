import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import RootStack from './view/StackHomeActivity';
import { MenuProvider } from 'react-native-popup-menu';
import AppIntro from 'rn-app-intro-screen';
import CodePush from "react-native-code-push";
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
  constructor(props) {
    super(props)
    this.state = {
      showapp: false,
      updateshow: false
    }
  }

  // static navigationOptions = ({ navigation, screenProps }) => {
  //   return ({
  //   })
  // }

  componentDidMount() {
    CodePush.sync(
      {
        deploymentKey: '8QRhFDxogSIdzaWKXUEpkwIk04jp5USlrEcooP',
        updateDialog: false,
        installMode: CodePush.InstallMode.IMMEDIATE //强制更新
      },
      (status) => {
        switch (status) {
          case CodePush.SyncStatus.UPDATE_IGNORED:
            this.setState({ updateshow: false })
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            //console.log('download')
            this.setState({ updateshow: true })
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            //console.log('installing')
            this.setState({ updateshow: false })
            break;
          default:
            this.setState({ updateshow: false })
            break;
        }
      },
      //自动回调
      ({ receivedBytes, totalBytes }) => {
        this.setState({ download: parseInt(receivedBytes * 100 / totalBytes) })
      }
    );
  }



  render() {
    return this.state.updateshow
      ?
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        zIndex: 10
      }}>
        <View style={{
          paddingVertical: 12, paddingHorizontal: 20, flexDirection: 'row',
          justifyContent: 'center', alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 6
        }}>
          <ActivityIndicator
            animating={true}
            color={"#FFFFFF"}
            size='large'
          />
          <Text style={{ marginLeft: 20, fontSize: 14, color: "#FFFFFF" }}>{this.state.download}%</Text>
        </View>
      </View>
      :
      this.state.showapp
        ?
        <MenuProvider>
          <RootStack />
        </MenuProvider>
        :
        <AppIntro
          slides={slides}
          onDone={() => { this.setState({ showapp: true }) }}
          onSkip={() => { this.setState({ showapp: true }) }}
          showSkipButton={true}
        />
  }
}

