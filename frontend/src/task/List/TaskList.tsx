import React from 'react'
import { useGetTasks } from "../query";

export const TaskList = () => {
  const { isLoading, isError, data, error } = useGetTasks()
  return (
    <div>
      <h2>Task list</h2>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        <ul>
          {data && data.map((task) => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
