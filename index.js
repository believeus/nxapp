/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json'
import Session from './storage/Session'
import codePush from "react-native-code-push"
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

Session.init();
//AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, (codePushOptions) => codePush(App));
