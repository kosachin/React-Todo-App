import axios from "axios";
import { useEffect, useRef, useState } from "react";
import InputBox from "./TodoInput";
import TodoItem from "./TodoItem";
import "./Todos.css";
function Todos() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const myRef = useRef();

  useEffect(() => {
    getData();
  }, [page]);
  function getData() {
    axios
      .get(
        `https://lit-sierra-62610.herokuapp.com/tasks?_page=${page}&_limit=3`
      )
      .then((res) => {
        myRef.current=res.headers[`x-total-count`];
        setTodos(res.data);
      });
  }
  function setStatus(e) {
    fetch(`https://lit-sierra-62610.herokuapp.com/tasks/${e}`, {
      method: "DELETE",
    }).then(getData);
  }
  

  return (
    <>
      <h1 className="todos">Todos</h1>
      <div className="container">
        <InputBox getData={getData} />
        <div className="container-2">
          <TodoItem data={todos} setStatus={setStatus} />
          <div className="controlBtn">
            <button
              className="prev-btn"
              style={page > 1 ? { display: "inline" } : { display: "none" }}
              onClick={page > 1 ? () => setPage(page - 1) : null}
            >
              Prev
            </button>
            <button
              className="next-btn"
              style={{ display: page > Math.ceil(myRef.current/3)-1 ? "none" : "inline" }}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
