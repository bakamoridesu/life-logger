import React, { useState } from 'react'
import './App.css';

function App() {
  const [taskText, setTaskText] = useState('')
  const handleChange = (e) => {
    setTaskText(e.target.value)
  }
  return (
    <div className="App">
      <h2>Completed task:</h2>
      <textarea name="task" value={taskText} onChange={handleChange}/>
      <button>Submit</button>
    </div>
  );
}

export default App;
