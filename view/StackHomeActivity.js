import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeActivity from './HomeActivity';
import TabAboutActivity from './TabAboutActivity';
import CompanyActivity from './CompanyActivity';
import MainActivity from './MainActivity';
import LoginActivity from './LoginActivity';
import ForgetActivity from './ForgetActivity';
import RegisterActivity from './RegisterActivity';
import LifeStyleChartActivity from './LifeStyleChartActivity';
import DnaReportActivity from './DnaReportActivity';
import PaymentActivity from './PaymentActivity';
import ScannerAcitivity from './ScannerAcitivity'
import ConfirmActivity from './ConfirmActivity';
import TabMallActivity from './TabMallActivity';
import LoginIcon from './LoginIcon';
import MoreProActivity from './MoreProActivity';
import CheckActivity from './CheckActivity';
import ScienceteamActivity from './ScienceteamActivity';
import ProfMosheActivity from './ProfMosheActivity';
import DavidActivity from './DavidActivity';
import MethylationActivity from './MethylationActivity';
import QuestionnaireActivity from './QuestionnaireActivity';
import ConsentActivity from './ConsentActivity';
import McGillChartActivity from './McGillChartActivity'
export const RootStack = createStackNavigator(
    {
        Main: {  //此处的HOME名字任意,在跳转页面的时候会用到这个名字
            screen: MainActivity //此处的screen赋值页面,要记得在顶部先import引入，否则找不到页面而报错，第一个代表默认加载的页面
        },
        About: {
            screen: TabAboutActivity
        },
        Company: {
            screen: CompanyActivity
        },
        Scienceteam: {
            screen: ScienceteamActivity
        },
        Moshe: {
            screen: ProfMosheActivity
        },
        David: {
            screen: DavidActivity
        },
        Methylation: {
            screen: MethylationActivity
        },
        Questionnaire: {
            screen: QuestionnaireActivity
        },
        Consent: {
            screen: ConsentActivity
        },
        Mall: {
            screen: TabMallActivity
        },
        MorePro: {
            screen: MoreProActivity
        },
        Check: {
            screen: CheckActivity
        },
        Confirm: {
            screen: ConfirmActivity
        },
        Login: {
            screen: LoginActivity
        },
        Register: {
            screen: RegisterActivity
        },
        LifeStyleChart: {
            screen: LifeStyleChartActivity
        },
        Forget: {
            screen: ForgetActivity
        },
        DnaReport: {
            screen: DnaReportActivity
        },
        Payment: {
            screen: PaymentActivity
        },
        Scanner: {
            screen: ScannerAcitivity
        },
        McGillChart: {
            screen: McGillChartActivity
        }
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: ({ navigation, screenProps }) => {
            return ({
                headerStyle: {
                    backgroundColor: '#0071BC',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: 'NotoSansHans-Light',
                },
                //每一个screen组件中都自动具有了navigation属性
                //要强调的是navigation属性并不是所有的组件里都有，只有screen组件才自动接收该属性（被screen属性声明过的组件）
                //例如：如果你定义了一个MyBackButton组件，并且将其在一个screen组件中作为子组件渲染，那么就不会接收到navigation属性
                //所以需要在此处添加 navigation={navigation}，那么LoginIcon中的pros就能有navigation这个对象了
                headerRight: <LoginIcon navigation={navigation} />
            })
        }
    }
);
export default createAppContainer(RootStack);