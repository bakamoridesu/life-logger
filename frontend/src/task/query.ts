import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";
import { Task } from "./model";

const getTasks = async () => {
  const { data } = await api.get('/tasks')
  return data
}

export const useGetTasks = () =>
  useQuery<Task[], Error>(['tasks'], getTasks)

const createTask = (content: string) =>
  api.post('/tasks', {content})

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })
}
