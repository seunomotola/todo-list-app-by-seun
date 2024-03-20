import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = (props) => {
    const {darkMode, toggleDarkMode}= props
    
     const[todos, setTodos]= useState(
        JSON.parse(localStorage.getItem("todos")) || []
     )

     React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = yourplan =>{
        setTodos([...todos, {id: uuidv4(), plan: yourplan, 
            completed: false, isEditing: false} ])
        console.log(todos)
    }

    const toggleComplete= id=>{
        setTodos(todos.map(todo=> todo.id === id ? {...
        todo, completed: !todo.completed}: todo))
    }

    const deleteTodo= id=>{ 
        alert('Your Plan was deleted Successfully')
        setTodos(todos.filter(todo=> todo.id !== id ))
        
    }

    const editTodo= id=>{
        setTodos(todos.map(todo=> todo.id === id  ? {...
            todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (plan, id)=>{
        alert('Your Plan was Updated Successfully')
        setTodos(todos.map(todo=> todo.id === id  ? {...
            todo, plan, isEditing: !todo.isEditing}: todo))
    }
    return (
      
        <main  className={darkMode ? "dark" : "light"}>
<p className='logo_text'>Click to Change Background</p>
<nav 
           // to slide the button
           className={darkMode ? "dark": "light"}
            // to slide the button
        >

{/* <p className="nav--logo_text">To do App</p> */}
           
            <div 
                className="toggler"  
            >
                
                <p className="toggler--light">Purple</p>
                <div 
                    className="toggler--slider"
                    onClick={toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            </nav>

            <h1>What Your Plan Today!</h1>
           <TodoForm addTodo={addTodo}/> 

           {todos.map((yourplan)=>(
yourplan.isEditing? (
    <EditTodoForm key={yourplan.id} editTodo={editTask} plan={yourplan}/>
): (
<Todo plan={yourplan} key={yourplan.id}
toggleComplete={toggleComplete} 
deleteTodo={deleteTodo}
editTodo={editTodo} 
/>
)

           ))}
           
        </main>
        
        
    );
};

export default TodoWrapper;