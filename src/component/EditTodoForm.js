import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
uuidv4();

const EditTodoForm = (props) => {
const {editTodo, plan}=props
    const[value, setValue]= useState(plan.plan);

    const handlechange= (event)=>{
		setValue( event.target.value)
	}

    const handleSubmit=event=>{
		//alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    //console.log(this.state)   
        event.preventDefault()
        editTodo(value, plan.id)

        setValue('')
        
	}


    return (
        <div>
           <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handlechange} className='todo-input' placeholder='Update Task?' />
            <button type='submit' className='todo-btn'>Update Your Plan</button>
            </form> 
        </div>
    );
};

export default EditTodoForm;