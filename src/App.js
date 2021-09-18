import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import About from "./components/About";

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

  // fetch a task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    return await res.json();
  };

  const addTask = async (task) => {

    const res = await fetch(
      "http://localhost:5000/tasks", {
      method: 'POST',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify(task)
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE"});
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toogleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const toggledTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(toggledTask)
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: data.reminder } : task
      })
    );
  }

  return (
    <Router>
      <div className="mx-3">
        <div className="max-w-sm mx-auto my-3">
          <div className="bg-indigo-50 rounded">
              <Header addTaskFormVisibility={addTaskForm} onAdd={ () => setAddTaskForm(!addTaskForm) } />
              { addTaskForm && <AddTask onAdd={ addTask } /> }
          </div>

          <Route path="/" exact render={(props) => (
            <>
              <div className="bg-indigo-50 rounded mb-3 px-3 pt-2 pb-3">
                { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toogleReminder} /> : 'No tasks yet!'}
              </div>
            </>
          )} />
          <Route path="/about" component={About} />
          
          <div className="mb-3 px-3">
            <Link to="/about" className="underline flex justify-center text-xs align-middle">About</Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
