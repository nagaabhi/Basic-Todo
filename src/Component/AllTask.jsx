import { useContext } from "react";
import { TodoStore } from "../Store/todo-store";
const AllTasks = ({ isChecked, setIsChecked }) => {
  const { todoList, deleteTodo } = useContext(TodoStore);

  const handleOnChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <>
      {todoList.length === 0 ? (
        <h3 className="text-center errormsg">No Todos</h3>
      ) : (
        <div className="over-all-container">
          {todoList.map((todo) => {
            return (
              <div class="todo-container my-3">
                <div class="todo-left">
                  <input
                    type="checkbox"
                    class="todo-checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                  />
                  <div class="todo-details">
                    <span class="todo-name">{todo.todoTitle}</span>
                    <span class="todo-date">{todo.todoType}</span>
                
                  </div>
                </div>
                <div class="todo-right">
                  <button
                    class="delete-button"
                    onClick={() => deleteTodo(todo.todoTitle)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default AllTasks;
