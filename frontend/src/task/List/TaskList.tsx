import React, { useEffect, useState } from 'react'
import { GetTaskResponse, Task } from "../model";
import { getTasks } from "../../api";

type Props = {
  additions: number
}

export const TaskList = ({ additions } : Props) => {
  const [tasks, setTasks] = useState<Task[]>([])
  useEffect(() => {
    getTasks().then(({ data }: GetTaskResponse) => setTasks(data))
  }, [additions])

  return (
    <div>
      <h2>Task list</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </div>
  )
}
