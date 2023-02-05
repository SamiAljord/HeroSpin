import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@HeroSpin/navigation';
import {Assets} from '@HeroSpin/assets';
import styles from './Home.styles';
import {RandomMovieCardComponent} from '@HeroSpin/views/components';
import {apiEndpoints, TMovieData} from '@HeroSpin/services';
import {setSuperHeroesAction} from '@HeroSpin/state';
import {useDispatch, useSelector} from 'react-redux';
import {TRootState} from '@HeroSpin/state/store';
import {generateRandomNumber} from '@HeroSpin/utils';

type THomeScreenProps = NativeStackScreenProps<TRootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: THomeScreenProps) => {
  const {superheroes} = useSelector((state: TRootState) => state);
  const [superHero, setSuperHero] = useState<string>();
  const [movie, setMovie] = useState<TMovieData>();
  const [loading, setLoading] = useState<boolean>();

  const dispatch = useDispatch();

  const getSuperHeroes = useCallback(() => {
    apiEndpoints.getAllSuperHeroes().then(result => {
      dispatch(setSuperHeroesAction(result));
    });
  }, [dispatch]);

  useLayoutEffect(() => {
    getSuperHeroes();
  }, [getSuperHeroes]);

  const onGetMoviePress = () => {
    setLoading(true);
    let heroName = '';
    if (!superHero) {
      heroName =
        superheroes && superheroes.length > 0
          ? superheroes[generateRandomNumber(0, superheroes.length - 1)].name
          : 'batman';
    }

    apiEndpoints
      .getMovie(heroName)
      .then(result => {
        if (result.Search) {
          setMovie(
            result.Search[generateRandomNumber(0, result.Search.length - 1)],
          );
        }
        if (result.Error) {
          setMovie(undefined);
        }
      })
      .catch(() => setMovie(undefined))
      .finally(() => setLoading(false));
  };

  const onSelectSuperHero = () => {
    const handleSelectedHero = (hero: string) => setSuperHero(hero);

    navigation.navigate('SuperHeroes', {
      selectSuperHero: handleSelectedHero,
    });
  };

  return (
    <ImageBackground
      source={Assets.images.postersBackground}
      blurRadius={5}
      style={styles.background}
      resizeMode="repeat">
      <RandomMovieCardComponent loading={loading} value={movie} />
      <TouchableOpacity onPress={onGetMoviePress} style={styles.button}>
        <Text style={styles.buttonText}>Surprise Me!</Text>
      </TouchableOpacity>
      {!superHero ? (
        <Text style={styles.text}>
          Wanna be more specific?{' '}
          <Text onPress={onSelectSuperHero} style={styles.highlightedText}>
            Select your SuperHero!
          </Text>
        </Text>
      ) : null}
    </ImageBackground>
  );
};

export default HomeScreen;
