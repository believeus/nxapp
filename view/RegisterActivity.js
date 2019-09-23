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
                                    options={['Afghanistan (‫افغانستان‬‎)',
                                        'Åland Islands (Åland)',
                                        'Albania (Shqipëria)',
                                        'Algeria (‫الجزائر‬‎)',
                                        'American Samoa',
                                        'Andorra',
                                        'Angola',
                                        'Anguilla',
                                        'Antarctica',
                                        'Antigua and Barbuda',
                                        'Argentina',
                                        'Armenia (Հայաստան)',
                                        'Aruba',
                                        'Ascension Island',
                                        'Australia',
                                        'Austria (Österreich)',
                                        'Azerbaijan (Azərbaycan)',
                                        'Bahamas',
                                        'Bahrain (‫البحرين‬‎)',
                                        'Bangladesh (বাংলাদেশ)',
                                        'Barbados',
                                        'Belarus (Беларусь)',
                                        'Belgium (België)',
                                        'Belize',
                                        'Benin (Bénin)',
                                        'Bermuda',
                                        'Bhutan (འབྲུག)',
                                        'Bolivia',
                                        'Bosnia and Herzegovina (Босна и Херцеговина)',
                                        'Botswana',
                                        'Bouvet Island',
                                        'Brazil (Brasil)',
                                        'British Indian Ocean Territory',
                                        'British Virgin Islands',
                                        'Brunei',
                                        'Bulgaria (България)',
                                        'Burkina Faso',
                                        'Burundi (Uburundi)',
                                        'Cambodia (កម្ពុជា)',
                                        'Cameroon (Cameroun)',
                                        'Canada',
                                        'Canary Islands (Islas Canarias)',
                                        'Cape Verde (Kabu Verdi)',
                                        'Caribbean Netherlands',
                                        'Cayman Islands',
                                        'Central African Republic (République centrafricaine)',
                                        'Ceuta and Melilla (Ceuta y Melilla)',
                                        'Chad (Tchad)',
                                        'Chile',
                                        'China (中国)',
                                        'Christmas Island',
                                        'Clipperton Island (Île Clipperton)',
                                        'Cocos [Keeling] Islands',
                                        'Colombia',
                                        'Comoros (‫جزر القمر‬‎)',
                                        'Congo [DRC] (Jamhuri ya Kidemokrasia ya Kongo)',
                                        'Congo [Republic] (Congo-Brazzaville)',
                                        'Cook Islands',
                                        'Costa Rica',
                                        'Côte d’Ivoire',
                                        'Croatia (Hrvatska)',
                                        'Cuba',
                                        'Curaçao',
                                        'Cyprus (Κύπρος)',
                                        'Czech Republic (Česká republika)',
                                        'Denmark (Danmark)',
                                        'Diego Garcia',
                                        'Djibouti',
                                        'Dominica',
                                        'Dominican Republic (República Dominicana)',
                                        'Ecuador',
                                        'Egypt (‫مصر‬‎)',
                                        'El Salvador',
                                        'Equatorial Guinea (Guinea Ecuatorial)',
                                        'Eritrea',
                                        'Estonia (Eesti)',
                                        'Ethiopia',
                                        'Falkland Islands [Islas Malvinas]',
                                        'Faroe Islands (Føroyar)',
                                        'Fiji',
                                        'Finland (Suomi)',
                                        'France',
                                        'French Guiana (Guyane française)',
                                        'French Polynesia (Polynésie française)',
                                        'French Southern Territories (Terres australes françaises)',
                                        'Gabon',
                                        'Gambia',
                                        'Georgia (საქართველო)',
                                        'Germany (Deutschland)',
                                        'Ghana (Gaana)',
                                        'Gibraltar',
                                        'Greece (Ελλάδα)',
                                        'Greenland (Kalaallit Nunaat)',
                                        'Grenada',
                                        'Guadeloupe',
                                        'Guam',
                                        'Guatemala',
                                        'Guernsey',
                                        'Guinea (Guinée)',
                                        'Guinea-Bissau (Guiné Bissau)',
                                        'Guyana',
                                        'Haiti',
                                        'Heard Island and McDonald Islands',
                                        'Honduras',
                                        'Hong Kong (香港)',
                                        'Hungary (Magyarország)',
                                        'Iceland (Ísland)',
                                        'India (भारत)',
                                        'Indonesia',
                                        'Iran (‫ایران‬‎)',
                                        'Iraq (‫العراق‬‎)',
                                        'Ireland',
                                        'Isle of Man',
                                        'Israel (‫ישראל‬‎)',
                                        'Italy (Italia)',
                                        'Jamaica',
                                        ' Japan (日本)',
                                        'Jersey',
                                        'Jordan (‫الأردن‬‎)',
                                        'Kazakhstan (Казахстан)',
                                        'Kenya',
                                        'Kiribati',
                                        'Kosovo (Косово)',
                                        'Kuwait (‫الكويت‬‎)',
                                        'Kyrgyzstan',
                                        'Laos (ສ.ປ.ປ ລາວ)',
                                        'Latvia (Latvija)',
                                        'Lebanon (‫لبنان‬‎)',
                                        'Lesotho',
                                        'Liberia',
                                        'Libya (‫ليبيا‬‎)',
                                        'Liechtenstein',
                                        'Lithuania (Lietuva)',
                                        'Luxembourg',
                                        'Macau (澳門)',
                                        'Macedonia [FYROM] (Македонија)',
                                        'Madagascar (Madagasikara)',
                                        'Malawi',
                                        'Malaysia',
                                        'Maldives',
                                        'Mali',
                                        'Malta',
                                        'Marshall Islands',
                                        'Martinique',
                                        'Mauritania (‫موريتانيا‬‎)',
                                        'Mauritius (Moris)',
                                        'Mayotte',
                                        'Mexico (México)',
                                        'Micronesia',
                                        'Moldova (Republica Moldova)',
                                        'Monaco',
                                        'Mongolia (Монгол)',
                                        'Montenegro (Crna Gora)',
                                        'Montserrat',
                                        'Morocco (‫المغرب‬‎)',
                                        'Mozambique (Moçambique)',
                                        'Myanmar [Burma] (မြန်မာ)',
                                        'Namibia',
                                        'Nauru',
                                        'Nepal (नेपाल)',
                                        'Netherlands (Nederland)',
                                        'New Caledonia (Nouvelle-Calédonie)',
                                        'New Zealand',
                                        'Nicaragua',
                                        'Niger (Nijar)',
                                        'Nigeria',
                                        'Niue',
                                        'Norfolk Island',
                                        'Northern Mariana Islands',
                                        'North Korea (조선 민주주의 인민 공화국)',
                                        'Norway (Norge)',
                                        'Oman (‫عُمان‬‎)',
                                        'Pakistan (‫پاکستان‬‎)',
                                        'Palau',
                                        ' Palestine (‫فلسطين‬‎)',
                                        'Panama (Panamá)',
                                        'Papua New Guinea',
                                        'Paraguay',
                                        'Peru (Perú)',
                                        'Philippines',
                                        'Pitcairn Islands',
                                        'Poland (Polska)',
                                        'Portugal',
                                        'Puerto Rico',
                                        'Qatar (‫قطر‬‎)',
                                        'Réunion',
                                        'Romania (România)',
                                        'Russia (Россия)',
                                        'Rwanda',
                                        'Saint Barthélemy (Saint-Barthélémy)',
                                        'Saint Helena',
                                        'Saint Kitts and Nevis',
                                        'Saint Lucia',
                                        'Saint Martin (Saint-Martin [partie française])',
                                        'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
                                        'VieSaint Vincent and the Grenadinestnam',
                                        'Samoa',
                                        'San Marino',
                                        'São Tomé and Príncipe (São Tomé e Príncipe)',
                                        'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
                                        'Senegal (Sénégal)',
                                        'Serbia (Србија)',
                                        'Seychelles',
                                        'Sierra Leone',
                                        'Singapore',
                                        'Sint Maarten',
                                        'Slovakia (Slovensko)',
                                        'Slovenia (Slovenija)',
                                        'Solomon Islands',
                                        'Somalia (Soomaaliya)',
                                        'South Africa',
                                        'South Georgia and the South Sandwich Islands',
                                        'South Korea (대한민국)',
                                        'South Sudan (‫جنوب السودان‬‎)',
                                        'Spain (España)',
                                        'Sri Lanka (ශ්‍රී ලංකාව)',
                                        'Sudan (‫السودان‬‎)',
                                        'Suriname',
                                        'Svalbard and Jan Mayen (Svalbard og Jan Mayen)',
                                        'Swaziland',
                                        'Sweden (Sverige)',
                                        'Switzerland (Schweiz)',
                                        'Syria (‫سوريا‬‎)',
                                        'Taiwan (台灣)',
                                        'Tajikistan',
                                        'Tanzania',
                                        'Thailand (ไทย)',
                                        'Timor-Leste',
                                        'Togo',
                                        'Tokelau',
                                        'Tonga',
                                        'Trinidad and Tobago',
                                        'Tristan da Cunha',
                                        'Tunisia (‫تونس‬‎)',
                                        'Turkey (Türkiye)',
                                        'Turkmenistan',
                                        'Turks and Caicos Islands',
                                        'Tuvalu',
                                        'U.S. Outlying Islands',
                                        'U.S. Virgin Islands',
                                        'Uganda',
                                        'Ukraine (Україна)',
                                        'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
                                        'United Kingdom',
                                        'United States',
                                        'Uruguay',
                                        'Uzbekistan (Ўзбекистон)',
                                        'Vanuatu',
                                        'Vatican City (Città del Vaticano)',
                                        'Venezuela',
                                        'Vietnam (Việt Nam)',
                                        'Wallis and Futuna',
                                        'Western Sahara (‫الصحراء الغربية‬‎)',
                                        'Yemen (‫اليمن‬‎)',
                                        'Zambia',
                                        'Zimbabwe'
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

