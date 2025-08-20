import { useState } from "react";
import {callCreateAPI, callGetAllAPI} from './BackedAPI'

function Add({ todo, setTodo }) {
  const [formData, setFormData] = useState({
    todoTitle: "",
    dueDate: "",
    status: "pending" 
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      todoId: Date.now().toString(),
      todoTitle: formData.todoTitle,
      dueDate: formData.dueDate,
      status: formData.status
    };

    await callCreateAPI("/create-todo", newTodo);

    // get our todo again
    const todoList = await callGetAllAPI('/read-todos');
    setTodo(todoList);

    setFormData({ todoTitle: "", dueDate: "", status: "pending" });
  }

  return (
    <div>
      <div className="max-w-md w-full bg-black/30 rounded-3xl shadow-2xl p-9 mb-[220px] ml-[630px]">
        <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-lg mb-[30px]">
          Add Task
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="max-w-sm mx-auto">
            <label className="block font-medium mb-2 text-gray-500">Todo Title</label>
            <input
              type="text"
              name="todoTitle"
              value={formData.todoTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-white/30 bg-white/60 text-blue-600 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700 transform transition duration-300 hover:scale-105"
              placeholder="Enter todo title"
              required
            />
          </div>

          <div className="max-w-sm mx-auto">
            <label className="block font-medium mb-2 text-gray-500">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-white/30 bg-white/60 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700 transform transition duration-300 hover:scale-105"
              required
            />
          </div>

          <button
            type="submit"
            className="w-[200px] bg-blue-600 text-white py-2 mx-[90px] rounded-3xl hover:scale-105 hover:bg-blue-800 transform transition duration-300 "
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export { Add };
