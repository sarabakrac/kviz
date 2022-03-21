import React from "react";
import {useContext} from "react";
import {QuizStateContext} from "../helpers/Contexts";
import "../App.css";

function EndScreen (){

    const {score, setScore, setQuizState} = useContext(QuizStateContext);

    const backToBeginning = () => {
        setScore(0);
        setQuizState("start");
    };
    return (
        <div className="EndScreen">
            <h1>Uspješno ste završili kviz!</h1>
            <h2>Ostvareni rezultat: {score} / 10 </h2>
            <h3>Utrošeno vrijeme: </h3>
            <button onClick={backToBeginning}>Povratak na početni ekran</button>
        </div>
    );
}

export default EndScreen;

