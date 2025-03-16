import { useContext, useRef } from "react";
import { TodoStore } from "../Store/todo-store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const InputField = ({ updatePop, showPopUp }) => {
  const { addTodo } = useContext(TodoStore);
  const name = useRef("");
  const type = useRef("");
  const showToastMessage = () => {
    toast.success("Task Added Successfully", {
      position: "bottom-right",
      className: "toast-message",
    });
  };

  const addTodoItems = () => {
    let todoName = name.current.value;
    let todoType = type.current.value;
    addTodo(todoName, todoType);
    showToastMessage();
  };
  const update = () => {
    updatePop(false);
  };
  if (showPopUp) {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)"; // Dark overlay effect
    document.body.style.backgroundFilter = "blur(10px)";
  } else {
    document.body.style.backgroundColor = ""; // Reset background
  }

  return (
    <>
      <div
        className={`data-container ${
          showPopUp ? "bg-gray-500 bg-opacity-50" : "bg-white"
        }`}
      >
        <div className="containers form">
          <h3>ADD TODO</h3>
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                ref={name}
                type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                required
              />
            </div>
            <div class="form-group">
              <label for="status">Status</label>
              <select id="status" name="status" ref={type} required>
                <option value="active">Completed</option>
                <option value="inactive">Incompete</option>
              </select>
            </div>
          </form>
          <button className="submit-button" onClick={addTodoItems}>
            Submit
            <ToastContainer />
          </button>

          <button
            className="close-button mx-3"
            onClick={() => updatePop(false)}
          >
            Close
          </button>
        </div>

        <button className="delete-button" onClick={update}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </div>
    </>
  );
};
export default InputField;
