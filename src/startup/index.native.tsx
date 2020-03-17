import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import '../utils/localization';
import App from 'src/navigation';
import {name as appName} from '../../app.json';

AppRegistry.registerComponent(appName, () => App);
