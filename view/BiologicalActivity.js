import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class BiologicalActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("BiologicalActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <Image style={{ height: 196, width: '100%' }} resizeMode='contain' source={require("../image/enpic/bio1.jpg")}></Image>
                <View style={{ backgroundColor: '#0071bc', height: 45, flexDirection: 'row', }}>
                    <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>Biological Age Detection 2.0 &nbsp;&nbsp;&nbsp;<Text style={{ fontSize: 14, textAlign: 'center', color: '#f2e421' }}>$99</Text></Text>
                    </View>
                    <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/cart.png')} resizeMode="center" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <Text style={{ height: 123, fontSize: 16, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Stop counting your age by birthdays or candles on the cake, wrinkles, crow's feet or the frown lines on your face — those are only numbers. And today, the numbers don't count. </Text>
                    <Text style={{ height: 34, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc' }}>How old are you?</Text>
                    <Text style={{ height: 34, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc' }}>Why is it importment?</Text>
                    <Image style={{ height: 196, width: '100%', marginBottom: 20 }} resizeMode='cover' source={require("../image/enpic/bio2.jpg")}></Image>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>People age at different rates. Some "look" and "feel" older than their chronological age while other look younger than their chronological age.</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21, color: '#0071bc' }}>Our biological age is a better parameter of our health well being and life span than our chronological age.</Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>○ DNA is the hardware, genetics is the operating system and DNA methylation and other epigenetic factors are the software that programs the genome.</Text>
                        <Text style={{ height: 112, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ A paradigm shift in the search for biological age markers occurred with the discovery of the "epigenetic clock" by Horvath, which is based on measurement of DNA methylation status at 500 strategic positions in DNA.</Text>
                        <Text style={{ height: 156, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Studies suggest that accelerated "epigenetic clock" might be associated with increased risk for several age related chronic disease such as cardiovascular disease and cancer at later age. (link:<Text style={{ fontStyle: 'italic', color: '#0071bc' }}> https://www.ncbi.nlm.nih.gov/pubmed/?term=epigenetic+clock+disease</Text>). This is however still an open field and more studies are needed.</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45, }}>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='center' source={require("../image/enpic/bio3.jpg")}></Image>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Importantly, "epigenetics" in different from "genetics" is potentially reversible by dietary interventions and lifestyle changes.</Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Preliminary studies are coming up that show that dietary changes can cause deceleration of epigenetic clock in certain people, however this is still an open life. (link:<Text style={{ fontStyle: 'italic', color: '#0071bc' }}> https://www.ncbi.nlm.nih.gov/pubmed/30350398</Text>)</Text>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='center' source={require("../image/enpic/bio4.jpg")}></Image>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Lifestyle changes including exercise and change in dietary habits have been recommended by national medical associations for some time, however we need more data about the most advisable changes and they should be personalized.</Text>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ One way for us to learn about advisable life style changes is sharing our experiences with others and analyzing the impact of differences in life style. This is now possible using sharing technologies such as Apps as well as artificial intelligence. </Text>

                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>

                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                        <Text style={{ height: 34, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 23, color: '#0071bc' }}>What is the epiAging test?</Text>
                        <Text style={{ height: 56, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 23, color: '#0071bc' }}>What does it mean?</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='center' source={require("../image/enpic/bio5.jpg")}></Image>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>○ After extensive data mining, we have discovered a single age-related CG methylation region that was sufficient to accurately predict biological age using saliva. </Text>
                        <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Although it is still not clear how one can decelerate his age life style changes recommended by most national medical associations are perhaps a point to start. An older age is a "red flag" not more that suggest that perhaps it is time to make some life style changes. </Text>
                        <Text style={{ height: 134, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ We consider a "red flag" an "epigenetic age" that is older than one standard deviation of the test. Standard deviation provides an idea about the distribution in the normal population which at this point of analysis  is 5 years. As more tests are accumulated we will get a more accurate number of the "normal distribution".</Text>
                        <Text style={{ height: 66, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ A "red flag" might prompt you to act on your life style.</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45, }}>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='center' source={require("../image/enpic/bio6.jpg")}></Image>
                    <Text style={{ height: 156, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Our App will link you to information on recommended life style behaviors by important US national medical association. These are updated regularly and we suggest that you keep updating by examining the links periodically. These recommendations are based on what "science" knows today, they are not perfect. With more data and more analysis science is improving. </Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ You will update your life style data as regularly as you wish. You might update all questions, some or none. However, we believe that accurate reporting will provide a more accurate better analysis.</Text>
                    <Text style={{ height: 218, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Initially our report will show how far are your life style parameters from consensus recommendations. Your data will be anonymized and your data and data from other anonymous users we will be analyzed by artificial intelligence to develop a model based on many users that measures the impact that life style changes have on "epigenetic clock". In time as more data is accumulated., the model will be used on your life style data and results of the "model" will be shared with you. </Text>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Our test is simple to administer, low cost, robust and accurate, and is dynamically integrated into a life-long health ecosystem driven by App technology and machine learning. </Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                        <Text style={{ height: 112, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 23, color: '#0071bc' }}>Why do you need questionnaires in the app?</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='center' source={require("../image/enpic/bio7.jpg")}></Image>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>○ EpiAging tests make sense only within a dynamic life-long life style, environmental and health management system.</Text>
                        <Text style={{ height: 66, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ A personalized evaluation including intervention will be generated based on the health and lifestyle information you provided.</Text>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>○ Updates on your health and lifestyle parameters periodically to activate the life-long personalized analysis report.</Text>
                    </View>
                </View>

                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >
        );
    }
}

