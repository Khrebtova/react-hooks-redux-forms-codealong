import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(todoAdded(text));
    console.log(text);
    setText("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text}/>
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}


export default CreateTodo;
