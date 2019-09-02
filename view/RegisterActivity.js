import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, fontFamily, TextInput,TouchableOpacity, Alert, FetchResult, AppRegistry} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


type Props = {};
export default class RegisterActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        //const navigator=this.props.navitation;//此处可以自定义跳转属性
        return (
            <View>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <View style={{ height: 20 }}></View>
                    <View style={{ alignItems:'flex-start', justifyContent:'flex-start' }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22 }}>Register</Text>
                    </View>
                    <View style={{ alignItems:'flex-end', justifyContent:'flex-end' }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Select your region:</Text>
                        <ModalDropdown options={['option 1', 'option 2']}/>
                    </View>
                    <View style={{ alignItems: 'center', height: 45, alignContent: 'center', marginTop: 20 }}>
                        <TextInput style={{
                            height: 45, width: '100%',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#b3b3b3',
                            marginBottom: 10,
                            fontSize: 16,
                            paddingLeft: 10
                        }}
                            onChangeText={(text) => { this.setState({ userName: text }); }}
                            placeholder="Email" />
                    </View>
                    <View style={{ alignItems: 'center', height: 45, alignContent: 'center', marginTop: 20 }}>
                        <TextInput style={{
                            height: 45, width: '100%',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#b3b3b3',
                            marginBottom: 10,
                            fontSize: 16,
                            paddingLeft: 10
                        }}
                            onChangeText={(text) => { this.setState({ userName: text }); }}
                            placeholder="Password" />
                    </View>
                    <View style={{height: 60, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, color: '#007186' }}>Forget Password?</Text>
                    </View>
                    <View>
                        <TouchableOpacity >
                            <Text style={{ height: 45, borderRadius: 20, backgroundColor: "#0071bc",fontFamily:'NotoSansHans-Light',color:'#FFFFFF', fontSize:22,textAlign:'center',lineHeight:50 }}> Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:60,alignItems:'center',fontSize:14,justifyContent:'center'}} >
                        <Text style={{fontFamily:'NotoSansHans-Light',color:'#b3b3b3',lineHeight:20}}>Don't have an account?</Text>
                        <Text style={{fontFamily:'NotoSansHans-Light',color:'#0071bc',lineHeight:20}}>Register</Text>
                    </View>
                </View>
            </View>
        );
    }
}

