import {useState} from "react";
import {useEffect} from "react";

export const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000)

        return () => clearInterval(timer);

    });
    return (
        <div className="timer">
            <h3>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h3>
        </div>
    )
};