import {Assets} from '@HeroSpin/assets';
import {
  getWindowHeight,
  ImageStyleSheet,
  TextStyleSheet,
  ViewStyleSheet,
} from '@HeroSpin/utils';
import {StyleSheet} from 'react-native';

const viewStyles = ViewStyleSheet({});
const textStyles = TextStyleSheet({});
const imageStyles = ImageStyleSheet({
  background: {
    backgroundColor: Assets.colors.background,
    height: getWindowHeight() / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
});

export default styles;
