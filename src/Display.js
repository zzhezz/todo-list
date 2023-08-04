import React from "react";

export default function Display({ todos, toggleComplete}) {
    
    return (
        <>
        <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id} onClick={()=>{toggleComplete(todo.id)}}  
                        style={{ color: todo.complete ? "grey" : "", textDecoration: todo.complete ? "line-through" : "" }}>
                            {todo.task}
                        </li>
                    )
                })}
        </ul>        
        </>
    );
}