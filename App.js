/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home';
import WorkoutStages from './pages/WorkoutStages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          // getComponent={() => require('./pages/Home').default}
          component={Home}
        />
        <Stack.Screen name="WorkoutStages" component={WorkoutStages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
