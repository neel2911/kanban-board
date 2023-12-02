import { ColumnType } from "@/app/types";
import Column from "./column";

const columns: ColumnType[] = [
  {
    id: 1,
    title: "To Do",
    taskColorClass: "bg-gray-300",
    tasks: [
      { title: "Task 1", description: "Task description 1" },
      { title: "Task 2", description: "Task description 2" },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    taskColorClass: "bg-yellow-300",
    tasks: [
      { title: "Task 1", description: "Task description 1" },
      { title: "Task 2", description: "Task description 2" },
    ],
  },
  {
    id: 3,
    title: "Done",
    taskColorClass: "bg-green-300",
    tasks: [
      { title: "Task 1", description: "Task description 1" },
      { title: "Task 2", description: "Task description 2" },
    ],
  },
];

const BoardColumns = () => {
  return (
    <>
      {columns.map((c) => (
        <Column key={c.id} {...c} />
      ))}
    </>
  );
};

export default BoardColumns;
