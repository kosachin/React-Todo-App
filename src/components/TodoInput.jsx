import axios from "axios";
import { useState } from "react";
import "./TodosInput.css";

function InputBox({ getData }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <div className="input-field">
        <input
        value={title}
        placeholder="Add task title"
        className="inp-title"
        onChange={(e) => setTitle(e.target.value)}
        />
        <input
        value={body}
          placeholder="Add task body..."
          className="inp-body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="add-btn"
          onClick={() => {
            axios
              .post("https://lit-sierra-62610.herokuapp.com/tasks", {
                title,
                body,
                status: false,
              })
              .then(getData);
              setBody("")
              setTitle("")
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
export default InputBox;
