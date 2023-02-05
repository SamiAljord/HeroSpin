import {Assets} from '@HeroSpin/assets';
import {
  getWindowWidth,
  hp,
  ImageStyleSheet,
  TextStyleSheet,
  ViewStyleSheet,
  wp,
} from '@HeroSpin/utils';
import {StyleSheet} from 'react-native';

const viewStyles = ViewStyleSheet({
  container: {
    height: hp(460),
    width: getWindowWidth() * 0.75,
    borderRadius: 5,
    borderWidth: wp(3),
    borderColor: Assets.colors.secondary,
    backgroundColor: Assets.colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textStyles = TextStyleSheet({});
const imageStyles = ImageStyleSheet({
  emptyImage: {
    width: wp(100),
    height: wp(100),
  },
  movieImage: {
    width: '100%',
    height: '100%',
  },
});

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
});

export default styles;
