import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, fontFamily, TextInput, ScrollView, TouchableOpacity, Alert, FetchResult, AppRegistry } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { CheckBox } from 'native-base';
import { I18n } from '../locales/i18n';

type Props = {};
export default class RegisterActivity extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { checked: true };
    }
    static navigationOptions= ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("RegisterActivity.name"),
            headerRight: null
        })
    }
    render() {
        //const navigator=this.props.navitation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ height: 10 }}></View>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22 }}>Register</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ width: '38%', height: 20, justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14 }}>Select your region:</Text>
                            </View>
                            <View style={{ width: '30%', height: 20, justifyContent: 'flex-end', }}>
                                <ModalDropdown style={{ height: 20, fontFamily: 'NotoSansHans-Light', justifyContent: 'flex-end', borderRadius: 5, paddingLeft: 6, borderColor: '#b3b3b3', borderWidth: 1 }}
                                    options={['Andorra',
                                        'Afghanistan',
                                        'Antigua and Barbuda',
                                        'Albania',
                                        'Armenia',
                                        'Angola',
                                        'Argentina',
                                        'Austria',
                                        'Australia',
                                        'Aruba',
                                        'Azerbaijan',
                                        'Algeria',
                                        'Benin',
                                        'Bosnia and Herzegovina',
                                        'British Virgin Islands',
                                        'Barbados',
                                        'Bangladesh',
                                        'Belgium',
                                        'Burkina Faso',
                                        'Bulgaria',
                                        'Bahrain',
                                        'Burundi',
                                        'Benin',
                                        'Bermuda',
                                        'Brunei',
                                        'Bolivia',
                                        'Brazil',
                                        'Bahamas',
                                        'Bhutan',
                                        'Botswana',
                                        'Belarus',
                                        'Belize',
                                        'Croatia',
                                        'Central African Republic',
                                        'Chad',
                                        'Comoros',
                                        'Canada',
                                        'Chile',
                                        'Cameroon',
                                        'Cayman Islands',
                                        'China',
                                        'Cambodia',
                                        'Colombia',
                                        'Costa Rica',
                                        'Cuba',
                                        'Cape Verde',
                                        'Cyprus',
                                        'Czech Republic',
                                        'Djibouti',
                                        'Denmark',
                                        'Dominica',
                                        'Dominican Republic',
                                        'Democratic Republic of the Congo',
                                        'El Salvador',
                                        'Ecuador',
                                        'Estonia',
                                        'Equatorial Guinea',
                                        'Egypt',
                                        'Eritrea',
                                        'Ethiopia',
                                        'Finland',
                                        'Fiji',
                                        'Falkland Islands',
                                        'Faroe Islands',
                                        'France',
                                        'Gabon',
                                        'Germany',
                                        'Grenada',
                                        'Georgia',
                                        'Ghana',
                                        'Gibraltar',
                                        'Gambia',
                                        'Guinea',
                                        'Greece',
                                        'Guatemala',
                                        'Guinea-Bissau',
                                        'Guyana',
                                        'Hong Kong',
                                        'Honduras',
                                        'Haiti',
                                        'Hungary',
                                        'Indonesia',
                                        'Ireland',
                                        'Israel',
                                        'India',
                                        'Iraq',
                                        'Iran',
                                        'Iceland',
                                        'Italy',
                                        'Jamaica',
                                        'Jordan',
                                        'Japan',
                                        'Kenya',
                                        'Kyrgyzstan',
                                        'Kiribati',
                                        'Kuwait',
                                        'Kazakhstan',
                                        'Laos',
                                        'Lebanon',
                                        'Liechtenstein',
                                        'Liberia',
                                        'Lesotho',
                                        'Lithuania',
                                        'Luxembourg',
                                        'Latvia',
                                        'Libya',
                                        'Morocco',
                                        'Monaco',
                                        'Moldova',
                                        'Montenegro',
                                        'Madagascar',
                                        'Macedonia',
                                        'Mali',
                                        'Myanmar',
                                        'Mongolia',
                                        'Macao',
                                        'Mauritania',
                                        'Micronesia',
                                        'Malta',
                                        'Mauritius',
                                        'Maldives',
                                        'Malawi',
                                        'Mexico',
                                        'Malaysia',
                                        'Mozambique',
                                        'Namibia',
                                        'North Korea',
                                        'Niger',
                                        'Nigeria',
                                        'Nicaragua',
                                        'Netherlands',
                                        'Norway',
                                        'Nepal',
                                        'Nauru',
                                        'New Zealand',
                                        'Oman',
                                        'Panama',
                                        'Peru',
                                        'Papua New Guinea',
                                        'Philippines',
                                        'Pakistan',
                                        'Poland',
                                        'Puerto Rico',
                                        'Palestine',
                                        'Portugal',
                                        'Palau',
                                        'Paraguay',
                                        'Qatar',
                                        'Romania',
                                        'Russia',
                                        'Rwanda',
                                        'Serbia',
                                        'Saint Lucia',
                                        'Sri Lanka',
                                        'Saudi Arabia',
                                        'Solomon Islands',
                                        'Seychelles',
                                        'Sudan',
                                        'Spain',
                                        'Sweden',
                                        'Singapore',
                                        'Switzerland',
                                        'Slovenia',
                                        'Saint Kitts and Nevis',
                                        'Slovak Republic',
                                        'Sierra Leone',
                                        'San Marino',
                                        'Senegal',
                                        'Somalia',
                                        'South Korea',
                                        'Suriname',
                                        'Sao Tome and Principe',
                                        'South Africa',
                                        'Syria',
                                        'Swaziland',
                                        'Saint Vincent And The Grenadine',
                                        'Togo',
                                        'Thailand',
                                        'Tajikistan',
                                        'Turkmenistan',
                                        'Tunisia',
                                        'Tonga',
                                        'Turkey',
                                        'Trinidad and Tobago',
                                        'Tuvalu',
                                        'Taiwan',
                                        'Tanzania',
                                        'United States',
                                        'United Arab Emirates',
                                        'Ukraine',
                                        'United Kingdom',
                                        'Uganda',
                                        'Uruguay',
                                        'Uzbekistan',
                                        'Venezuela',
                                        'Vietnam',
                                        'Vanuatu',
                                        'Wallis and Futuna',
                                        'Western Samoa',
                                        'Yemen',
                                        'Zambia',
                                        'Zimbabwe',
                                    ]} />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', height: 40, alignContent: 'center', marginTop: 10 }}>
                            <TextInput style={{
                                height: 40, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 5,
                                fontSize: 16,
                                paddingLeft: 10

                            }}
                                onChangeText={(text) => { this.setState({ userName: text }); }}
                                placeholder="First Name" />
                        </View>
                        <View style={{ alignItems: 'center', height: 40, alignContent: 'center', marginTop: 10 }}>
                            <TextInput style={{
                                height: 40, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 5,
                                fontSize: 16,
                                paddingLeft: 10
                            }}
                                onChangeText={(text) => { this.setState({ userName: text }); }}
                                placeholder="Last Name" />
                        </View>
                        <View style={{ alignItems: 'center', height: 40, alignContent: 'center', marginTop: 10 }}>
                            <TextInput style={{
                                height: 40, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 5,
                                fontSize: 16,
                                paddingLeft: 10
                            }}
                                onChangeText={(text) => { this.setState({ userName: text }); }}
                                placeholder="Email" />
                        </View>
                        <View style={{ alignItems: 'center', height: 40, alignContent: 'center', marginTop: 10 }}>
                            <TextInput style={{
                                height: 40, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 10,
                                fontSize: 16,
                                paddingLeft: 10
                            }}
                                onChangeText={(text) => { this.setState({ userName: text }); }}
                                placeholder="Create a Password" />
                        </View>
                        <View style={{ alignItems: 'center', height: 45, alignContent: 'center', marginTop: 20 }}>
                            <TextInput style={{
                                height: 40, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 10,
                                fontSize: 16,
                                paddingLeft: 10
                            }}
                                onChangeText={(text) => { this.setState({ userName: text }); }}
                                placeholder="Confirm Password" />
                        </View>
                        <View style={{ flexDirection: 'row', height: 60 }}>
                            <View style={{height: 30, width: '10%',alignSelf:'center', justifyContent: 'center'}}>
                                <CheckBox
                                    onPress={() => this.setState({
                                        checked: !this.state.checked
                                    })}
                                    checked={this.state.checked}
                                />
                            </View>
                            <View style={{height: 30, width: '90%', alignSelf:'center', justifyContent: 'center'}}>
                                <Text style={{  width: '90%', fontFamily: 'NotoSansHans-Light', fontSize: 12, color: '#007186' }}>I have read and agree to <Text style={{color:'#f05a25'}}>the Terms of Service and Privacy Statement.</Text></Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity >
                                <Text style={{ height: 45, borderRadius: 20, backgroundColor: "#0071bc", fontFamily: 'NotoSansHans-Light', color: '#FFFFFF', fontSize: 22, textAlign: 'center', lineHeight: 50 }}> Register</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, alignItems: 'center', fontSize: 14, justifyContent: 'center' }} >
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#b3b3b3', lineHeight: 20 }}>Already have an account?</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 20 }}>Login</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

