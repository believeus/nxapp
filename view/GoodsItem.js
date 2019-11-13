import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';


type Props = {};
export default class GoodsItem extends Component<Props> {
    constructor(props) {
        super(props);
        console.info(props)
        this.state = {
            size: 1,
            check: false,
        }
        this.props.size = 1

    }

    itemAdd() {
        this.setState({ size: this.state.size + 1 })
        this.props.size = this.state.size
    }
    itemMin() {
        if (this.state.size == 1) { return }
        this.setState({ size: this.state.size - 1 })
        this.props.size = this.state.size
    }
    render() {

        const navigate = this.props.navigation;
        //此处可以自定义跳转属性
        return (
            <View >
                <View style={{ height: 112 }}>
                    <View style={{ width: '90%', alignSelf: 'center', alignItems: 'center', flex: 1, flexDirection: 'row', flexWrap: 'nowrap' }}>
                        {/* <View style={{ width: '7%', marginRight: 5 }}>
                            <TouchableOpacity onPress={() => { this.state.check == true ? this.setState({ check: false }) : this.setState({ check: true }) }}>
                                <Image style={{ width: 23, height: 23 }} source={this.state.check == false ? require('../image/icons/tick.png') : require('../image/icons/tick-ok.png')} />
                            </TouchableOpacity>
                        </View> */}
                        <View style={{ width: '26%' }}>
                            <Image style={{ width: 62, height: 67, alignSelf: 'center' }} source={this.props.imgpath} resizeMode='contain' />
                        </View>
                        <View style={{ width: '52%' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', height: 34, width: 200, fontSize: 16, color: '#0071bc' }}>{this.props.title}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', height: 23, width: 178, fontSize: 12, lineHeight: 26 }}>{this.props.intro}</Text>
                            <View style={{ width: 78, height: 23, flexDirection: 'row' }}>
                                {/* <Text style={{ height: 23, fontFamily: 'NotoSansHans-Light', lineHeight: 31, textAlign: 'center', textDecorationLine: 'line-through' }}>{this.props.oldprice}</Text> */}
                                <Text style={{ height: 23, fontFamily: 'NotoSansHans-Light', lineHeight: 28, textAlign: 'center', justifyContent: 'center', color: '#f15a24', fontSize: 18 }}>&nbsp;&nbsp;{this.props.newprice}</Text>
                                <Text style={{ height: 23, fontFamily: 'NotoSansHans-Light', lineHeight: 28, textAlign: 'center', justifyContent: 'center', color: '#f15a24', fontSize: 18 }}>{this.props.unit}&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                <Text style={{ height: 23, width: 56, textAlign: 'center', color: '#ffffff', backgroundColor: '#cfcfcf' }}>Delete</Text>
                            </View>
                        </View>
                        <View style={{ width: '29%', marginTop: 56 }}>
                            <View style={{ height: 36, width: 78, alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <TouchableOpacity onPress={this.itemMin.bind(this)}>
                                    <Image style={{ width: 24, height: 24, alignSelf: 'center', marginTop: 5 }} source={require('../image/icons/min.png')} resizeMode='contain' />
                                </TouchableOpacity>
                                <Text style={{ alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontWeight: '700', textAlign: 'center' }}>{this.state.size}</Text>
                                <TouchableOpacity onPress={this.itemAdd.bind(this)}>
                                    <Image style={{ width: 24, height: 24, alignSelf: 'center', marginTop: 5 }} source={require('../image/icons/plus.png')} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}