import { createContext, useReducer } from "react";
export const TodoStore = createContext({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const updateUseRed = (currTodoList, action) => {
  let newArrList = currTodoList;
  if (action.type === "DELETE_POST") {
    newArrList = newArrList.filter(
      (list) => list.todoTitle !== action.payload.name
    );
  } else if (action.type === "ADD_LIST") {
    newArrList = [
      ...newArrList,
      {
        todoTitle: action.payload.name,
        todoType: action.payload.type,
      },
    ];
  }
  return newArrList;
};

const UpdateTodo = ({ children }) => {
  const [todoList, dispatchTodoList] = useReducer(updateUseRed, DEFAULT_TODO);

  const addTodo = (name, type) => {
    const addList = {
      type: "ADD_LIST",
      payload: {
        name,
        type,
      },
    };
    dispatchTodoList(addList);
  };

  const deleteTodo = (name) => {
    const deleteList = {
      type: "DELETE_POST",
      payload: {
        name,
      },
    };
    dispatchTodoList(deleteList);
  };
  return (
    <TodoStore.Provider
      value={{
        todoList: todoList,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
      }}
    >
      {children}
    </TodoStore.Provider>
  );
};

const DEFAULT_TODO = [];

export default UpdateTodo;
