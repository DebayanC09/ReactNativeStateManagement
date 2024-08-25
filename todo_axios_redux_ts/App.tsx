import {enableScreens} from 'react-native-screens';

enableScreens();

import React from 'react';
import Navigator from './src/navigation/Navigator';

function App(): React.JSX.Element {
  return <Navigator />;
}

export default App;
