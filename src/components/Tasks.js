import { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const Tasks = ({ onDelete }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Add task
  const addTask = (task) => {
    console.log(task);
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      <AddTask onAdd={addTask} />
      {tasks.length > 0
        ? tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ))
        : "No Tasks To Show"}
    </>
  );
};

export default Tasks;
