import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import About from "./About";
import { getTasks, addTask, deleteTask, toggleReminder } from "./controllers";

const Main = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  const addTaskHandler = (task) => {
    addTask(task, setTasks, tasks);
  };
  const deleteHandler = (id) => {
    deleteTask(id, setTasks, tasks);
  };

  const toggleReminderHandler = (id) => {
    toggleReminder(id, setTasks, tasks);
  };
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTaskHandler} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteHandler}
                    onToggle={toggleReminderHandler}
                  />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
