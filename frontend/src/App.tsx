import React, { ChangeEvent, useState } from 'react'
import './App.css';
import { TaskList } from "./task/List/TaskList";
import { createTask } from "./api";

function App() {
  const [taskText, setTaskText] = useState('')
  const [additions, setAdditions] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskText(e.target.value)
  }

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    setTaskText('')
    createTask(taskText).then(() => setAdditions(additions + 1));
  }

  return (
    <div className="App">
      <TaskList additions={additions}/>
      <h2>new completed task:</h2>
      <textarea name="task" value={taskText} onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
