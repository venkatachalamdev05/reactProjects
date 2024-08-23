import React, { useState } from "react"

const Counter = (props) => {

    const [counterValue1, setCounterValue1] = useState(0)
    const [counterValue2, setCounterValue2] = useState(0)

    function increment1(){
        setCounterValue1(counterValue1+1)
    }

    function decrement1(){
        setCounterValue1(counterValue1-1)
    }   

    function increment2(){
        setCounterValue2(counterValue2+1)
    }

    function decrement2(){
        setCounterValue2(counterValue2-1)
    }


    return (
        // UseState
        <div >
            <h3>S Counter 1</h3>
            <p>{counterValue1}</p>
            <button onClick={increment1}>Increment 1</button>
            <button onClick={decrement1}>Decrement 1</button>


            <h3>S Counter 2</h3>
            <p>{counterValue2}</p>
            <button onClick={increment2}>Increment 2</button>
            <button onClick={decrement2}>Decrement 2</button>
        </div>
    )
};

export default Counter;
