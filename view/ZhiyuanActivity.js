import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';

type Props = {};
export default class ZhiyuanActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("ZhiyuanActivity.name"),
    };
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
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: 'https://www.ncbi.nlm.nih.gov/pubmed/15220929' }} />
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
                    <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={{ height: 67, fontFamily: 'NotoSansHans-Light', fontSize: 22, borderBottomColor: '#0071bc', borderBottomWidth: 1 }}>Professional Experiences</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Pioneer of the field of epigenetics</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16, }}>Inventor of the first broad patents in the field</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Inventor of the first patents on DNA methylation </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Founder of the field of behavioral and psychiatry epigenetics</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Thought leader, published 295 papers in the area</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Fellow of the Royal Society of Canada</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Fellow of the Canadian Academy of Health Sciences</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Professor Department of Pharmacology and Therapeutics McGill University Montreal Canada</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Resident chief scientist of Beijing epidial medical diagnostic technology co., LTD.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Director of epigenetic institute, Beijing yizhuang innovation institute</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 20 }}></View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <View style={{ height: 34, flexDirection: 'row', backgroundColor: '#f4f4f4' }}>
                        <Text style={{ width: '33%', fontFamily: 'NotoSansHans-Light', textAlign: 'center', borderRightWidth: 1, borderRightColor: '#989898', fontSize: 16, lineHeight: 41 }}> Career</Text>
                        <Text style={{ width: '33%', fontFamily: 'NotoSansHans-Light', textAlign: 'center', borderRightWidth: 1, borderRightColor: '#989898', fontSize: 16, lineHeight: 41 }}> Honors</Text>
                        <Text style={{ width: '33%', fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16, lineHeight: 41 }}> Sponsored</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2007-2018
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Pharmacology of GlaxoSmithKline</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 68, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}>-Canadian Institute of Health <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 27 }}>Chairman</Text> </Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2003-2018
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Jemes McGill</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 68, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}> <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 27 }}>Professor</Text> </Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2000-now
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Department of Pharmacology and</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

                        <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Therapeutics McGill</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Professor</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>1993-2000
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Department of Pharmacology and</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill Medical School</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Associate Professor</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>1989-1993
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Department of Pharmacology and</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill Medical School</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Associate Professor</Text>
                        </View>

                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>2013 -- Member of the Royal Society of Canada</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>2011 -- CCNP Neuropsychopharmacology &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Innovation Award</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>2009 -- Radio Canada Annual Scientist Award</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>2013 -- Carolinska Speech at the Nobel Forum</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>2007 -- GlaxoSmithKline Pharmacology</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>2001 -- Medical College Teaching Honors List</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>1999 -- Carrie Derek Graduate Teaching Guidance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Award</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>1999 -- Israel Cancer Research Foundation "Eliot &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Osseman Outstanding Contribution Award" </Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>1989-1995-- Canadian National Cancer Institute &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Outstanding Young Professor Award" </Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>1987 -- American Cancer Society Scholarship</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>1984 -- Rothschild Scholarship</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>1980 -- Medical Scholarship of Hebrew University</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', }}>1980 -- Distinguished master</Text>
                </View>

                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '28%', height: 48, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2010-2013
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Canadian Health Research</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 88, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Institute- Canadian Health research Cooperative Team in China</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>C$166,666</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2007-2012
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Canadian National Cancer</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 88, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Institute-Demethylase Analysis</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>C$141,000</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2005-2010
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Canadian Institute of health-DNA </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 88, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>Methyltransferase I Inhibitor and its Therapeutic Prospect</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>C$168,158</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>1997-2000
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Canadian council for Natural</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>science and engineering research</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>C$145,500</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>1989-1993
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>Department of Pharmacology and</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
                            <Text style={{ lineHeight: 18, fontFamily: 'NotoSansHans-Light' }}>McGill Medical School</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 45, }}>Associate Professor</Text>
                        </View>

                    </View>
                </View>

                <Text style={{ width: '90%', alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 22, }} >| Published papers</Text>
                <View style={{ backgroundColor: '#27809d' }}>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Epigenetic programming by maternal behavior.Aug 1st 2004  Nature Neuroscience volume 7 issue 8 pp 847-854</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>5530 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Epigenetic regulation of the
                            glucocorticoid receptor in human brain associates with childhood abuse. Nat Neurosci .2009 Mar; 12(3): 342–348.</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>2892 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>A mammalian protein with specific
                            demethylase activity for mCpG DNA.  Nature .1999 Feb 18</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>528 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Promoter-wide hypermethylation of
                            the ribosomal RNA gene promoter in the suicide brain.  PLoS One . 2008 May 7</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>351 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Broad epigenetic signature of
                            maternal care in the brain of adult rats.  PLoS One .2011 Feb 28</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>347 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Expression of antisense to DNA
                            demethylation and inhibits tumorigenesis. J Biol Chem. 1995 Apr 7</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>256 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Epigenetics, DNA methylation,
                            and chromatin modifying drugs. Annu Rev Pharmacol Toxicol. 2009;49</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>432 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>Maternal care effects on the
                            hippocampal transcriptome and anxiety-mediated behaviors in the offspring that are reversible in adulthood. Proc Natl </Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#ffffff' }}>786 Citations</Text>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>

        );
    }
}

