import React, {useState} from 'react';

const TodoForm = (props) => {
    const {addTodo} = props
    const[value, setValue]= useState('')

    const handlechange= (event)=>{
		setValue( event.target.value) 
	}

    const handleSubmit=event=>{
		//alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    //console.log(this.state)   
        event.preventDefault()
        addTodo(value)

        setValue('')
        
	}


    return (
        <div>
           <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handlechange} className='todo-input' placeholder='What is the task today?' required />
            <button type='submit' className='todo-btn'>Add Task</button>
            </form> 
        </div>
    );
};

export default TodoForm;