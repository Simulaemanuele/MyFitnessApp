import React from 'react';
import {
  videosPerExercise,
  workoutFinishLabel,
  workoutPlans,
  workoutStartLabel,
} from '../mock/workoutsParameters';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  finishWorkout,
  getAmountOfExercisesTillNow,
  isExercise,
  nextExercise,
  renderPreviousButton,
} from '../utilities/workoutMethods';
import Video from '../components/Video';
import VideoPlayer from 'react-native-video-controls';

const WorkoutStages = (
  props,
  // {
  //   setWorkoutType,
  //   workoutType,
  //   setCurrentStageNumber,
  //   currentStageNumber,
  //   timeLeft,
  //   setTimeLeft,
  //   intervalId,
  //   isPhone,
  // },
) => {
  console.log('Route: ', props);
  const {
    setWorkoutType,
    workoutType,
    setCurrentStageNumber,
    currentStageNumber,
    timeLeft,
    setTimeLeft,
    intervalId,
    isPhone,
  } = props.route.params;
  console.log('params: ', props.route.params);
  const defaultDataStructure = {
    '3min': [
      [workoutStartLabel, 3],
      ['jumping jacks', 30],
      ['pushups', 30],
      ['squats', 30],
      ['plank', 30],
      ['lunges both sides', 30],
      ['pushup with rotation', 30],
      [workoutFinishLabel, 5],
    ],
    '5min': [
      [workoutStartLabel, 3],
      ['jumping jacks', 30],
      ['rest', 5],
      ['pushups', 30],
      ['rest', 5],
      ['crunches', 30],
      ['rest', 5],
      ['squats', 30],
      ['rest', 5],
      ['plank', 30],
      ['rest', 5],
      ['high knees', 30],
      ['rest', 5],
      ['lunges both sides', 30],
      ['rest', 5],
      ['pushup with rotation', 30],
      [workoutFinishLabel, 5],
    ],
    '8min': [
      [workoutStartLabel, 3],
      ['jumping jacks', 30],
      ['rest', 10],
      ['pushups', 30],
      ['rest', 10],
      ['crunches', 30],
      ['rest', 10],
      ['squats', 30],
      ['rest', 10],
      ['plank', 30],
      ['rest', 10],
      ['high knees', 30],
      ['rest', 10],
      ['lunge right', 30],
      ['rest', 10],
      ['lunges left', 30],
      ['rest', 10],
      ['pushup with rotation', 30],
      ['rest', 10],
      ['side plank left', 30],
      ['rest', 10],
      ['side plank right', 30],
      ['rest', 10],
      ['squats', 30],
      [workoutFinishLabel, 5],
    ],
  };
  // let workoutSelected =
  //   workoutPlans && workoutType
  //     /? workoutPlans[workoutType]
  //     : defaultDataStructure[workoutType];
  const setWorkoutSelection = type => {
    let selectedWorkout;
    if (type !== '') {
      selectedWorkout = workoutPlans[type];
    } else {
      throw new Error('Type is undefined!');
    }
    return selectedWorkout;
  };

  let workoutSelected = setWorkoutSelection(workoutType);

  if (currentStageNumber < 0) {
    setTimeLeft(workoutSelected[0][1]);
    setCurrentStageNumber(currentStageNumber + 1);
    return <Text>Loading</Text>;
  }

  const amountOfExercises = getAmountOfExercisesTillNow(
    workoutSelected,
    workoutSelected.length,
  );
  const amountOfExercisesTillNow = getAmountOfExercisesTillNow(
    workoutSelected,
    currentStageNumber + 1,
  );

  if (currentStageNumber === workoutSelected.length) {
    return finishWorkout(setWorkoutType, setCurrentStageNumber, intervalId);
  }

  const exerciseTime = workoutSelected[currentStageNumber][1];
  const exerciseName = workoutSelected[currentStageNumber][0];

  if (timeLeft <= 0) {
    if (currentStageNumber >= 0) {
      nextExercise(
        currentStageNumber,
        setCurrentStageNumber,
        workoutSelected,
        setTimeLeft,
        exerciseTime,
      );
    }
  }

  return (
    <View
      style={[
        styles.containerWorkout,
        {transform: [{scale: isPhone ? 1 : Platform.isPad ? 1.8 : 1.2}]},
      ]}>
      <View
        style={{
          width: '100%',
          height: '100%',
          maxWidth: 400,
          alignSelf: 'center',
          alignItems: 'center',
          maxHeight: 700,
        }}>
        <View style={{position: 'absolute', top: 10, left: 5}}>
          <Text style={styles.headerText}>{exerciseName} </Text>
          <Text style={styles.headerSubtitle}>
            {exerciseName === workoutStartLabel
              ? 'workout starts in...'
              : exerciseName === workoutFinishLabel
              ? 'you are awesome!'
              : exerciseName === 'rest'
              ? 'Catch your breath'
              : 'As many as you can!'}
          </Text>
        </View>

        {/* isExercise(exerciseName) || exerciseName == finishedText?  null : <View style={{height: 90}}></View> */}
        <Text style={styles.timeLeft}>{timeLeft}s</Text>
        {isExercise(exerciseName) || exerciseName == workoutFinishLabel ? (
          <VideoPlayer
            fullScreenOrientation="all"
            source={videosPerExercise[exerciseName]}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={styles.videoStyle}
          />
        ) : (
          <View style={{height: 230}}></View>
        )}

        <View style={styles.controls}>
          {renderPreviousButton(
            currentStageNumber,
            setCurrentStageNumber,
            workoutSelected,
            setTimeLeft,
            exerciseTime,
          )}

          <TouchableOpacity
            style={styles.next}
            onPress={() =>
              nextExercise(
                currentStageNumber,
                setCurrentStageNumber,
                workoutSelected,
                setTimeLeft,
                exerciseTime,
              )
            }>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.excercisesCompleted}>
          {amountOfExercisesTillNow}/{amountOfExercises} exercises completed
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            finishWorkout(setWorkoutType, setCurrentStageNumber, intervalId)
          }>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWorkout: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#2980B9',
    textAlign: 'center',
    // flexDirection:'column',
    // flexWrap:'wrap',
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  controls: {
    width: 400,
    paddingTop: 20,
    paddingLeft: 80,
    paddingRight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  next: {
    color: 'white',
  },
  excercisesCompleted: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    marginTop: 140,
    fontSize: 16,
    position: 'absolute',
    top: 360,
  },
  nextText: {
    color: 'white',
  },
  back: {
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
  },
  backButton: {
    width: '100%',
    position: 'absolute',
    fontSize: 12,
    textAlign: 'center',
    bottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#2980B9',
    alignSelf: 'stretch',
    textAlign: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  timeLeft: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    width: '100%',
    marginTop: 140,
  },
  headerText: {
    textAlign: 'left',
    width: '100%',
    marginLeft: 34,
    marginTop: 35,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 34,
    color: '#FFFFFF',
  },
  headerSubtitle: {
    textAlign: 'left',
    width: 248,
    marginLeft: 34,
    marginTop: 5,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    color: '#FFFFFF',
  },
  videoStyle: {
    width: 340,
    height: Platform.OS !== 'web' ? 210 : 190,
    marginLeft: 0,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default WorkoutStages;
