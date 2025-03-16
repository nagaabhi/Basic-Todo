import { useContext } from "react";
import { TodoStore } from "../Store/todo-store";
const IncompletedTask = ({ isCheked, setIsChecked }) => {
  const { todoList, deleteTodo } = useContext(TodoStore);

  let errorMessage = todoList.length === 0 && <h5 className="in-complete text-center">No Incomplete Task Found</h5>
  return (
    <>
    {errorMessage}
      {isCheked === false && (
        <div className="over-all-container">
          {todoList.map((todo) => {
            return (
              <div class="todo-container my-3">
                <div class="todo-left">
                  <input type="checkbox" class="todo-checkbox" />
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
export default IncompletedTask;
