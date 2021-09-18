import React from 'react';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Please enter the task.");
            return;
        }

        onAdd({ text, reminder });

        setText('');
        setReminder(false);
    }

    return (
        <form onSubmit={ onSubmit }>
            <div class="mx-3 mb-4">
              <input value={text} onChange={ (e) => setText(e.target.value) } class="rounded-lg border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskname" type="text" placeholder="Task" />
              <input type="submit" value="Create" className="bg-indigo-200 my-3 w-full rounded-lg text-indigo-600 cursor-pointer hover:bg-indigo-500 hover:text-white px-3 py-1 text-sm"/>
            </div>
        </form>
    );
}

export default AddTask;
