import {View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {TMovieData} from '@HeroSpin/services';
import {ViewStyle} from 'react-native/types';
import styles from './RandomMovieCard.styles';
import {Assets} from '@HeroSpin/assets';

type TRandomMovieCardProps = {
  loading?: boolean;
  value?: TMovieData;
  style?: ViewStyle;
};
const RandomMovieCardComponent = (props: TRandomMovieCardProps) => {
  return (
    <View style={[styles.container, props.style]}>
      {!props.value && (
        <Image source={Assets.images.movieReel} style={styles.emptyImage} />
      )}

      {props.value && !props.loading && (
        <ImageBackground
          source={{uri: props.value.Poster}}
          style={styles.movieImage}></ImageBackground>
      )}
    </View>
  );
};

export default RandomMovieCardComponent;
