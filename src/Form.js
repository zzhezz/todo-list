import React, {useState} from "react";

export default function Form({addTodo}){
    const [formValue, setFormValue] = useState("");
    function updateValue(e){
      setFormValue(e.target.value);
    }
    function createObject(e){
        e.preventDefault();
        if(formValue){
          addTodo(formValue);
          setFormValue('');
        }
    }
    return(
        <>
          <input type="text" id="add" value={formValue} onChange={updateValue}/>
          <button onClick={createObject} className="todo-btn">Add</button>
        </>
    );
}