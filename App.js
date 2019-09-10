import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RootStack from './view/StackHomeActivity';
import { MenuProvider } from 'react-native-popup-menu';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MenuProvider>
        <RootStack />
      </MenuProvider>
    );
  }
}

