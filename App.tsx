import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from '@HeroSpin/navigation';
import {Assets} from '@HeroSpin/assets';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar translucent barStyle={'light-content'} />
      <RootStack />
      <SafeAreaView style={{backgroundColor: Assets.colors.background}} />
    </NavigationContainer>
  );
}

export default App;
