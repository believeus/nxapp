import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

const FirstRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        <View style={{ height: 20 }}></View>
        <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>2015.05 Trainee Abstract Award,</Text>
            The American Association Immunologists (AAI) Annual Meeting;
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>2010.09 National Scholarship,</Text>
            China Scholarship Council;
        </Text>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Text style={{ fontWeight: '700', height: 34, fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Ad Hoc Reviewer for Journals</Text>
            <Text style={{ fontFamily: 'FontAwesome', height: 23, ontStyle: 'italic', lineHeight: 21 }}>Molecular and Cellular Biochemistry</Text>
            <Text style={{ fontFamily: 'FontAwesome', height: 23, fontStyle: 'italic', lineHeight: 21 }}>Annuals of Clinical Biochemistry </Text>
            <Text style={{ fontFamily: 'FontAwesome', height: 23, fontStyle: 'italic', lineHeight: 21 }}>Cellular and Molecular Biology</Text>
            <Text style={{ fontFamily: 'FontAwesome', height: 23, fontStyle: 'italic', lineHeight: 21 }}>Journal of Immunoassay and Immunochemistry </Text>

        </View>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Text style={{ fontWeight: '700', height: 34, fontStyle: 'italic', fontFamily: 'FontAwesome' }}>Editorial Board of Journal</Text>
            <Text style={{ fontFamily: 'FontAwesome', height: 23, fontStyle: 'italic', lineHeight: 21 }}>Journal of Immunoassay and Immunochemistry</Text>
        </View>
    </View>
);

const SecondRoute = () => (
    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        <View style={{ height: 20 }}></View>
        <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
            2015 Annual Meeting of the American Society of Immunologists
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(New Orleans, USA)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 88, lineHeight: 21 }}>
            Third Annual Conference of the 2014 Southeast American Symposium on Immunology
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Atlanta, USA)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
            2014 Georgia State University Biotechnology Seminar
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Atlanta, USA)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
            2013 Georgia State University-Nanjing University Biotechnology Seminar
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Atlanta, USA)</Text>
        </Text>
        <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
            Third Asia-Pacific Diabetes Symposium 2009
            <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>(Nanjing, China)</Text>
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
                    <Text style={{ width: '70%', height: 16, lineHeight: 14, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Beijing Epidial Medicine Diagnosis Co.,</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height: 88, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
                        <Text style={{ lineHeight: 31, fontFamily: 'NotoSansHans-Light' }}>ltd, China, HongKong HKG epiTHERAPEUTICS Co., ltd;</Text>
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
                    style={{ height: 589, }}
                />

                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 56, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 18, fontWeight: 'bold', lineHeight: 56 }} >| PUBLISHED PAPERS</Text>
                </View>
                <View style={{ backgroundColor: '#27809d', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.pnas.org/content/113/37/E5434" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Cd47-Sirpαinteraction and IL-10
                            constrain inflammation-induced macrophage phagocytosis of healthy self-cells. PNAS. 2016 Sep;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4490976/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Loss of Cell Surface CD47
                            Clustering Formation and Binding Avidity to SIRPa Facilitate Apoptotic Cell Clearance by Macrophages. The Journal of Immunology. 2015 Jul;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4607582/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>CD47 deficiency ameliorates
                            autoimmune nephritis in Faslpr mice by suppressing IgG autoantibody production.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0103599" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Argonaute 2 in cell-secreted
                            microvesicles guides the function of secreted miRNAs in recipient cells. PloS One. 2014 Jul;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3797048/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Clustering'SIRPα into the
                            plasma membrane lipid microdomains is required for activated monocytes and macrophages to mediate effective cell surface interactions with CD47. PloS One. 2013 Oct;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.nature.com/articles/ncomms3436" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Inflammation-induced
                            proteolytic processing of the SIRPα cytoplasmic ITIM in neutrophils propagates a proinflammatory state. Nature Communications.2013 Sep;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/pii/S0091674913003102" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Micro RNA-17/20a/106a modulate
                            macrophage inflammatory responses through targeting signal-regulatory protein α.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jcp.24015" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>The protective role of
                            peroxisome proliferator-activated receptor γ coactivator-1α in hyperthyroid cardiac hypertrophy.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/20816931" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Molecular cloning of amphioxus
                            uncoupling protein and assessment of its uncoupling activity using a yeast heterologous expression system.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.nature.com/articles/cr201046" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Hypoxia induces PGC-1α
                            expression and mitochondrial biogenesis in myocardium of TOF patients.Cell Research . 2010 Apr; </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/pii/S1567724909001500" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}> Molecular cloning of lamprey
                            uncoupling protein and assessment of its uncoupling activity using a yeast heterologous expression system. Mitochodrion. 2009 Sep;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3797048/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>HDMCP uncouples yeast
                            mitochondrial respiration and alleviates steatosis in L02 and hepG2 cells by decreasing ATP and H2O2 levels: A novel mechanism for NAFLD. Journal of Hepatology. 2008 Oct.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >

        );
    }
}

