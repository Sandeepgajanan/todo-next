'use client'
import React from 'react';

const TodoForm = ({
  handleSubmit,
  value,
  setValue,
  btnText = "Save",
  place = "Edit the task",
  w = "w-1/2"
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex justify-center w-full mb-8 max-sm:px-4">
      <div className={`flex justify-between border p-1 border-zinc-200/80 rounded-lg max-sm:w-full ${w}`}>
        <input
          type="text"
          name="title"
          id="title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-2 outline-none text-zinc-600 w-[80%] placeholder:text-zinc-500 text-lg max-sm:text-sm placeholder:opacity-50 max-sm:p-1"
          autoComplete="off"
          required
          placeholder={place}
        />
        <button
          type="submit"
          className="px-7 py-2 bg-blue-500/90 hover:bg-blue-600 text-lg  text-white rounded-md transition-colors max-sm:px-4 max-sm:py-2 max-sm:text-sm"
        >
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
