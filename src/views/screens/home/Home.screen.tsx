import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@HeroSpin/navigation';
import {Assets} from '@HeroSpin/assets';
import styles from './Home.styles';

type THomeScreenProps = NativeStackScreenProps<TRootStackParamList, 'Home'>;

const HomeScreen = ({}: THomeScreenProps) => {
  return (
    <ImageBackground
      source={Assets.images.postersBackground}
      blurRadius={5}
      style={styles.background}
      resizeMode="repeat"></ImageBackground>
  );
};

export default HomeScreen;
