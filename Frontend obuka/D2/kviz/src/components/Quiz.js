import {useState} from "react";
import {useContext} from "react";
import {QuizStateContext} from "../helpers/Contexts";
import {Questions} from "../helpers/QuestionList";
import  {Timer} from "./Timer";
import "../App.css";

function Quiz () {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {score, setScore, quizState, setQuizState} = useContext(QuizStateContext);
    const [fail, setFail] = useState(0);


    const chooseOption = (option) => {
        setOptionChosen(option);
    };

    const nextQuestion = () => {
        if (Questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1);
        }
        else{
            setFail(fail+1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    if (currentQuestion===10){
        setQuizState("end");
    }


    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].question}</h1>
            <div className="quesstions">
                <button onClick={() => {
                    chooseOption("optionA");
                    nextQuestion();
                }
                }>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => {
                    chooseOption("optionB");
                    nextQuestion();
                }
                }>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => {
                    chooseOption("optionC");
                    nextQuestion();
                }
                }>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => {
                    chooseOption("optionD");
                    nextQuestion();
                }
                }>{Questions[currentQuestion].optionD}</button>
                <h3>Broj tačnih odgovora: {score}</h3>
                <h3>Broj netačnih odgovora: {fail}</h3>
                <button onClick={() => {
                    setQuizState("start");
                    setScore(0);
                }
                }>Odustani
                </button>
                <Timer/>
            </div>
        </div>

    );
}
export default Quiz;


