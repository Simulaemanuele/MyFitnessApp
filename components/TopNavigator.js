import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const TopNavigator = props => {
  const [state, setState] = useState();

  useEffect(() => {
    setState(props);
  }, [props]);

  const switchTheme = () => {
    state.switchTheme(isDarkMode);
  };

  const isDarkMode = state?.isDarkMode;

  const styles = StyleSheet.create({
    toggleTheme: {
      backgroundColor: isDarkMode ? '#000535' : '#87CEEB',
      color: isDarkMode ? '#ffffff' : '#272D2D',
    },
  });
  return (
    <View
      style={[
        styles.toggleTheme,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 5,
        },
      ]}>
      <Text>{'Welcome'}</Text>
      <TouchableOpacity
        onPress={() => {
          switchTheme();
        }}>
        <View
          style={{borderRadius: 15, backgroundColor: '#00008B', padding: 5}}>
          <Text style={{color: '#ffffff'}}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
