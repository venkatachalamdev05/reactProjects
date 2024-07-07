import './App.css'
import React, { useEffect, useState } from "react"
import { db } from "./Firebase.js";
import { Alert, Spinner } from "react-bootstrap";

function Header() {
    const [todo, settodo] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        setSpinner(true)
        db.collection('todo').onSnapshot((result) => {
            settodo(result.docs.map(function (element) {
                let rawData = {
                    id: element.id,
                    ...element.data()
                }
                return rawData;
            }))
            setSpinner(false)
        })
        
    }

    function deleteData(item) {
        db.collection('todo').doc(item.id).delete();
        getData();
    }

    function addItem() {
        let task = prompt("New Task", "Buy Grocery");
        if (task) {
            db.collection('todo').add(
                {
                    status: "pending",
                    taskName: task
                }
            );
            getData();
        }
    }

    function updateItem(item, value) {
        if (value == "pending") {
            db.collection('todo').doc(item.id).update({
                status: "inprogress",
                taskName: item.taskName
            })
            getData();
        }
        if (value == "inprogress") {
            db.collection('todo').doc(item.id).update({
                status: "completed",
                taskName: item.taskName
            })
            getData();
        }
    }

    function updateValue(item) {
        const inputs = prompt(`Enter the task to update`, `${item.taskName}`)
        if (inputs) {
            db.collection('todo').doc(item.id).update({
                status: item.status,
                taskName: inputs
            })
            getData();
        }
    }


    return (
        <div className="background p-5">
            <div className='todo-btn'>
                <button className="btn btn-primary" onClick={addItem}>Add Todo</button>
            </div>
            <table className="table mt-4 bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {console.log(todo)}
                    {
                        !spinner && todo.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.taskName}</td>
                                <td>
                                    {item.status == "pending" ? <button className="btn btn-outline-primary" onClick={() => updateItem(item, 'pending')}>Pending</button> : null}
                                    {item.status == "inprogress" ? <button className="btn btn-outline-warning" onClick={() => updateItem(item, 'inprogress')}>In Progress</button> : null}
                                    {item.status == "completed" ? <button className="btn btn-success">Completed</button> : null}

                                </td>
                                <td><img src="https://logowik.com/content/uploads/images/888_edit.jpg" width={'50px'} alt='' onClick={() => updateValue(item)}></img></td>
                                <td><img src="https://cdn-icons-png.freepik.com/256/484/484611.png?semt=ais_hybrid" width={'32px'} onClick={() => deleteData(item)} className='trash'></img></td>
                            </tr>
                        ))
                    }
                    <tr>
                        {todo.length == 0 &&  !spinner && <td className='p-3 text-center' colSpan={6}>No Tasks Found</td>}

                    </tr>


                    <tr>
                        {spinner &&
                            <td className="text-center p-4" colSpan={6} >
                                <Spinner animation="border" role="status" className='trash'>
                                    <span className="visually-hidden" >Loading...</span>
                                </Spinner>
                            </td>
                        }
                    </tr>
                </tbody>
            </table>


        </div >
    )
};

export default Header;
