"use client";
import CreateTaskDialog from "@/app/components/modals/CreateTaskModal";
import { useDialog } from "@/app/context/DialogContext";

const Filters = () => {
  const { openDialog } = useDialog();
  return (
    <>
      <div className="flex w-full max-w-6xl mx-auto justify-between items-center mb-6">
        <h4 className="text-xl font-bold">Kanban Board</h4>
        <div className="space-x-4">
          <button
            onClick={() => openDialog("CREATE_TASK")}
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
      <CreateTaskDialog
        title="Create Task"
        closeDialog={(data) => {
          console.log(data.data);
        }}
      />
    </>
  );
};

export default Filters;
