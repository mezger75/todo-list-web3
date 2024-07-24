import React, { useState, useEffect } from "react";
import { createTodo, updateTodo } from "../api/todoApi";
import { Todo } from "../types";
import toast, { Toaster } from "react-hot-toast";

interface TodoFormProps {
  fetchTodos: () => void;
  editTodo: Todo | null;
  setEditTodo: (todo: Todo | null) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({
  fetchTodos,
  editTodo,
  setEditTodo,
}) => {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (editTodo) {
      setTodo(editTodo);
    }
  }, [editTodo]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (todo.id) {
        await updateTodo(todo.id, todo);
      } else {
        await createTodo(todo);
      }
      setTodo({ title: "", description: "", date: "" });
      setEditTodo(null);
      fetchTodos();
    } catch (error) {
      toast.error("Failed to save todo");
      console.error("Failed to save todo", error);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="description"
          value={todo.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full rounded"
          required
        ></textarea>
        <input
          type="date"
          name="date"
          value={todo.date}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-gray-950 text-white p-2 rounded hover:bg-gray-900"
        >
          {todo.id ? "Update" : "Add"} Todo
        </button>
      </form>
    </>
  );
};
