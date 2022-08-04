import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import SignIn from "./Components/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardTask from "./Components/CardTask";
import AddTask from "./Components/AddTask";

function App() {
  const notify = () => toast("Please connect!");
  const notifyName = (name) => toast(`Welcome ${name}`);
  const [tasks, setTasks] = useState([
    { id: 22, desc: "doing my homework" },
    { id: 35, desc: "meeting my mom" },
  ]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const [user, setUser] = useState({ email: "", name: "", connected: false });

  useEffect(() => {
    if (!user.connected) {
      notify();
    } else {
      notifyName(user.name);
    }
  }, [user.connected]);

  return (
    <div>
      <ToastContainer />

      {!user.connected && <SignIn user={user} setUser={setUser} />}

      {user.connected && (
        <div style={{ textAlign: "center" }}>
          <AddTask addTask={addTask} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            {tasks.length > 0 ? (
              tasks.map((elt) => (
                <CardTask
                  key={elt.id}
                  task={elt}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))
            ) : (
              <Spinner animation="border" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
