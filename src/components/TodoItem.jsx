import "./TodoItem.css"
function TodoItem({ data, setStatus }) {
  return (
    <div className="todo-item-contaner">
      {data.map((e) => {
        return (
          <div>
            <h2>{e.title}</h2>
            <p>{e.body}</p>
            <button
              onClick={() => {
                setStatus(e.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default TodoItem;
