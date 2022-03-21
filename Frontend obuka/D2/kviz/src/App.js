import React from "react";
import { useState } from "react";
import StartMenu from "./components/StartMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import {QuizStateContext} from "./helpers/Contexts";
import './App.css';

function App() {

  const [quizState, setQuizState] = useState("start");
  const [score, setScore] = useState(0);

  return (
      <div className="App">
          <QuizStateContext.Provider
                  value={{
                      quizState,
                      setQuizState,
                      score,
                      setScore,
                  }}>
              {quizState === "start" && <StartMenu />}
              {quizState === "quiz" && <Quiz />}
              {quizState === "end" && <EndScreen />}
          </QuizStateContext.Provider>
      </div>
  );
}

export default App;