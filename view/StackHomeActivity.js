import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TabAboutActivity from './TabAboutActivity';
import CompanyActivity from './CompanyActivity';
import MainActivity from './MainActivity';
import LoginActivity from './LoginActivity';
import ForgetActivity from './ForgetActivity';
import RegisterActivity from './RegisterActivity';
import LifeStyleChartActivity from './LifeStyleChartActivity';
import DnaReportActivity from './DnaReportActivity';
import PaymentActivity from './PaymentActivity';
import ConfirmActivity from './ConfirmActivity';
import TabMallActivity from './TabMallActivity';
import TabCenterActivity from './TabCenterActivity';
import LoginIcon from './LoginIcon';
import MoreProActivity from './MoreProActivity';
import CheckActivity from './CheckActivity';
import ScienceteamActivity from './ScienceteamActivity';
import ProfMosheActivity from './ProfMosheActivity';
import DavidActivity from './DavidActivity';
import HuiliActivity from './HuiliActivity';
import ChifatActivity from './ChifatActivity';
import ZhiyuanActivity from './ZhiyuanActivity';
import MethylationActivity from './MethylationActivity';
import QuestionnaireActivity from './QuestionnaireActivity';
import ConsentActivity from './ConsentActivity';
import MoodChartActivity from './MoodChartActivity'
import McGillChartActivity from './McGillChartActivity';
import BiologicalActivity from './BiologicalActivity';
import TestprocessActivity from './TestprocessActivity';
import SleepChartActivity from "./SleepChartActivity"
import DietChartActivity from "./DietChartActivity";
import SameActivity from './SameActivity';
import DataActivity from './DataActivity';
import RasEncryptionActivity from "./RasEncryptionActivity"
import ContactActivity from './ContactActivity';
import QAActivity from './QAActivity';
import QuesnoteActivity from './QuesnoteActivity';
import Manual1Activity from './Manual1Activity';
import Manual2Activity from './Manual2Activity';
import Manual3Activity from './Manual3Activity';
import SavepdfpathActivity from './SavepdfpathActivity';
import PdfViewActivity from './PdfViewActivity';
import ScannerAcitivity from './ScannerAcitivity';
import LangActivity from './LangActivity';
import ShafaatActivity from './ShafaatActivity';
import AgeAccelerateActivity from './AgeAccelerateActivity';
import Manual4Activity from './Manual4Activity';
import LaunchActivity from './LaunchActivity';
export const RootStack = createStackNavigator(
    {
        Launch: { //此处的Lauch名字任意,在跳转页面的时候会用到这个名字
            screen: LaunchActivity //此处的screen赋值页面,要记得在顶部先import引入，否则找不到页面而报错，第一个代表默认加载的页面
        },
        Main: {  
            screen: MainActivity 
        },
        Testprocess: {
            screen: TestprocessActivity
        },
        About: {
            screen: TabAboutActivity
        },
        epicenter: {
            screen: TabCenterActivity
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
        Huili: {
            screen: HuiliActivity
        },
        Chifat: {
            screen: ChifatActivity
        },
        Zhiyuan: {
            screen: ZhiyuanActivity
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
        Biological: {
            screen: BiologicalActivity
        },
        Same: {
            screen: SameActivity
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
        McGillChart: {
            screen: McGillChartActivity
        },
        MoodChart: {
            screen: MoodChartActivity
        },
        SleepChart: {
            screen: SleepChartActivity
        },
        DietChart: {
            screen: DietChartActivity
        },
        DataSecurity: {
            screen: DataActivity
        },
        RasEncryptionActivity: {
            screen: RasEncryptionActivity
        },
        QA: {
            screen: QAActivity
        },
        Quesnote: {
            screen: QuesnoteActivity
        },
        Contact: {
            screen: ContactActivity
        },
        Manual1: {
            screen: Manual1Activity
        },
        Manual2: {
            screen: Manual2Activity
        },
        Manual3: {
            screen: Manual3Activity
        },
        Manual4: {
            screen: Manual4Activity
        },
        Savepdfpath: {
            screen: SavepdfpathActivity
        },
        PdfViewActivity: {
            screen: PdfViewActivity
        },
        Scanner: {
            screen: ScannerAcitivity
        },
        LangActivity:{
            screen:LangActivity
        },
        ShafaatActivity:{
            screen:ShafaatActivity
        },
        AgeAccelerate: {
            screen: AgeAccelerateActivity
        }
       
    },
    {
        initialRouteName: 'Launch',
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