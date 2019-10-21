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
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>Biological Age Detection 2.0 &nbsp;&nbsp;&nbsp;<Text style={{ fontSize: 14, textAlign: 'center', color: '#f2e421' }}>$99</Text></Text>
                    </View>
                    <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.navigate.push("Mall")}>
                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/cart.png')} resizeMode="center" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 34, }}>
                    <Text style={{ height: 123, fontSize: 16, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Stop counting your age by birthdays or candles on the cake, wrinkles, crow's feet or the frown lines on your face — those are only numbers. And today, the numbers don't count. </Text>
                    <Text style={{ height: 34, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>How old are you?</Text>
                    <Text style={{ height: 56, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc' }}>Why is it importment?</Text>
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
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio3.jpg")}></Image>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Importantly, "epigenetics" in different from "genetics" is potentially reversible by dietary interventions and lifestyle changes.</Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Preliminary studies are coming up that show that dietary changes can cause deceleration of epigenetic clock in certain people, however this is still an open life. (link:<Text style={{ fontStyle: 'italic', color: '#0071bc' }}> https://www.ncbi.nlm.nih.gov/pubmed/30350398</Text>)</Text>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio4.jpg")}></Image>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Lifestyle changes including exercise and change in dietary habits have been recommended by national medical associations for some time, however we need more data about the most advisable changes and they should be personalized.</Text>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ One way for us to learn about advisable lifestyle changes is sharing our experiences with others and analyzing the impact of differences in lifestyle. This is now possible using sharing technologies such as Apps as well as artificial intelligence. </Text>

                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>

                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 34, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>What is the epiAging test?</Text>
                        <Text style={{ height: 56, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 23, color: '#0071bc' }}>What does it mean?</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio5.jpg")}></Image>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>○ After extensive data mining, we have discovered a single age-related CG methylation region that was sufficient to accurately predict biological age using saliva. </Text>
                        <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Although it is still not clear how one can decelerate his age lifestyle changes recommended by most national medical associations are perhaps a point to start. An older age is a "red flag" not more that suggest that perhaps it is time to make some lifestyle changes. </Text>
                        <Text style={{ height: 134, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ We consider a "red flag" an "epigenetic age" that is older than one standard deviation of the test. Standard deviation provides an idea about the distribution in the normal population which at this point of analysis  is 5 years. As more tests are accumulated we will get a more accurate number of the "normal distribution".</Text>
                        <Text style={{ height: 66, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ A "red flag" might prompt you to act on your lifestyle.</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45, }}>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio6.jpg")}></Image>
                    <Text style={{ height: 156, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Our App will link you to information on recommended lifestyle behaviors by important US national medical association. These are updated regularly and we suggest that you keep updating by examining the links periodically. These recommendations are based on what "science" knows today, they are not perfect. With more data and more analysis science is improving. </Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ You will update your lifestyle data as regularly as you wish. You might update all questions, some or none. However, we believe that accurate reporting will provide a more accurate better analysis.</Text>
                    <Text style={{ height: 218, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Initially our report will show how far are your lifestyle parameters from consensus recommendations. Your data will be anonymized and your data and data from other anonymous users we will be analyzed by artificial intelligence to develop a model based on many users that measures the impact that lifestyle changes have on "epigenetic clock". In time as more data is accumulated., the model will be used on your lifestyle data and results of the "model" will be shared with you. </Text>
                    <Text style={{ height: 123, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ Our test is simple to administer, low cost, robust and accurate, and is dynamically integrated into a life-long health ecosystem driven by App technology and machine learning. </Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 93, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>Why do you need questionnaires in the app?</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio7.jpg")}></Image>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>○ EpiAging tests make sense only within a dynamic life-long lifestyle, environmental and health management system.</Text>
                        <Text style={{ height: 66, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ A personalized evaluation including intervention will be generated based on the health and lifestyle information you provided.</Text>
                        <Text style={{ height: 89, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>○ Updates on your health and lifestyle parameters periodically to activate the life-long personalized analysis report.</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ height: 123, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, textAlignVertical: 'center', color: '#0071bc' }}>Why do you need questionnaires in the app?</Text>
                    <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', fontWeight: '700' }}>Everyone has a DNA clock</Text>
                    <Text style={{ height: 156, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>○ We all know our chronological age. But how old we really are?
People age at different rates. Some “look” and “feel” older than their chronological age while other look younger than their chronological age.</Text>
                    <Image style={{ height: 389, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio8.png")}></Image>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 123, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 27, color: '#0071bc', textAlignVertical: 'center', }}>Our Biological age is a better parameter of our health well being and life span than our chronological age.</Text>
                        <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', fontWeight: '700' }}>But how do we know our “biological age”?</Text>
                        <Text style={{ height: 189, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>It has been believed that if we can define the true “biological age” we might test and design interventions that will decelerate the rate of biological aging. During the past decades, extensive effort has been invested in identifying different parameters that could predict “biological aging” and life span such as measures of frailty, graying of hair, aging of skin, levels of different kinds of white blood cells. However most of these markers were found to offer no advantage over knowing your chronological age.</Text>

                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ height: 123, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 27, color: '#0071bc', textAlign: 'center', textAlignVertical: 'center', }}>Parameters that predict "biological aging" and longevity</Text>
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

