const Filters = () => {
  return (
    <div className="flex w-full max-w-6xl mx-auto justify-between items-center mb-6">
      <h4 className="text-xl font-bold">Kanban Board</h4>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
          Add Task
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filters