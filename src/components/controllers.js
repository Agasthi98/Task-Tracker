//Fetch Tasks
export const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks", {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export const getTasks = async (setTasks) => {
  const tasksFromServer = await fetchTasks();
  setTasks(tasksFromServer);
};
//Fetch Tasks by Id
export const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

//Add task
export const addTask = async (task, setTasks, tasks) => {
  const res = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();
  setTasks([...tasks, data]);
};

//Delete task
export const deleteTask = async (id, setTasks, tasks) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });
  setTasks(tasks.filter((task) => task.id !== id));
};

//Toggle Reminder
export const toggleReminder = async (id, setTasks, tasks) => {
  const taskToToggle = await fetchTask(id);
  const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updateTask),
  });

  const data = await res.json();
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  );
};
