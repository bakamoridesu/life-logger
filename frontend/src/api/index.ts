import axios from 'axios';
const baseURL = 'http://localhost:3000/'

const api = axios.create({
  baseURL,
})

export const getTasks = () =>
  api.get('/tasks')

export const createTask = (content: string) =>
  api.post('/tasks', {content})
