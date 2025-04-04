import React, { useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions } from "../utils";

const WorkoutCard = ({ trainingPan, workoutIndex, type, dayNum, icons , savedWeights , handleSave, handleComplete }) => {
  const { warmup, workout } = trainingPan || {};

  const [showExerciseDescripton, setShowExerciseDescription] = useState(null);
  //   const showExerciseDescripton = {name:'assdaf',description:'adfhalfdja'}
  const [weights,setWeights] = useState(savedWeights || {})
    
  function handleAddWeight(title,weight){
    const newObj = {
        ...weights,[title]:weight
    }
    setWeights(newObj)
  }

  return (
    <div className="workout-container">
      {showExerciseDescripton && (
        <Modal
          showExerciseDescripton={showExerciseDescripton}
          handleCloseModal={() => {
            setShowExerciseDescription(null);
          }}
        />
      )}
      <div className="workout-card card">
        <div className="plan-card-header">
          <p>Day {dayNum}</p>
          {icons}
        </div>
        <div className="plan-card-header">
          <h2>
            <b>{type} Workout </b>
          </h2>
        </div>
      </div>

      <div className="workout-grid">
        <div className="execrise-name">
          <h4>Warmup</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weight</h6>
        {warmup.map((warmupExercise, warmupIndex) => {
          return (
            <React.Fragment key={warmupIndex}>
              <div className="execrise-name">
                <p>
                  {warmupIndex + 1}.{warmupExercise.name}
                </p>
                <button
                  onClick={() => {
                    setShowExerciseDescription({
                      name: warmupExercise.name,
                      description: exerciseDescriptions[warmupExercise.name],
                    });
                  }}
                  className="help-icon"
                >
                  <i className="fa-regular fa-circle-question"></i>
                </button>
              </div>
              <p className="exercise-info">{warmupExercise.sets}</p>
              <p className="exercise-info">{warmupExercise.reps}</p>
              <input className="weight-input" placeholder="N/A" disabled />
            </React.Fragment>
          );
        })}
      </div>
      <div className="workout-grid">
        <div className="execrise-name">
          <h4>Workout</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weight</h6>
        {workout.map((workoutExercise, wIndex) => {
          return (
            <React.Fragment key={wIndex}>
              <div className="execrise-name">
                <p>
                  {wIndex + 1}.{workoutExercise.name}
                </p>
                <button
                  onClick={() => {
                    setShowExerciseDescription({
                      name: workoutExercise.name,
                      description: exerciseDescriptions[workoutExercise.name],
                    });
                  }}
                  className="help-icon"
                >
                  <i className="fa-regular fa-circle-question"></i>
                </button>
              </div>
              <p className="exercise-info">{workoutExercise.sets}</p>
              <p className="exercise-info">{workoutExercise.reps}</p>
              <input  value={weights[workoutExercise.name || '']} onChange={(e)=>{
                handleAddWeight(workoutExercise.name,e.target.value)
              }} className="weight-input" placeholder="14" />
            </React.Fragment>
          );
        })}
      </div>

      <div className="workout-buttons">
        <button onClick={()=>{
            handleSave(workoutIndex,{weights})
        }}>Save & Exit</button>
        <button onClick={()=>{
            handleComplete(workoutIndex,{weights })
        }} disabled={Object.keys(weights).length !== workout.length}>Complete</button>
      </div>
    </div>
  );
};

export default WorkoutCard;
