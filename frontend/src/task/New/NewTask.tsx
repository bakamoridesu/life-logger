import React, { ChangeEvent, useState } from 'react'
import { useCreateTask } from "../query";

export const NewTask = () => {
  const createTaskMutation = useCreateTask()
  const [taskText, setTaskText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskText(e.target.value)
  }

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    setTaskText('')
    createTaskMutation.mutate(taskText)
  }

  return (
    <div>
      <h2>new completed task:</h2>
      <textarea name="task" value={taskText} onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
