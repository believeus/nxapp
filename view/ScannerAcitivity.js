import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Container } from 'react-native';
import Barcode from 'react-native-smart-barcode'

type Props = {};
export default class ScannerAcitivity extends Component<Props> {
    // 构造
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Barcode style={{ flex: 1, }}
                ref={component => this._barCode = component}
                onBarCodeRead={this._onBarCodeRead} />
        )
    }

   

    _onBarCodeRead = (e) => {
        console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
        this._stopScan()
        const {navigate,goBack,state} = this.props.navigation;
        state.params.callback(e.nativeEvent.data.code);
        this.props.navigation.goBack();  
        //this.props.navigation.goBack({param:{barcode:e.nativeEvent.data.code}});  
        // Alert.alert(e.nativeEvent.data.type, e.nativeEvent.data.code, [
        //     { text: 'OK', onPress: () => {
        //         this._startScan()
        //     } 
        // },
        // ])
    }

    _startScan = (e) => {
        this._barCode.startScan()
    }

    _stopScan = (e) => {
        this._barCode.stopScan()
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        margin: 10
    }
})