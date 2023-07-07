/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './pages/Home';
import {workouts} from './mock/workouts';
import {WorkoutsCard} from './components/Card';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>{'Home workouts'}</Text>
        <Text style={styles.headerSubtitle}>{'With no equipments'}</Text>
        <Text style={styles.txtOnCard}>{'Got a minute?'} 💪</Text>
      </View>

      <FlatList
        data={workouts}
        renderItem={({item}) => {
          let IMAGE = item.img;
          return (
            <View
              style={{marginBottom: 10, marginHorizontal: 5, elevation: 30}}>
              <WorkoutsCard
                title={item.title}
                time={item.time}
                image={item.img}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b894',
  },
  headerSection: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#2c3e50',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    fontSize: 30,
    lineHeight: 34,
  },
  headerSubtitle: {
    color: '#2c3e50',
    fontStyle: 'normal',
    fontWeight: '300',
    fontFamily: 'Ubuntu',
    fontSize: 22,
    lineHeight: 25,
  },
  txtOnCard: {
    color: '#2c3e50',
    fontStyle: 'normal',
    fontWeight: '300',
    fontFamily: 'Ubuntu',
    fontSize: 16,
    lineHeight: 23,
  },
  card: {
    marginVertical: 30,
    marginHorizontal: 70,
  },
});
