import axios from "axios";

const API_URL = "http://localhost:3000/todos";

export const getTodos = () => axios.get(API_URL);

export const createTodo = (todo: {
  title: string;
  description: string;
  date: string;
}) => axios.post(API_URL, todo);

export const updateTodo = (
  id: number,
  todo: { title: string; description: string; date: string }
) => axios.put(`${API_URL}/${id}`, todo);

export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);
