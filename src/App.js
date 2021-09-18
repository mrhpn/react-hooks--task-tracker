import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-sm mx-auto my-3">
      <div className="bg-indigo-50 rounded-xl">
        <header className="flex justify-between my-3 p-3">
            <h1 className="font-semibold text-2xl text-indigo-600">Task Tracker</h1>
            <button className="bg-indigo-600 rounded-xl text-white px-2 shadow-lg hover:shadow-none text-xs">Create</button>
          </header>
          <form>
            <div class="mx-3 mb-4">
              <input class="rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskname" type="text" placeholder="Task" />
              <button className="bg-indigo-200 my-3 w-full rounded-lg text-indigo-600 px-3 py-1 text-sm">Create</button>
            </div>
          </form>
      </div>
      <div className="bg-indigo-50 rounded-xl mb-3 px-3 pt-1 pb-3">
        <div className="mt-3 py-3 flex justify-between bg-indigo-500 rounded-xl">
          <span className="text-white px-3 text-sm font-mono tracking-wide">Kanji Homework</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-4 w-4 inline align-middle text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div className="mt-3 py-3 flex justify-between bg-indigo-500 rounded-xl">
          <span className="text-white px-3 text-sm font-mono tracking-wide	">Kanji Homework</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-4 w-4 inline align-middle text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div className="mt-3 py-3 flex justify-between bg-indigo-500 rounded-xl">
          <span className="text-white px-3 text-sm font-mono tracking-wide">Kanji Homework</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-4 w-4 inline align-middle text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="mb-3 px-3">
        <a href="#" className="underline flex justify-center text-xs align-middle">About</a>
      </div>
    </div>
  );
}

export default App;
