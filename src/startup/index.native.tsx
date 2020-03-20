import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import '../services/localization';
import App from '../containers/App';
import {name as appName} from '../../app.json';

AppRegistry.registerComponent(appName, () => App);
