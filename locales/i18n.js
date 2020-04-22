import I18n, { getLanguages } from 'react-native-i18n'
import {Alert } from 'react-native';
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
    'fr-be':fr,
    'fr-ca':fr,
    'fr-ch':fr,
    'fr-lu':fr,
    'ru':ru,
    'ru-mo':ru,
    'ru_RU':ru,
    'pt':pt,
    'pt-br':pt,
    'zh-Hans': hk,
    'zh-Hant': hk,
    'zh-hants-KZ':hk,
    'zh-TW':hk,
    'es':es,
    'es-mx':es,
    'es-gt':es,
    'es-cr':es,
    'es-pa':es,
    'es-do':es,
    'es-ve':es,
    'es-co':es,
    'es-pe':es,
    'es-ar':es,
    'es-ec':es,
    'es-cl':es,
    'es-uy':es,
    'es-py':es,
    'es-bo':es,
    'es-sv':es,
    'es-hn':es,
    'es-ni':es,
    'es-pr':es
  
    
};
I18n.localeLanguage = () => {
    I18n.locale = DeviceInfo.getDeviceLocale();
    Alert.alert(I18n.locale)
    return I18n.locale;
};
export { I18n, getLanguages };