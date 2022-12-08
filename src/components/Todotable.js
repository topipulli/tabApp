import React from "react";
 

export default function Todotable (props) {
    <div>
    <table>
            <th>To Do</th><th>Date</th>
        <tbody>
            {
            props.todos.map(
                (todo, index) => 
            <tr key={index}> 
                <td>{todo.description}</td><td>{todo.date}</td>
                <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>  
            </tr>
            )
            }
        </tbody>
    </table>
    </div>
}