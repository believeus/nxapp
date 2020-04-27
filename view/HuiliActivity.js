import React, { Component } from 'react';
import {StyleSheet,StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview'
import {TabBar, TabView, SceneMap } from 'react-native-tab-view'
import { I18n } from '../locales/i18n'

const FirstRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2015
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.medicine')}</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 79, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 79, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}> {I18n.t('HuiliActivity.award')}</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}> {I18n.t('HuiliActivity.grand')}</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2013
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.the')}</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('HuiliActivity.center')}</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}> {I18n.t('HuiliActivity.studentship')}</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2012
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.excel')}</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 145, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

            <View style={{ width: '70%', height: 145, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}> {I18n.t('HuiliActivity.excel2')}</Text>
                <View style={{height:12}}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 17, }}>{I18n.t('HuiliActivity.poster1')}</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2011
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.excel')}</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('HuiliActivity.center')} </Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>{I18n.t('HuiliActivity.travel2')}</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2010
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.excel')}</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 189, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 189, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('HuiliActivity.center')} </Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>{I18n.t('HuiliActivity.studentship')}</Text>
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('HuiliActivity.jp')}</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight:28 , }}>{I18n.t('HuiliActivity.fellowship')}</Text>
            </View>
        </View>
    </View>
);

const SecondRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        <View style={{ height: 20 }}></View>
        <Text style={{ fontFamily: 'FontAwesome', marginBottom:23, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.name')}</Text>
            {I18n.t('HuiliActivity.bing')}
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.retreat')}</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', marginBottom:23,lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.name')}</Text>
            {I18n.t('HuiliActivity.larose')}
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.retreat')}</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', marginBottom:23, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.name')}</Text>
            {I18n.t('HuiliActivity.louise')}
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.diabetes')}</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome',marginBottom:23, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.name')}</Text>
            {I18n.t('HuiliActivity.laroseakt')}
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.canada')}</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome',marginBottom:23, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('HuiliActivity.name')}</Text>
            {I18n.t('HuiliActivity.nck')}
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}> {I18n.t('HuiliActivity.biology')}</Text>
        </Text>
    </View>
);
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
export default class HuiliActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("HuiliActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            index: 0,
            routes: [
                { key: 'first', title: I18n.t('HuiliActivity.honors') },
                { key: 'second', title: I18n.t('HuiliActivity.comferences') },
            ],
        }
    }
    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} startInLoadingState={true} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center',paddingTop: 20, marginBottom: 20 }}>
                    <Image style={{ height: 99, width: '100%' }} resizeMode="contain" source={require("../image/icons/huili.png")}></Image>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 44, textAlign: 'center', color: '#0071bc' }}>{I18n.t('HuiliActivity.title')}</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, textAlign: 'center', }}>{I18n.t('HuiliActivity.lab')}</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 18, textAlign: 'center', fontStyle: 'italic' }}>{I18n.t('HuiliActivity.ltb')}</Text>
                </View>
                <View style={{ marginBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('HuiliActivity.exper')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2017-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.kong')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 56, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 56, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('HuiliActivity.src')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>{I18n.t('HuiliActivity.manage')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2009-2016
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.university')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>{I18n.t('HuiliActivity.research')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2013-2014
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.student')} </Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 88, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

                    <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('HuiliActivity.montreal')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>{I18n.t('HuiliActivity.president')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2012-2013
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('HuiliActivity.student')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('HuiliActivity.montreal')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>{I18n.t('HuiliActivity.vice')}</Text>
                    </View>
                </View>

                <View style={{ height: 34 }}></View>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}

                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={{ height: 734, }}
                />

                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 56, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 18, fontWeight: 'bold', lineHeight: 56 }} >{I18n.t('HuiliActivity.papers')}</Text>
                </View>
                <View style={{ backgroundColor: '#1f96f4', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ width: '90%', height: 56, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/abs/pii/S0898656817301183" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>IRE1α links Nck1 deficiency to attenuated PTP1B expression in HepG2 cells.
							Cellular Signaling. 2017;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4236421/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Nck1 depletion induces activation of the PI3K/Akt pathway by attenuating
							PTP1B protein expression. Cell Communication and Signaling. 2014;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 56, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6019900/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Hepatocellular carcinoma induced specific angiogenesis.Chinese Clinical
						Oncology . 2009;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/pii/S1567576908003548" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>A novel peptide isolated from phage display peptides library recognized by
							an antibody against connective tissue growth factor. International  Immunopharmacology. 2009;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://link.springer.com/article/10.1007%2Fs00284-008-9241-6" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Effects of cations and PH on antimicrobial activity of Thanatin and s-Thanatin
							against Escherichia coli ATCC25922 and B. subtilis ATCC 21332. Current Microbiology. 2008;</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('DavidActivity.all')}</Text>
            </ScrollView >

        );
    }
}

