import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {

    return (
        <>
          {
              tasks.map(task => <Task task={task} onDelete={onDelete} onDoubleClick={onDoubleClick} />)
          }  
        </>
    );
}

export default Tasks;
