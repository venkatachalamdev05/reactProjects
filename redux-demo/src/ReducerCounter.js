import React, { useReducer } from "react"

const ReducerCounter = (props) => {

    const initialState = {
        counter1: 0,
        counter2: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        console.log(state);        
        if (action.type == "increment1") {
            return { ...state, counter1: state.counter1 + 1 };
        }
        if (action.type === "decrement1") {
            return { ...state, counter1: state.counter1 - 1 };
        }
        if (action.type === "increment12") {
            return { ...state, counter2: state.counter2 - 1 };
        }
        if (action.type === "decrement2") {
            return { ...state, counter2: state.counter2 - 1 };
        }
    }

    function increment1() {
        dispatch({ type: "increment1" });
    }

    function decrement1() {
        dispatch({ type: "decrement1" });
    }

    function increment2() {
        dispatch({ type: "increment2" });
    }

    function decrement2() {
        dispatch({ type: "decrement2" });
    }



    return (
        <div>
            <div >
                <h3>R Counter 1</h3>
                <p>{state.counter1}</p>
                <button onClick={increment1}>Increment 1</button>
                <button onClick={decrement1}>Decrement 1</button>


                <h3>R Counter 2</h3>
                <p>{state.counter2}</p>
                <button onClick={increment2}>Increment 2</button>
                <button onClick={decrement2}>Decrement 2</button>
            </div>
        </div>
    )
};

export default ReducerCounter;


//Centralized Data - Manage
//State Management - Redux
