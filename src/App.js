import { useState } from 'react';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Kanji Homework',
            reminder: false
        },
        {
            id: 2,
            text: 'Vocabulary Homework',
            reminder: false
        },
        {
            id: 3,
            text: 'Grammar Homework',
            reminder: false
        }
    ]
  );

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
    <div className="max-w-sm mx-auto my-3">
      <div className="bg-indigo-50 rounded-xl">
          <Header addTaskFormVisibility={addTaskForm} onAdd={ () => setAddTaskForm(!addTaskForm) } />
          { addTaskForm && <AddTask onAdd={ addTask } /> }
      </div>
      <div className="bg-indigo-50 rounded-xl mb-3 px-3 pt-1 pb-3">
        { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toogleReminder} /> : 'No tasks yet!'}
      </div>
      <div className="mb-3 px-3">
        <a href="#" className="underline flex justify-center text-xs align-middle">About</a>
      </div>
    </div>
  );
}

export default App;
