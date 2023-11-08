import { useState } from "react";
import Task from "./Task";

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

  //delete task
  const deleteTask = (id) => {
    console.log("delete", id);
  };
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </>
  );
};

export default Tasks;
