/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from './pages/Home';

function App() {
  return (
    <View style={styles.container}>
      <Text>{'Home workouts'}</Text>
      <Text>{'With no equipments'}</Text>
      <Text>{'Got a minute?'} 💪</Text>

      <StatusBar barStyle={'auto'} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
