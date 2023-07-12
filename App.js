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
  TouchableOpacity,
  View,
} from 'react-native';
import Home from './pages/Home';
import {workouts} from './mock/workouts';
import {WorkoutsCard} from './components/Card';
import {useMediaQuery} from 'react-responsive';
import {useState, useEffect} from 'react';
import WorkoutStages from './pages/WorkoutStages';

function App() {
  const isPhone = useMediaQuery({
    maxDeviceWidth: 650,
  });

  const [workoutType, setWorkoutType] = useState('');
  const [currentStageNumber, setCurrentStageNumber] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // exit early when we reach 0
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  });

  const intervalId = 0;

  // if (workoutType !== '') {
  //   return WorkoutStages(
  //     setWorkoutType,
  //     workoutType,
  //     setCurrentStageNumber,
  //     currentStageNumber,
  //     timeLeft,
  //     setTimeLeft,
  //     intervalId,
  //     isPhone,
  //   );
  // }

  const renderWorkoutStages = () => {
    if (workoutType !== '') {
      // return WorkoutStages(
      //   setWorkoutType,
      //   workoutType,
      //   setCurrentStageNumber,
      //   currentStageNumber,
      //   timeLeft,
      //   setTimeLeft,
      //   intervalId,
      //   isPhone,
      // );
      return (
        <View style={{flex: 1}}>
          <WorkoutStages
            setWorkoutType={setWorkoutType}
            workoutType={workoutType}
            setCurrentStageNumber={setCurrentStageNumber}
            currentStageNumber={currentStageNumber}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            intervalId={intervalId}
            isPhone={isPhone}
          />
        </View>
      );
    }
  };

  const handleCardOnPress = type => {
    console.log('Type in handle: ', workoutType);
    setWorkoutType(type);
  };

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
            <TouchableOpacity
              key={item.title}
              onPress={() => setWorkoutType(item.type)}
              style={{borderRadius: 20}}>
              <View
                style={{marginBottom: 10, marginHorizontal: 5, elevation: 30}}>
                <WorkoutsCard
                  title={item.title}
                  time={item.time}
                  image={item.img}
                  type={item.type}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />

      <View>{workoutType != '' ? renderWorkoutStages() : null}</View>
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
