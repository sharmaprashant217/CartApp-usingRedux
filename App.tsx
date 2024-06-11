import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AppNavigator from './src/AppNavigator';
import Main from './src/screens/Main';
import {Provider} from 'react-redux';
import {MyStore} from './src/redux/MyStore';

const App = () => {
  return (
    <Provider store={MyStore}>
      <Main />
    </Provider>
  );
};

export default App;
