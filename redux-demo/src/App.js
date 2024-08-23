import { useState } from "react";
import { addTask } from "./redux";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import ReducerCounter from "./ReducerCounter";

function App() {

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();


  function addTodo() {
    dispatch(addTask(todo));
  }

  const todoitems = useSelector((data) => {
    return data.todo.allTasks;
  })

  return (
    <div className="p-5">
      <Counter></Counter>
      <ReducerCounter></ReducerCounter>
      <input type="text" placeholder="Add Todo" className="m-3" onChange={(event) => setTodo(event.target.value)}></input>
      <button onClick={addTodo}>Add</button>

      <h4>Todo Items :</h4>
      <ol>
        {
          todoitems.map(function (item, i) {
            return <li key={i}>{item}</li>
          })
        }
      </ol>
    </div>
  )
}
export default App;






