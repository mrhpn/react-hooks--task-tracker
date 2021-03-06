import React from 'react';

const Task = ({ task, onDelete, onDoubleClick }) => {
    return (
        <div className={`${task.reminder ? `border-l-8 border-yellow-400` : ''} mt-3 py-2 flex justify-between bg-indigo-600 rounded-2xl`} onDoubleClick={() => onDoubleClick(task.id)}>
            <span className="text-white px-3 text-xs SFL tracking-wider">{task.text}</span>
            <svg onClick={() => onDelete(task.id)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-4 w-4 inline align-middle text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    );
}

export default Task;
