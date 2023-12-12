import BoardColumns from "./board-columns";
import Filters from "@/app/components/kanban/toolbar";
import Dialog from "@/app/components/shared/dialog";

const KanbanBoard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-8">
        <Filters />
        <div className="max-w-6xl mx-auto flex space-x-4">
          <BoardColumns />
        </div>
        {/* <Dialog /> */}
      </main>
    </div>
  );
};

export default KanbanBoard;
