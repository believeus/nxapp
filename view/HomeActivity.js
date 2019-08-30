import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image ,Button} from 'react-native';

type Props = {};
export default class HomeActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }


    render() {
        const navigate=this.props.navigation;//此处可以自定义跳转属性
        return (
            <View>
                <Text>HomeActivity Screen</Text>
                <Button  title="About View" onPress={()=>navigate.push("About")}></Button>
           </View>
           
        );
    }
}

