import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./Component/Heading";
import UserOptions from "./Component/UserOptions";
import Container from "./Component/Container";
import CompletedTask from "./Component/Completed";
import IncompletedTask from "./Component/Incomplete";
import AllTasks from "./Component/AllTask";
import InputField from "./Component/InputField";
import UpdateTodo from "./Store/todo-store";
import { useState } from "react";
const App = () => {
  const [changeCont, setChangeCont] = useState("All");
  const [showPopUp, setShowPopUp] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <UpdateTodo>
        <Heading />
        <UserOptions options={setChangeCont} updatePop={setShowPopUp} />
        <Container>
          {changeCont === "All" ? (
            <AllTasks isChecked={isChecked} setIsChecked={setIsChecked} />
          ) : changeCont === "Complete" ? (
            <CompletedTask isChecked={isChecked} />
          ) : changeCont === "Incomplete" ? (
            <IncompletedTask
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          ) : null}
        </Container>
        {showPopUp === true && <InputField updatePop={setShowPopUp} showPopUp={showPopUp} />}
      </UpdateTodo>
    </>
  );
};
export default App;
