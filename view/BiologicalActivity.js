import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class BiologicalActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("BiologicalActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

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
                <Image style={{ height: 234, width: '100%' }} resizeMode='cover' source={require("../image/enpic/bio1.jpg")}></Image>
                <View style={{ backgroundColor: '#0071bc', height: 45, flexDirection: 'row', }}>
                    <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>{I18n.t('BiologicalActivity.biological')}&nbsp;&nbsp;&nbsp;<Text style={{ fontSize: 14, textAlign: 'center', color: '#f2e421' }}>{I18n.t('BiologicalActivity.nice')}</Text></Text>
                    </View>
                    <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.navigate.push("Mall")}>
                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/cart.png')} resizeMode="center" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 34, }}>
                    <Text style={{ height: 123, fontSize: 16, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('BiologicalActivity.wrinkles')}</Text>
                    <Text style={{ height: 34, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.old')}</Text>
                    <Text style={{ height: 56, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc' }}>{I18n.t('BiologicalActivity.importment')}</Text>
                    <Image style={{ height: 196, width: '100%', marginBottom: 20 }} resizeMode='cover' source={require("../image/enpic/bio2.jpg")}></Image>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('BiologicalActivity.different')}</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21, color: '#0071bc' }}>{I18n.t('BiologicalActivity.better')}</Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.hardware')}</Text>
                        <Text style={{ height: 112, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.paradigm')}</Text>
                        <Text style={{ height: 156, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.suggest')} <Text style={{ fontStyle: 'italic', color: '#0071bc' }}>{I18n.t('BiologicalActivity.ncbi')}</Text>{I18n.t('BiologicalActivity.still')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45, }}>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio3.jpg")}></Image>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.epigenetics')}</Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.studies')} <Text style={{ fontStyle: 'italic', color: '#0071bc' }}>{I18n.t('BiologicalActivity.pubmed')}</Text>)</Text>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio4.jpg")}></Image>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.including')}</Text>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.learn')} </Text>

                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>

                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 34, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.epiaging')}</Text>
                        <Text style={{ height: 56, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 23, color: '#0071bc' }}>{I18n.t('BiologicalActivity.mean')}</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio5.jpg")}></Image>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.extensive')} </Text>
                        <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.decelerate')} </Text>
                        <Text style={{ height: 134, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.consider')}</Text>
                        <Text style={{ height: 66, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.red')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45, }}>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio6.jpg")}></Image>
                    <Text style={{ height: 156, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.information')}</Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.update')}</Text>
                    <Text style={{ height: 218, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.report')} </Text>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.administer')} </Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 93, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.app')}</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio7.jpg")}></Image>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.sense')}</Text>
                        <Text style={{ height: 66, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.personalized')}</Text>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.health')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ height: 123, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, textAlignVertical: 'center', color: '#0071bc' }}>{I18n.t('BiologicalActivity.questionnaires')}</Text>
                    <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', fontWeight: '700' }}>{I18n.t('BiologicalActivity.clock')}</Text>
                    <Text style={{ height: 156, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.chronological')}</Text>
                    <Image style={{ height: 389, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio8.png")}></Image>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 123, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 27, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.life')}</Text>
                        <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', fontWeight: '700' }}>{I18n.t('BiologicalActivity.know')}</Text>
                        <Text style={{ height: 189, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.identifying')}</Text>

                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ height: 123, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 27, color: '#0071bc', textAlign: 'center', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.longevity')}</Text>
                    <Image style={{ height: 289, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio-3.png")}></Image>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, marginBottom: 34 }}>
                        <Text style={{ height: 45, fontSize: 22, fontFamily: 'FontAwesome', textAlign: 'center', lineHeight: 27, color: '#0071bc', textAlignVertical: 'center', }}>Biological age detection method</Text>
                        <View style={{ height: 34 }}></View>
                        <Image style={{ height: 67, width: '100%', }} resizeMode='center' source={require("../image/enpic/bio10.png")}></Image>
                        <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center', }}>Telomere Length</Text>
                        <Text style={{ height: 23, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>Low correlation</Text>
                        <Text style={{ height: 23, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>High technical requirements</Text>
                        <Text style={{ height: 23, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>Small technical errors may have a decisive</Text>
                        <Text style={{ height: 23, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>impact on the results.</Text>
                        <View style={{ height: 34 }}></View>
                        <Image style={{ height: 67, width: '100%', }} resizeMode='center' source={require("../image/enpic/bio11.png")}></Image>
                        <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', color: '#EB962C', }}>Metabolic age scores</Text>
                        <Text style={{ height: 89, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', lineHeight: 27 }}>Sampling and detection methods are complex and have not been verified in a large number of population samples</Text>
                        <View style={{ backgroundColor: '#2AA9E0', borderRadius: 10, marginTop: 20 }}>
                            <Image style={{ height: 67, width: '100%', }} resizeMode='center' source={require("../image/enpic/bio12.png")}></Image>
                            <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', color: '#ffffff' }}>Epigenetic clock</Text>
                            <Text style={{ height: 123, fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', lineHeight: 27, color: '#ffffff' }}>is closely related to the biological function of human body, and the acceleration of epigenetic clock is related to the risk of neurodegenerative diseases and cancer.</Text>

                        </View>
                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ height: 45, fontSize: 22, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center', }}>epiAging</Text>
                    <Text style={{ height: 199, fontSize: 16, fontFamily: 'FontAwesome', textAlignVertical: 'center', lineHeight: 27, }}>epiAging uses a method called DNA methylation to determine your true age — which might, as science is thinking at this time and age, reveal some important information on your true health, and possibly the quality and even span of your life.</Text>
                    <Text style={{ height: 45, fontSize: 22, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center', }}>HKG epi THERAPEUTICS</Text>
                    <Text style={{ height: 199, fontSize: 16, fontFamily: 'FontAwesome', textAlignVertical: 'center', lineHeight: 27, }}>HKG epi THERAPEUTICS already has three decades of pioneering research in this exciting area of DNA methylation. With our unique method of diagnosing the DNA methylation stored in your cells in saliva, we reveal your actual age, which may encourage you to make lifestyle changes that some evidence suggetss might lead to the following:</Text>
                </View>
                <View style={{ height: 278, width: '90%', alignSelf: 'center', borderRadius: 10, justifyContent: 'space-around', backgroundColor: '#f0f0f0', }}>
                    <View style={{ heigh: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio1.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>Slow Down The Aging Process</Text>
                        </View>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio2.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>Prevent Disease Before Onset</Text>
                        </View>
                    </View>
                    <View style={{ height: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/biolo3.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>Imporve Your Quality Of Life</Text>
                        </View>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio4.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>Extend The Lenght Of Your Life</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', marginTop: 34, }}>
                    <View style={{ width: '90%', alignSelf: 'center', }}>
                        <Text style={{ height: 93, fontSize: 22, fontFamily: 'FontAwesome', textAlignVertical: 'center', color: '#0071bc' }}>Making Science Simple</Text>
                        <Text style={{ height: 34, fontSize: 16, fontWeight: '800', marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>How Fast Is Your Biological Clock Ticking?</Text>
                        <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>If your chronological age is 50 and your biological age is 35, excellent! But if your chronological age is 35 and your biological age says that you’re 50 years old — it might be the alarm calling on you to make life style changes.</Text>
                        <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Advanced aging is possibly associated with increased risk of serious illness. Epigenetics may not be The Fountain of Youth but it is The Fountain of Life.</Text>
                        <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>So grab the key and learn how old you are, really!</Text>
                        <Image style={{ height: 289, width: '100%' }} resizeMode='cover' source={require("../image/enpic/bio9.png")}></Image>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ height: 93, fontSize: 22, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center', }}>The Epiaging test</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>We developed and introduced a convenient and efficient Epiaging detection test.</Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Scientists at HKG epitherapeutics have mined a large number of age-related CG methylation sites in hundreds of published DNA methylation data, and selected a region containing 13 methylation sites from which saliva samples can accurately predict biological age.</Text>
                    <Text style={{ height: 123, fontSize: 22,lineHeight:28, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center', }}>Discover Your Biological Age in 5 Simple Steps,change your lifestyle and improve your health</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <View style={{ borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ height: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>STEP 1: DOWNLOAD THE APP</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio5.png")}></Image>
                        </View>
                        <Text style={{ height: 77, margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>Download the app, register and request your EpiAging Test You will then receive your saliva collection tube in the mail.</Text>
                    </View>
                    <View style={{marginTop:24,  borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>STEP 2: SPIT. SEAL. SHIP</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio6.png")}></Image>
                        </View>
                        <Text style={{ height: 77, margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>Expel your saliva(spit)into the tube, close and seal the envelope and send your test packet to our lab with its self-addressed postage.</Text>
                    </View>
                    <View style={{marginTop:24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>STEP 3: ANSWER THE QUESTIONS AND ENTER THE DATA</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio7.png")}></Image>
                        </View>
                        <Text style={{ height: 256, margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>Open the questionnaire button. Enter your data. Save the data Compare your data with the recommendations and make changes or order nutritional supplements. Report the changes frequently. Higher quality of reporting will enable high quality analysis and a more accurate"personalized recommendation to you. You will get a continuous report on your
App describing your progress. Once data accumutates, a personalized report of possible changes will be provided in your App.</Text>
                    </View>
                    <View style={{marginTop:24,  borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>STEP 4: DISCOVER YOUR AGE</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio8.png")}></Image>
                        </View>
                        <Text style={{ height: 89, margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>Our state-of-the-art lab will analyze your epi-genetic data to calculate your biological age,and you can view personalized reports
through the APP.</Text>
                    </View>
                    <View style={{marginTop:24,  borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>STEP 5: MAKE LIFESTYLE CHANGES IMPROVE YOUR HEALTH</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio9.png")}></Image>
                        </View>
                        <Text style={{ height: 169, margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>We will also analyze your lifestyle data. You keep making changes in lifestyle and report. You get personalized reports on your 
Progress Order periodically new epiAging tests to assess your progress. A new analysis will be provided with some suggestions. Keep improving and testing your epiAge.</Text>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >
        );
    }
}

