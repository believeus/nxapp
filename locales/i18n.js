import I18n, { getLanguages } from 'react-native-i18n'

//日志输出当前系统语言的代码
getLanguages().then(languages => {
    console.log(languages); // ['en-US', 'en']
});
import DeviceInfo from 'react-native-device-info'
import en from './en'
import zh from './zh'
import fr from './fr'
import ru from './ru'
import pt from './pt'
import hk from './hk'
import es from './sp'
I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    'en':en,
    'fr':fr, 
    'ru':ru,
    'pt':pt,
    'zh-Hans': zh,
    'zh-Hant': hk,
    'es':es
};
I18n.localeLanguage = () => {
    I18n.locale = DeviceInfo.getDeviceLocale();
    console.info(I18n.locale)
    return I18n.locale;
};
export { I18n, getLanguages };