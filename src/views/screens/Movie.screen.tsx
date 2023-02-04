import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@HeroSpin/navigation';

type TMovieScreenProps = NativeStackScreenProps<TRootStackParamList, 'Movie'>;

const MovieScreen = (props: TMovieScreenProps) => {
  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  );
};

export default MovieScreen;
