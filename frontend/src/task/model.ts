export type Task = {
  id: string
  content: string
}

export type GetTaskResponse = {
  data: Task[]
}
