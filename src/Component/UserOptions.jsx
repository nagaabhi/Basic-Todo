import { useRef } from "react";

const UserOptions = ({ options, updatePop }) => {
  const tabs = useRef("");

  const updateUserOpt = () => {
    options(tabs.current.value);
  };

  const update = () => {
    updatePop(true);
  }

  return (
    <>
      <div className="container px-4 text-center my-5 user-options">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <button className="add-task-button" onClick={update}>Add Task</button>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <select name="" id="" ref={tabs} onClick={updateUserOpt}>
                <option value="All">All</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserOptions;
