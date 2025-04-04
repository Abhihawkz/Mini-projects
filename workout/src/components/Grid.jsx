import { useEffect, useState } from "react";
import { workoutProgram as traningPlan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard.jsx";
const Grid = () => {
  const [savedworkouts, setSavedWorkouts] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const completedworkout = Object.keys(savedworkouts || {}).filter((val) => {
    const entry = savedworkouts[val];
    return entry.isComplete;
  });
  function handleSave(index, data) {
    const newObj = {
      ...savedworkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || !!savedworkouts?.[index]?.isComplete,
      },
    };

    setSavedWorkouts(newObj);
    localStorage.setItem("workouts", JSON.stringify(newObj));
    setSelectedWorkout(null);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let savedData = {};
    if (localStorage.getItem("workouts")) {
      savedData = JSON.parse(localStorage.getItem("workouts"));
    }

    setSavedWorkouts(savedData);
  }, []);

  function handleComplete(index, data) {
    const newObj = {
      ...data,
    };

    newObj.isComplete = true;
    handleSave(index, newObj);
  }

  return (
    <div className="training-plan-grid">
      {Object.keys(traningPlan).map((workout, workoutIndex) => {
        const isLocked =
          workoutIndex === 0
            ? false
            : !completedworkout.includes(`${workoutIndex - 1}`);

        const type =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
            ? "Pull"
            : "Legs";

        const training_plan = traningPlan[workoutIndex];

        const day =
          workoutIndex / 8 <= 1 ? "0" + (workoutIndex + 1) : workoutIndex + 1;

        const icon =
          workoutIndex % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell"></i>
          ) : workoutIndex % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging"></i>
          ) : (
            <i className="fa-solid fa-bolt"></i>
          );

        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              savedWeights={savedworkouts?.[workoutIndex]?.weights}
              handleComplete={handleComplete}
              handleSave={handleSave}
              key={workoutIndex}
              type={type}
              trainingPan={training_plan}
              dayNum={day}
              icons={icon}
            />
          );
        }

        return (
          <button
            onClick={() => {
              setSelectedWorkout(workoutIndex);
            }}
            key={workoutIndex}
            className={"card plan-card " + (isLocked ? "inactive" : "")}
          >
            <div className="plan-card-header">
              <p>Day {day}</p>
            </div>
            {isLocked ? <i className="fa-solid fa-lock"></i> : icon}
            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Grid;
