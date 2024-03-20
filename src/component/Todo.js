import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faBackward, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => {
    const {plan, toggleComplete, deleteTodo, editTodo} = props
    return (
        <div className='Todo'>
            <p title='click to strike through the task incase you have completed it' 
            onClick={()=>toggleComplete(plan.id)} className={
                `${plan.completed ? 'completed': ""}` 
            }>{plan.plan} </p>
            {/* the first plan is the prop we are collecting while the second plan is the one fro the const addTodo in TodoWrapper */}
           

            <div> 

                <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(plan.id)}  />
                <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(plan.id)} />
            </div>
        </div>
    );
};

export default Todo;