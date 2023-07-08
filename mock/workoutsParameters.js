import crunch from '../assets/exercisesVideos/crunch.mp4';
import highKnees from '../assets/exercisesVideos/highKnees.mp4';
import jumpingJack from '../assets/exercisesVideos/jumpingJack.mp4';
import lunge from '../assets/exercisesVideos/lunge.mp4';
import plank from '../assets/exercisesVideos/plank.mp4';
import plankLeft from '../assets/exercisesVideos/plankLeft.mp4';
import sidePlankRight from '../assets/exercisesVideos/sidePlankRight.mp4';
import pushupRotation from '../assets/exercisesVideos/pushupRotation.mp4';
import squat from '../assets/exercisesVideos/squat.mp4';
import pushup from '../assets/exercisesVideos/pushup.mp4';
import finished from '../assets/exercisesVideos/finished.mp4';

export const workoutStartLabel = 'Get Ready !!';
export const workoutFinishLabel = 'Congratulations!! Workout complete !';

export const workoutTitle = {
  '3min': 'Short, sweet, sweat',
  '5min': 'Full body burner',
  '8min': 'Daily intense workout',
};

export const workoutPlans = {
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

export const videosPerExercise = {
  'jumping jacks': jumpingJack,
  pushups: pushup,
  crunches: crunch,
  squats: squat,
  plank: plank,
  'high knees': highKnees,
  'lunges both sides': lunge,
  'lunge right': lunge,
  'lunges left': lunge,
  'pushup with rotation': pushupRotation,
  'side plank left': plankLeft,
  'side plank right': sidePlankRight,
  [workoutFinishLabel]: finished,
};
