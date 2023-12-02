import BoardColumns from "./board-columns";
import Filters from "./filters";

const KanbanBoard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-8">
        <Filters />
        <div className="max-w-6xl mx-auto flex space-x-4">
          <BoardColumns />
        </div>
      </main>
    </div>
  );
};

export default KanbanBoard;
