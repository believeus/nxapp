import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

const FirstRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        <View style={{ height: 30 }}></View>
        <Text style={{ fontStyle: 'italic', lineHeight: 28, fontWeight: '700' }}>US patent 62/774,</Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21, }}>
            994 DNA Methylation Markers for Early Detection of Cervical Cancer (Filed 04-Dec-2018)</Text>

        <View style={{ height: 30 }}></View>
        <Text style={{ fontStyle: 'italic', lineHeight: 28, fontWeight: '700' }}>US patent 62/695,</Text>
        <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21, }}>
            429 DNA Methylation Markers for Noninvasive Detection of Cancer (Filed 07-Sept-2018)</Text>
     <View style={{ height: 45 }}></View>
     <Text style={{ fontFamily: 'FontAwesome', height: 56, lineHeight: 21, }}>2011-- <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Postdoctoral fellow </Text>of the Israel Cancer Research Foundation</Text>
     <Text style={{ fontFamily: 'FontAwesomet', height: 56, lineHeight: 21, }}>2010--Toronto Alumni and Alumni Medical <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}> Excellence Award</Text></Text>
     <Text style={{ fontFamily: 'FontAwesome', height: 56, lineHeight: 21, }}>2009--Toronto Alumni and Friends Medical<Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}> Excellence Award</Text></Text>
 </View>
);

const SecondRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
    <View style={{ height: 20 }}></View>
    <Text style={{ fontFamily: 'FontAwesome', height: 56, lineHeight: 21 }}>2017 Sixth Asian Chromatin and Chromosome Forum <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Hyderabad, India)</Text></Text>
    <Text style={{ fontFamily: 'FontAwesome', height: 56, lineHeight: 21 }}>2016 3rd Canadian Conference on Epigenetics of Development and Diseases <Text style={{ fontWeight: '700', fontStyle: 'italic', }}>(Canada)</Text></Text>
    <Text style={{ fontFamily: 'FontAwesome', height: 88, lineHeight: 21 }}>2011 Family Autonomic Neurological Dysfunction Foundation Basic Scientific Research Conference <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Hyderabad, India)</Text></Text>
    <Text style={{ fontFamily: 'FontAwesome', height: 88, lineHeight: 21 }}>2010 First Scientific Conference of the Medical Research Institute of Hebrew University in Israel-Hadassah Medical College, Canada <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Erat, Israel)</Text></Text>
    <Text style={{ fontFamily: 'FontAwesome', height: 56, lineHeight: 21 }}>Twenty-first European Union for Cancer Research Conference, 2010 <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Oslo, Norway)</Text></Text>
    <Text style={{ fontFamily: 'FontAwesome', height: 56, lineHeight: 21 }}>The 8th European Conference on Glial Cell Health and Diseases, 2009  <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Paris, France)</Text></Text>
    <Text style={{ fontFamily: 'FontAwesome', height: 88, lineHeight: 21 }}>2008 Family Autonomic Neurological Dysfunction Foundation Basic Scientific Research Conference <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(New York, USA)</Text></Text>
    <Text style={{ fontFamily: 'FontAwesome', height: 56, lineHeight: 21 }}>The 8th European Conference on Gliocyte Health and Diseases, 2007 <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(London, UK) </Text></Text>
</View>
);
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
export default class DavidActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("DavidActivity.name"),
    };
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            index: 0,
            routes: [
                { key: 'first', title: 'HONORS&PATENTS' },
                { key: 'second', title: 'CONFERENCES' },
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
                 {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Image style={{ height: 99, width: '100%' }} resizeMode="center" source={require("../image/icons/david.png")}></Image>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 44, textAlign: 'center', color: '#0071bc' }}>David Cheishvili Ph.D.</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, textAlign: 'center', }}>Senior Scientific Consultant</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 18, textAlign: 'center', fontStyle: 'italic' }}>HKG epiTHERAPEUTICS Ltd.</Text>
                </View>
                <View style={{ marginBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 67, fontWeight: 'bold' }}>| PROFESSIONAL EXPERIENCES</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2017-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>HKG Epitherapeutics, Hong Kong</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 56, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <Text style={{ width: '70%', height: 56, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}><Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 27 }}>Senior scientific consultant</Text> </Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2016-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Montreal EpiTerapia Inc Montreal</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Canada</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>Co-Founder</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2016-2017
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Department of Pharmacology and</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Therapeutics McGill University</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>Research Associate</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2011-2016
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Department of Pharmacology and</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Therapeutics McGil University</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Postdoctoral Fellow</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2004-2011
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Hebrew University Hadassah </Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Medical School</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Research Assistant</Text>
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
                    <Text style={{ width: '90%', height: 56, alignSelf: 'center', fontFamily: 'NotoSansHans-Light',  fontSize: 18, fontWeight: 'bold', lineHeight: 56 }} >| PUBLISHED PAPERS</Text>
                </View>
                <View style={{ backgroundColor: '#27809d', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{  width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/29924424" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Identification of an Epigenetic Signature of Osteoporosis in Blood DNA of Postmenopausal Women. JBMR. 2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-018-4482-7" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>DNA methylation signatures of breast cancer in peripheral T-cells. BMC  Cancer.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://clinicalepigeneticsjournal.biomedcentral.com/articles/10.1186/s13148-017-0436-1" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>The signature of liver cancer in immune cells DNA methylation. Clin Epigenetics.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.onlinelibrary.wiley.com/doi/full/10.1002/mnfr.201701008" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Personalized cardio-metabolic responses to an anti-inflammatory nutrition intervention in obese adolescents: a randomized controlled crossover trial.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/abs/pii/S1094695016301780" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Genetic polymorphisms in ESR1 and VDR genes do not correlate with osteoporosis with familial dysautonomia.  J Clin Densitom.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.greenmedinfo.health/article/methyl-donor-s-adenosylmethionine-sam-supplementation-attenuates-breast-cancer" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Methyl donor S-adenosylmethionine (SAM) supplementation attenuates breast cancer growth, invasion, and metastasis in vivo; therapeutic and chemopreventive applications.Oncotarget. 2017;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://academic.oup.com/nar/article/45/22/12681/4259028" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Epigenetic mechanisms underlie the crosstalk between growth factors and a steroid hormone.Nucleic Acids Res. 2017;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.researchgate.net/publication/316689941_DNA_methylation_controls_unmethylated_transcription_start_sites_in_the_genome_in_trans" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}> DNA methylation controls unmethylated transcription start sites in the genome in trans”. Epigenomics . 2017;</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >

        );
    }
}

