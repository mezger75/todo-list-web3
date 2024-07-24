import React, { useEffect, useState } from "react";
import { getTodos, deleteTodo } from "../api/todoApi";
import { TodoForm } from "./TodoForm";
import { Todo } from "../types";
import toast, { Toaster } from "react-hot-toast";

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      toast.error("Failed to fetch todos");
      console.error("Failed to fetch todos", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      toast.error("Failed to delete todo");
      console.error("Failed to delete todo", error);
    }
  };

  return (
    <main className="pb-4 m-auto w-full lg:w-1/2">
      <Toaster />
      <TodoForm
        fetchTodos={fetchTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border p-2 my-2 rounded text-white flex justify-between"
          >
            <div>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p>{todo.date}</p>
            </div>
            <div className="flex flex-col justify-between">
              <button
                onClick={() => todo.id !== undefined && handleDelete(todo.id)}
                className="bg-gray-950 text-white p-1 rounded hover:bg-gray-900"
              >
                Delete
              </button>
              <button
                onClick={() => setEditTodo(todo)}
                className="bg-gray-950 text-white p-1 rounded hover:bg-gray-900"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
