import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import { WebView } from 'react-native-webview';
type Props = {};
export default class SameActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("SameActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = { display: false }
    }

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
                <Image style={{ height: 195, width: '100%' }} resizeMode='contain' source={require("../image/enpic/sam1.jpg")}></Image>
                <View style={{ backgroundColor: '#662D86', height: 45, flexDirection: 'row', }}>
                    <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>SAM-e &nbsp;&nbsp;&nbsp;<Text style={{ fontSize: 14, textAlign: 'center', color: '#f2e421' }}>$60</Text></Text>
                    </View>
                    <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.navigate.push("Mall")}>
                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/cart.png')} resizeMode="center" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{ height: 367, width: '100%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/sam2.png")}></Image>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 34, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 34, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e is a nutritional supplement not a drug.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 56, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e (S-Adenosyl Methionine) is a chemical found naturally in the body.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 56, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e is considered the most important methyl donor in the body.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 102, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 102, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>The level of SAM-e decreases as the body ages. Concomitantly, a number of health issues,including mood, joint, and liver disorders are likely to occur.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 66, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>All SAM-e molecules have two forms: the SS (active) isomer and the RS (inactive) isomer.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 119, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 119, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>While SAM-e comes in two stable salt forms; tosylate  and butane disulphanate, only the tosylate form is  backed by twenty years of research for safety and effectiveness.</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f4f4f6' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <Text style={{ height: 77, fontSize: 19, fontFamily: 'FontAwesome', lineHeight: 22, }}>According to clinical studies,sam-e can improve emotional health, joint relaxation and liver function</Text>
                        <Image style={{ height: 123, width: '100%', marginBottom: 20 }} resizeMode='center' source={require("../image/enpic/sam3.png")}></Image>
                        <View style={{ width: '96%', height: 123, backgroundColor: '#C1E1E8', borderRadius: 10, alignSelf: 'center', marginBottom: 34 }}>
                            <Text style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>In March of 2003, the AHRQ (Agency for Healthcare Research and Quality) a division of the United States Health and Human Services, released the findings of a major study on SAM-e.</Text>
                            <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/books/NBK11886/" }); this.setState({ display: true }) }}>
                                <Text style={{ fontStyle: 'italic', fontSize: 14, paddingLeft: 10 }}>https://www.ncbi.nlm.nih.gov/books/NBK11886/
                                <Text style={{ height: 47, width: '10%', alignSelf: 'baseline', fontSize: 34, color: '#c1e1e8' }}>▼</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e is as effective as conventional prescription medications in the treatment of depression</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e is as effective as standard prescription medications (NSAIDs) in the treatment of osteoarthritis</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 56, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e has significant benefits for patients suffering from various liver diseases.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Natural SAM-e was not found to have any noticeable side effects.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ height: 77, fontSize: 21, fontFamily: 'FontAwesome', lineHeight: 22, }}> SAM-e in spotlight</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2013
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Arthritis Today Magazine (October</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 68, lineHeight: 22, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}>Issue) lists SAM-e as best supplement for osteoarthritis.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2013
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Arthritis Research UK study gives </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 68, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}>SAM-e the highest grade for oral supplement for osteoarthritis relief.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2010
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>The study from Massachusetts</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 158, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 158, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}>General Hospital demonstrated that SAM-e combined with antidepressants significantly increased remission rates in patients with major depression who failed conventional therapy.
                                    <Text  onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/books/NBK11886/" })}} style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', fontStyle: 'italic', lineHeight: 18 }}>https://ajp.psychiatryonline.org/doi/full/10.1176/</Text>
                        </Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2009
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>A Korean study found that SAM-e</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 88, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 88, }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19 }}>is as effective as the NSAID Nabumetone.</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/20110025</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2004
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>The study done by University </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 113, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 123, }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19 }}>of California showed that SAM-e is as effective as Celecoxib, a prescription drug for Arthritis.</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/15102339</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f4f4f6', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <Text style={{ height: 99, fontSize: 19, fontFamily: 'FontAwesome', lineHeight: 22, }}>Basic research on SAM-e on human cell lines and animals which were not yet followed by clinical studies</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 123, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <View style={{ height: 123, width: '95%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e was shown to block breast cancer growth and metastasis in experiments on breast cancer cel lines and animals.</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/29435170</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/15150277</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 99, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <View style={{ height: 99, width: '95%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e was shown to block growth of liver cancer cells.</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/29340097</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 123, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <View style={{ height: 123, width: '95%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e was shown to block growth of prostate cancer cells.</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/25631332</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/16982764</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 123, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <View style={{ height: 123, width: '95%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e was shown to inhibit formation of liver cancer in rats and colorectal cancer in mice.</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/23073625</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/19444874</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/22159228</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 123, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <View style={{ height: 123, width: '95%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e was shown to improve memory in a mouse model of Alzheimer disease when taken before onset of symptoms.</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/27681803</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/22221883</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image style={{ height: 569, width: '100%', marginBottom: 34 }} resizeMode='center' source={require("../image/enpic/sam4.png")}></Image>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ height: 45, fontSize: 19, fontFamily: 'FontAwesome', lineHeight: 22, }}>Why Chose Our SAM-e?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our SAMe is manufactured to the highest standards, using the original Italian method (salt - tosylate disulfate).</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 99, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 99, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}> Our SAMe products’ starting raw materials consistently test at the highest SS to RS isomer ratio on the market:<Text style={{ color: '#0071bc', fontStyle: 'italic' }}>SS isomer &gt;80% / RS isomer &lt; 20%.</Text> </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our SAMe tablets are enteric coated for optimum absorption by the body.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}> Our SAMe tablets are sealed in blister packs to ensure freshness.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our SAMe is made to guaranteed purity and potency standards.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>No Artifical Flavors, Dairy Free, No Preservatives, Allergen Free, No Yeast or Gluten, Kosher Certified. </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our SAMe tablets have been tested for a minimum full two year stability rating.</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f4f4f6', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <Text style={{ height: 45, fontSize: 19, fontFamily: 'FontAwesome', lineHeight: 22, }}>Caution when taking SAM-e</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 56, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>SAM-e should not be used in conjunction or in place of treatment recommended by your doctor. </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 119, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 119, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>If you're taking medication and considering taking SAM-e as supplementary, consulate your doctor to make sure that SAM-e has no interaction with the medication that you are taking.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >
        );
    }
}

