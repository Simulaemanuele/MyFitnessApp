const isExercise = exercise => {
  if (
    exercise === 'rest' ||
    exercise === startText ||
    exercise === finishedText
  ) {
    return false;
  }
  return true;
};

export const finishWorkout = (
  setWorkoutType,
  setCurrentStageNumber,
  intervalId,
) => {
  setWorkoutType('');
  setCurrentStageNumber(-1);
  clearInterval(intervalId);
  return <Text>Congrats on finishing!</Text>;
};

export const nextExercise = (
  currentStageNumber,
  setCurrentStageNumber,
  workoutSelected,
  setTimeLeft,
  exerciseTime,
) => {
  setCurrentStageNumber(currentStageNumber + 1);
  if (currentStageNumber + 1 !== workoutSelected.length) {
    const nextExerciseTime = workoutSelected[currentStageNumber + 1][1];
    setTimeLeft(nextExerciseTime);
  }
};

export const previousExercise = (
  currentStageNumber,
  setCurrentStageNumber,
  workoutSelected,
  setTimeLeft,
  exerciseTime,
) => {
  if (currentStageNumber > 0) {
    setCurrentStageNumber(currentStageNumber - 1);
    const prevExerciseTime = workoutSelected[currentStageNumber - 1][1];
    setTimeLeft(prevExerciseTime);
  }
};

export const getAmountOfExercisesTillNow = (workoutSelected, index) => {
  workoutSelected = workoutSelected.slice(0, index);
  let amountOfRests = 0;
  for (const exercise of workoutSelected) {
    if (!isExercise(exercise[0])) {
      amountOfRests += 1;
    }
  }
  return workoutSelected.length - amountOfRests;
};

const renderPreviousButton = (
  currentStageNumber,
  setCurrentStageNumber,
  workoutSelected,
  setTimeLeft,
  exerciseTime,
) => {
  return (
    <TouchableOpacity
      style={styles.previous}
      onPress={() => {
        if (currentStageNumber > 0) {
          previousExercise(
            currentStageNumber,
            setCurrentStageNumber,
            workoutSelected,
            setTimeLeft,
            exerciseTime,
          );
        }
      }}>
      <Text style={styles.previousText}>Previous</Text>
    </TouchableOpacity>
  );
};
