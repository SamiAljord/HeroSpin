import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@HeroSpin/navigation';

type TSuperHeroesScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'SuperHeroes'
>;

const SuperHeroesScreen = (props: TSuperHeroesScreenProps) => {
  return (
    <View>
      <Text>SuperHeroesScreen</Text>
    </View>
  );
};

export default SuperHeroesScreen;
