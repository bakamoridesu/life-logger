import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, getTasks } from "../api";
import { Task } from "./model";

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })
}

export const useGetTasks = () =>
  useQuery<Task[], Error>(['tasks'], getTasks)
