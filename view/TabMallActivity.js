import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Modal, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import GoodsItem from './GoodsItem';

export default class MallActivity extends Component<Props> {

    constructor(props) {
        super(props);
        
    }


    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <View>
                <Text style={{ paddingLeft: 20, paddingTop: 12, fontFamily: 'NotoSansHans-Light', fontSize: 26, backgroundColor: '#ffffff' }}>Health Market</Text>
                <Text style={{ paddingLeft: 20, color: '#e95a24', backgroundColor: '#efefef', fontFamily: 'NotoSansHans-Light' }}>Tip: An additional 20 USD courier fee is required</Text>
                <View style={{ alignItems: 'center' }}>
                    <GoodsItem
                        id={"1"}
                        imgpath={require('../image/icons/DNA.png')}
                        title={"Biological age detection2.0"}
                        intro={"Saliva DNA Collection Kit"}
                        oldprice={"$198"}
                        newprice={"$99"}
                        unit={"/kit"}
                    />


                    <View style={{ backgroundColor: '#efefef', height: 12, width: '100%' }}></View>
                    <GoodsItem
                        id={"2"}
                        imgpath={require('../image/icons/SAM-e.png')}
                        title={"SAM-e"}
                        intro={"S-adenosine Supplement"}
                        oldprice={"$88"}
                        newprice={"$60"}
                        unit={"/box"} />
                    <TouchableOpacity style={{ width: "100%", height: 20 }}>
                        <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="去支付" onPress={() => { navigate.push("Payment") }} />
                    </TouchableOpacity>
                </View>
            </View >

        );
    }
}

