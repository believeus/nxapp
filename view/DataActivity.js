import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class DataActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DataActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#f6f8f9' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>Importance of filling out questionnaires</Text>
                            <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='center' source={require("../image/icons/ques1.png")}></Image>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 89, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 89, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>EpiAging tests make sense only within a dynamic life-long life style, environmental and health management system.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 89, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 89, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>A personalized evaluation including intervention will be generated based on the health and lifestyle information you provided.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 89, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 89, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Update your health and lifestyle parameters periodically to activate the life-long personalized analysis report.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='center' source={require("../image/icons/ques2.png")}></Image>
                        <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>How do we conduct data analysis ?</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 123, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 123, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Epiaging test results are continuously analyzed with general health parameters, personal interventions and outcomes of multiple users using state of the art machine learning algorithms.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 67, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 67, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Personalized analysis with some possible routes for improvement.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 67, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 67, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Data in our data base in blinded with respect to personal identity.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 89, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 89, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>No access is allowed to your personal information by any one who has access to your health and life style data.</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f6f8f9' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>How do we conduct data analysis ?</Text>
                            <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='center' source={require("../image/icons/ques3.png")}></Image>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 123, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 123, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Epiaging test results are continuously analyzed with general health parameters, personal interventions and outcomes of multiple users using state of the art machine learning algorithms.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 67, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 67, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Personalized analysis with some possible routes for improvement.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 67, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 67, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Data in our data base in blinded with respect to personal identity.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 89, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 89, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>No access is allowed to your personal information by any one who has access to your health and life style data.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 67, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ height: 67, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Only general conclusions based on a population wide summary will be shared.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='center' source={require("../image/icons/ques4.png")}></Image>
                        <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>How  do  we  ensure  that information is confidential ?</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 67, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 67, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We have data privacy and security management system.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 67, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 67, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Without your explicit consent, we will not share any of your personal data.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 89, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 89, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We will not provide your information or results to employers or health insurance companies of other companies.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 89, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 89, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Unless we are required to comply with valid court orders, we will not provide information to law enforcement agencies.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 34, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 34, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Learn more about our privacy clauses.</Text>
                    </View>
                    <View style={{ width: '96%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 99, width: '7%', fontSize: 14, color: '#0071bc' }}>☞</Text>
                            <Text style={{ height: 99, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>When you are not logged into the system, your health information and personal user information will be in a'free'state, and no one can find your related information.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 99, width: '7%', fontSize: 14, color: '#0071bc' }}>☞</Text>
                            <Text style={{ height: 99, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We will not have or save user's private key to decrypt user data according to our Data Security Statement , please save your only private key.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 99, width: '7%', fontSize: 14, color: '#0071bc' }}>☞</Text>
                            <Text style={{ height: 99, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>When you are not logged into the system, your healthy information and personal user information will be in a'free'state, and no one can find your related information.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >
        );
    }
}

