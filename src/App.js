import { useState, useEffect } from 'react';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    }

    getTasks();
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    return await res.json();
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([newTask, ...tasks]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toogleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task
      })
    );
  }

  return (
    <div className="mx-3">
      <div className="max-w-sm mx-auto my-3">
        <div className="bg-indigo-50 rounded">
            <Header addTaskFormVisibility={addTaskForm} onAdd={ () => setAddTaskForm(!addTaskForm) } />
            { addTaskForm && <AddTask onAdd={ addTask } /> }
        </div>
        <div className="bg-indigo-50 rounded mb-3 px-3 pt-2 pb-3">
          { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toogleReminder} /> : 'No tasks yet!'}
        </div>
        <div className="mb-3 px-3">
          <a href="#" className="underline flex justify-center text-xs align-middle">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;
