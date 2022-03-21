import React, {useContext} from "react";
import {QuizStateContext} from "../helpers/Contexts";
import "../App.css";

function StartMenu () {
    const {quizState, setQuizState} = useContext (QuizStateContext);
    return (
        <div className="menu">

        <h1>Dobrodošli u kviz znanja iz oblasti računarstva i informatike</h1>
        <button className="startButton"

            onClick={() => {
                setQuizState("quiz");
            }}>
            Započni kviz</button>
    </div>
    );
}

export default StartMenu;