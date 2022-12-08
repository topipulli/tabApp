import React, { useState } from 'react';


function TodoList() {
const [desc, setDesc] = useState({description: '', date: ''});
const [todos, setTodos] = useState ([]);

const inputChanged = (event) => {
    setDesc({...desc, [event.target.name]: event.target.value});
}

const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc])
}

const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
}


return (
    <div className='App'>
        <input type="text" placeholder='To Do' onChange={inputChanged} name="description" value={desc.description}/>
        <input type="date" placeholder='Date' onChange={inputChanged} name="date" value={desc.date}/>
        <button onClick={addTodo}>Add</button>
        <table>
            <th>To Do</th><th>Date</th>
        <tbody>
            {
            todos.map(
                (todo, index) => 
            <tr key={index}> 
                <td>{todo.description}</td><td>{todo.date}</td>
                <td><button onClick={() => deleteTodo(index)}>Delete</button></td>  
            </tr>
            )
            }
        </tbody>
        </table>
    </div>
    );
};

export default TodoList;