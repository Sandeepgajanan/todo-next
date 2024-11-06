'use client'
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

const TaskItem = ({
  task,
  onDelete,
  onEdit,
  toggleCheck
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.warning("Task can't be empty", {
        autoClose: 1000
      });
      return;
    }
    onEdit(value);
    setIsEditing(false);
  };

  return (
    <div className="w-1/2 max-sm:w-full max-sm:px-4 max-sm:mt-4">
      <div className="w-full flex items-center justify-between p-4 mb-4 rounded-lg shadow-sm shadow-zinc-200/90">
        <div className="flex items-center gap-3 w-[90%] group">
          <button
            onClick={toggleCheck}
            className={`flex justify-center items-center w-6 h-6 px-1 rounded-full border border-zinc-400 transition-colors max-sm:w-4 max-sm:h-4 ${task.completed ? 'bg-green-400 border-none' : ''}`}
          >
            {task.completed && <MdOutlineDone className="text-white text-lg" />}
          </button>

          <div className={`w-full ${isEditing && 'px-2 pt-6 '}`}>
            {isEditing ? (
              <TodoForm
                handleSubmit={handleSubmit}
                value={value}
                setValue={setValue}
                w="w-full"
              />
            ) : (
              <h2
                onClick={toggleCheck}
                className={`text-lg font-medium cursor-pointer capitalize max-sm:text-sm ${task.completed
                    ? 'text-zinc-400 line-through'
                    : 'text-zinc-600 group-hover:text-blue-500'
                  }`}
              >
                {task.title}
              </h2>
            )}
          </div>
        </div>

        <div className="flex gap-3 text-zinc-500">
          <button onClick={() => setIsEditing(!isEditing)}>
            <MdOutlineEdit className="cursor-pointer hover:text-blue-500 " />
          </button>
          <button onClick={onDelete}>
            <RiDeleteBin6Line className="cursor-pointer hover:text-red-500 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
