import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from '@HeroSpin/navigation';
import {Assets} from '@HeroSpin/assets';
import {persistor, store} from '@HeroSpin/state';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar translucent barStyle={'light-content'} />
          <RootStack />
          <SafeAreaView style={{backgroundColor: Assets.colors.background}} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
