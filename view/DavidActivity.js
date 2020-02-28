import React, { Component } from 'react';
import {StyleSheet, StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import {TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

const FirstRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        <View style={{ height: 30 }}></View>
        <Text style={{ fontStyle: 'italic', lineHeight: 28, fontWeight: '700' }}>{I18n.t('DavidActivity.us')}</Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21, }}>
            {I18n.t('DavidActivity.cancer')}</Text>

        <View style={{ height: 30 }}></View>
        <Text style={{ fontStyle: 'italic', lineHeight: 28, fontWeight: '700' }}>{I18n.t('DavidActivity.uspa')}</Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21, }}>
            {I18n.t('DavidActivity.dna')}</Text>
        <View style={{ height: 45 }}></View>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>2011-- <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.fellow')}</Text>{I18n.t('DavidActivity.israel')}</Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>2010--{I18n.t('DavidActivity.alumni')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}> {I18n.t('DavidActivity.award')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>2009--{I18n.t('DavidActivity.medical')}<Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}> {I18n.t('DavidActivity.award')}</Text></Text>
    </View>
);

const SecondRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.forum')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.india')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.diseases')} <Text style={{ fontWeight: '700', fontStyle: 'italic', }}>{I18n.t('DavidActivity.canadaa')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.conference')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.first')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.erat')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.reseach')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.oslo')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.cell')}  <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.france')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.basic')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.health')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.london')} </Text></Text>
    </View>
);
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
export default class DavidActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DavidActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            index: 0,
            routes: [
                { key: 'first', title: I18n.t('DavidActivity.honor') },
                { key: 'second', title: I18n.t('DavidActivity.conferences') },
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
                        <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', marginBottom: 20,marginTop:23 }}>
                    <Image style={{ height: 99, width: '100%' }} resizeMode="contain" source={require("../image/icons/david.png")}></Image>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 44, textAlign: 'center', color: '#0071bc' }}>{I18n.t("DavidActivity.title")}</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, textAlign: 'center', }}>{I18n.t("DavidActivity.senior")}</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 18, textAlign: 'center', fontStyle: 'italic' }}>{I18n.t("DavidActivity.hkg")}</Text>
                </View>
                <View style={{ marginBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('DavidActivity.professional')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2017-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('DavidActivity.hong')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 56, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <Text style={{ width: '70%', height: 56, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}><Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 27 }}>{I18n.t("DavidActivity.senior")}</Text> </Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2016-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('DavidActivity.montreal')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('DavidActivity.canada')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>{I18n.t('DavidActivity.founder')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2016-2017
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('DavidActivity.department')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('DavidActivity.mcgill')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>{I18n.t('DavidActivity.research')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2011-2016
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('DavidActivity.department')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('DavidActivity.university')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>{I18n.t('DavidActivity.fellowed')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2004-2011
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('DavidActivity.hebrew')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>{I18n.t('DavidActivity.school')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>{I18n.t('DavidActivity.assistant')}</Text>
                    </View>
                </View>

                <View style={{ height: 20 }}></View>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}

                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={{ height: 678, }}
                />

                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 56, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 18, fontWeight: 'bold', lineHeight: 56 }} >{I18n.t('DavidActivity.publshed')}</Text>
                </View>
                <View style={{ backgroundColor: '#1f96f4', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/29924424" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Identification of an Epigenetic Signature of Osteoporosis in Blood DNA of Postmenopausal Women. JBMR. 2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-018-4482-7" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>DNA methylation signatures of breast cancer in peripheral T-cells. BMC  Cancer.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://clinicalepigeneticsjournal.biomedcentral.com/articles/10.1186/s13148-017-0436-1" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>The signature of liver cancer in immune cells DNA methylation. Clin Epigenetics.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.onlinelibrary.wiley.com/doi/full/10.1002/mnfr.201701008" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Personalized cardio-metabolic responses to an anti-inflammatory nutrition intervention in obese adolescents: a randomized controlled crossover trial.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/abs/pii/S1094695016301780" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Genetic polymorphisms in ESR1 and VDR genes do not correlate with osteoporosis with familial dysautonomia.  J Clin Densitom.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.greenmedinfo.health/article/methyl-donor-s-adenosylmethionine-sam-supplementation-attenuates-breast-cancer" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Methyl donor S-adenosylmethionine (SAM) supplementation attenuates breast cancer growth, invasion, and metastasis in vivo; therapeutic and chemopreventive applications.Oncotarget. 2017;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://academic.oup.com/nar/article/45/22/12681/4259028" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Epigenetic mechanisms underlie the crosstalk between growth factors and a steroid hormone.Nucleic Acids Res. 2017;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.researchgate.net/publication/316689941_DNA_methylation_controls_unmethylated_transcription_start_sites_in_the_genome_in_trans" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}> DNA methylation controls unmethylated transcription start sites in the genome in trans”. Epigenomics . 2017;</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('DavidActivity.all')}</Text>
            </ScrollView >

        );
    }
}

