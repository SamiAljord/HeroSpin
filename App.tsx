import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from '@HeroSpin/navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <StatusBar barStyle={'light-content'} />
      <RootStack />
      <SafeAreaView />
    </NavigationContainer>
  );
}

export default App;
