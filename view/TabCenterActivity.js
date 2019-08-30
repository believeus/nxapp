import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,Button } from 'react-native';


type Props = {};
export default class CenterActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            //borderColor:"grey",borderWidth:1
            //alignItems:'center' 左右居中
            <View>
                <View style={{backgroundColor:'#0071bc',height:180,alignItems:'center'}}>
                    <View style={{width:"100%",height:30}}></View>
                    <View style={{height:60,width:'100%'}}><Image  style={{height:"100%",width:'100%'}}  resizeMode ="contain" source={require("../image/icons/user-logo.png")}></Image></View>
                    <View style={ {flexDirection:'row',marginTop:20,}}>
                        <View style={ {width:'25%',height:25,justifyContent:'center',borderRightColor:"#ffffff",borderRightWidth:1}}>
                            <Text style={ {fontSize:18,color:"#ffffff",textAlign:"center",paddingLeft:10}}>login</Text>
                        </View>
                        <View  style={ {width:'25%',height:25,justifyContent:'center'}}>
                        <Text style={ {fontSize:18,color:"#ffffff",textAlign:"center"}}>Register</Text>
                        </View>
                    </View>
                    <Text style={{color: 'blue',fontWeight: 'bold',fontSize: 60}}>Center</Text>
                    <Button style={{}} title="click me"></Button>
                </View>
            </View>
        );
    }
}

