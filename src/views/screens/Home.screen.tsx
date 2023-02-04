import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@HeroSpin/navigation';

type THomeScreenProps = NativeStackScreenProps<TRootStackParamList, 'Home'>;

const HomeScreen = (props: THomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
