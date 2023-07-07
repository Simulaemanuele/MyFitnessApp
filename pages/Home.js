import React, {
  PureComponent,
  Component,
  ReactElement,
  useState,
  useEffect,
} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';

const Home = (props, {navigation, route}) => {
  const [state, setState] = useState();

  // const {params} = route;

  useEffect(() => {
    setState(props);
  }, []);

  return (
    <>
      <View>
        <Text>{'Welcome in My Fitness App'}</Text>
        <Card />
      </View>
    </>
  );
};

export default Home;
