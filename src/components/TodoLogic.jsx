'use client'
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import TaskItem from './TaskItem';
import TodoForm from './TodoForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoLogic = () => {
  const [isClient, setIsClient] = useState(false);
  const [title, setTitle] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [tasks, setTasks] = useState([]);

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true);
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isClient]);

  // Handle submit of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      toast.warning("Task can't be empty", {
        autoClose: 1000
      });
      return;
    }
    const newTask = {
      title: title,
      completed: false,
      timestamp: Date.now()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setTitle('');
    toast.success("Task added successfully!", {
      autoClose: 1000
    });
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
    toast.error("Task deleted!", {
      autoClose: 1000
    });
  };

  // Edit task
  const editTask = (index, newValue) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        title: newValue
      };
      return updatedTasks;
    });
    toast.success("Task updated successfully!", {
      autoClose: 1000
    });
  };

  // Mark task as completed
  const toggleCheck = (index) => {
    setTasks(prevTasks => prevTasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
    if (tasks[index] && !tasks[index].completed) {
      toast.success("Task completed!", { autoClose: 1000 });
    }
  };

  // Clear all tasks
  const clearAllTasks = () => {
    setTasks([]);
    toast.info("All tasks cleared!", {
      autoClose: 1000
    });
  };

  // Sort tasks
  const handleSort = (option) => {
    setTasks(prevTasks => {
      const sortedTasks = [...prevTasks];
      if (option === 'default') {
        return sortedTasks.sort((a, b) => a.timestamp - b.timestamp);
      } else if (option === 'completed') {
        return sortedTasks.sort((a, b) => b.completed - a.completed);
      }
      return sortedTasks;
    });
  };

  // Update sort option and trigger sort
  useEffect(() => {
    handleSort(sortOption);
  }, [sortOption]);

  return (
    <div className='w-full py-10'>
      <ToastContainer />

      <TodoForm
        handleSubmit={handleSubmit}
        value={title}
        setValue={setTitle}
        btnText="Add"
        place="Add new list item"
      />

      <div className='flex flex-col items-center'>
        {tasks.map((task, index) => (
          <TaskItem
            key={`task-${index}-${task.timestamp}`}
            task={task}
            onDelete={() => deleteTask(index)}
            onEdit={(newValue) => editTask(index, newValue)}
            toggleCheck={() => toggleCheck(index)}
          />
        ))}

        {tasks.length === 0 && (
          <p className='text-zinc-500 text-lg mt-8 font-medium max-sm:mt-8'>
            Start adding tasks to your list!
          </p>
        )}
      </div>

      <Footer tasks={tasks} onClearAll={clearAllTasks} sortOption={sortOption} setSortOption={setSortOption} />
    </div>
  );
};

export default TodoLogic;
