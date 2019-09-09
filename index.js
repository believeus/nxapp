/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Session from './storage/Session';
Session.init();
AppRegistry.registerComponent(appName, () => App);
