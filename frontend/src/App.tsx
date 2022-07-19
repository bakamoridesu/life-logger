import React from 'react'
import './App.css';
import { TaskList } from "./task/List/TaskList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NewTask } from "./task/New/NewTask";

const queryClient = new QueryClient()
function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <TaskList />
        <NewTask />
      </QueryClientProvider>
    </div>
  );
}

export default App;
