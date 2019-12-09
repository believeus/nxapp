import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Alert, Easing, Animated } from 'react-native';
import { RNCamera } from "react-native-camera"
import { I18n } from '../locales/i18n'


type Props = {};
export default class ScannerAcitivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ScannerAcitivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,
            {
                toValue: -200,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };


    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <RNCamera style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
                    ref={ref => { this.camera = ref }}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    //  识别二维码
                    onBarCodeRead={(result) => {
                        const { data } = result;
                        this.props.navigation.state.params.callback(data)
                        this.props.navigation.goBack()
                        this.props.navigation.goBack({ param: { barcode: data } })
                    }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <View style={{ height: 200, width: 200, borderWidth: 1, borderColor: '#00FF00', backgroundColor: 'transparent' }} />
                        <Animated.View style={[
                            { flex: 0, width: 200, height: 2, backgroundColor: '#00FF00', },
                            { transform: [{ translateY: this.state.moveAnim }] }]} />
                       
                    </View>
                </RNCamera>
            </View>
        )
    }


}