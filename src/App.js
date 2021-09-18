import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Kanji Homework',
        },
        {
            id: 2,
            text: 'Vocabulary Homework',
        },
        {
            id: 3,
            text: 'Grammar Homework',
        }
    ]
  );

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="max-w-sm mx-auto my-3">
      <div className="bg-indigo-50 rounded-xl">
          <Header />
          <form>
            <div class="mx-3 mb-4">
              <input class="rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskname" type="text" placeholder="Task" />
              <button className="bg-indigo-200 my-3 w-full rounded-lg text-indigo-600 px-3 py-1 text-sm">Create</button>
            </div>
          </form>
      </div>
      <div className="bg-indigo-50 rounded-xl mb-3 px-3 pt-1 pb-3">
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>
      <div className="mb-3 px-3">
        <a href="#" className="underline flex justify-center text-xs align-middle">About</a>
      </div>
    </div>
  );
}

export default App;
