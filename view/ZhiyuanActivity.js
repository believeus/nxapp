import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

const FirstRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2015
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Experimental Medicine Productivity Award</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 56, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 56, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill University</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}> Grand Excellence Award</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2013
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>The Research Institute of the </Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill University Health Center</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}> Studentship</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2012
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>The Research Institute of the</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 134, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

            <View style={{ width: '70%', height: 134, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}> McGill University Health Center</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 23, }}>Studentship</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 23, }}>McGill Endocrine Retreat Poster Award</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 23, }}>McGill University Graduate Excel Fellowship</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2011
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>The Research Institute of the</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill University Health Center </Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Studdent</Text>
            </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row' }} >
            <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2010
                        </Text>
            <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
            <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>The Research Institute of the</Text>
        </View>
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ width: '28%', height: 145, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
            </Text>
            <View style={{ width: '70%', height: 145, paddingLeft: 19 }} >
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill University Health Center </Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>Studentship</Text>
                <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill University Claude J.P. Giroud</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight:28 , }}>Fellowship McGill University Principal's Graduate Fellowship</Text>
            </View>
        </View>
    </View>
);

const SecondRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        <View style={{ height: 20 }}></View>
        <Text style={{ fontFamily: 'FontAwesome', height: 99, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Hui Li</Text>
            , Bing Li and Louise Larose. Silencing Nck1 prevents activation of the IRE1α-JNK-miR-122 pathway that controls PTP1B expression. 2015.
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>McGill Endocrine Retreat (Montreal, Canada)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 99, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Hui Li</Text>
            and Louise Larose. The adaptor protein Nck1 negatively regulates the PI3K/Akt pathway through protein tyrosine phosphatase 1B. 2014. 
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>McGill Endocrine Retreat (Montreal, Canada)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 123, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Hui Li</Text>
            and Louise Larose. Identification of the adaptor protein Nck1 as a negative regulator of the PI3K/Akt pathway through PTP1B and IRE1α. 2013. 
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Canadian Diabetes Association Professional Conference (Montreal, Canada)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 145, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Hui Li</Text>
            and Louise Larose. Akt phosphorylation/activation is modulated by the adaptor protein Nck1 through its ability to regulate the Endoplasmic Reticulum (ER) stress sensor IRE1α. 2012. 
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>McGill Endocrine Retreat Montreal, Canada ( Poster Award)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 123, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Hui Li</Text>
            and Louise Larose. Nck1—an adaptor protein modulating expression of the Endoplasmic Reticulum (ER) stress sensor IRE1α. 2012.
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}> Experimental Biology 2012 (San Diego, USA)</Text>
        </Text>
    </View>
);
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
export default class ZhiyuanActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("ZhiyuanActivity.name"),
    };
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            index: 0,
            routes: [
                { key: 'first', title: 'HONORS' },
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
                    <Image style={{ height: 99, width: '100%' }} resizeMode="center" source={require("../image/icons/jason.png")}></Image>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 44, textAlign: 'center', color: '#0071bc' }}>Zhiyuan Lv Ph.D.</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, textAlign: 'center', }}>Lab Manager (GZ)</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 18, textAlign: 'center', fontStyle: 'italic' }}>Beijing Epidial Medical Diagnostic Technology Co., Ltd.</Text>
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
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Beijing Epidial Medicine Diagnosis Co.,</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 88, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 28, fontFamily: 'NotoSansHans-Light' }}>ltd, China, HongKong HKG epiTHERAPEUTICS Co., ltd;</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>Lab Manager</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2012 –2015
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Georgia State University, Atlanta, USA.</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>Postdoctoral fellow</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2010 – 2012
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Nanjing University & Georgia State</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>University.</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 34, }}>Joint PhD student </Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2006 - 2012
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}> State Key Laboratory of Pharmaceutical</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Biotechnology, School of Lifescience, Nanjing University.</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Ph.D. Candidate</Text>
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
                    <Text style={{ width: '90%', height: 56, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 18, fontWeight: 'bold', lineHeight: 56 }} >| PUBLISHED PAPERS</Text>
                </View>
                <View style={{ backgroundColor: '#27809d', paddingTop: 20, paddingBottom: 20 }}>
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
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >

        );
    }
}

