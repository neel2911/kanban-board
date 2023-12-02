import { ColumnType } from "@/app/types";
import Task from "./task";

const Column: React.FC<ColumnType> = (props) => {
  const { taskColorClass, tasks, title } = props;
  return (
    <section className="flex-1 bg-gray-200 rounded-md overflow-hidden">
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {tasks.map((t) => (
          <Task key={t.title} {...t} taskColorClass={taskColorClass} />
        ))}
      </div>
    </section>
  );
};

export default Column;
