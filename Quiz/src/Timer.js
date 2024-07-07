import React, { useContext, useEffect, useState } from "react"
import { Mybasket } from "./App";
import './App.css'
const Timer = (props) => {
    const valueData = useContext(Mybasket);
    const [minutes, setMinutes] = useState(15)
    const [seconds, setSeconds] = useState(0)
    useEffect(function () {
        const countdown = setInterval(function () {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            else {
                if (minutes > 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => clearInterval(countdown)
    }, [minutes, seconds])


    function checkTimer() {
        if (minutes == 0 & seconds == 0) {
            valueData.setNavigation("Result");
        }

    }

    return (
        <div>
            <p  className="bg-white"> ** {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds} **</p>
            <p> {checkTimer()}</p>
        </div>
    )
};

export default Timer;
