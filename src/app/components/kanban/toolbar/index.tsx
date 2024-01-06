"use client";
import CreateTaskDialog from "@/app/components/modals/CreateTaskModal";
import { useState } from "react";

const Filters = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex w-full max-w-6xl mx-auto justify-between items-center mb-6">
        <h4 className="text-xl font-bold">Kanban Board</h4>
        <div className="space-x-4">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          >
            Add Task
          </button>
          <input
            type="text"
            id="boardName"
            placeholder="Search Task"
            className="border border-gray-300 rounded-md px-2 py-2 flex-1"
          />
        </div>
      </div>
      {isOpen && (
        <CreateTaskDialog
          title="Create Task"
          closeDialog={(data) => {
            console.log(data);
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Filters;
