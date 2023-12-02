export type TaskType = { title: string; description: string };

export type ColumnType = {
  id: number;
  title: string;
  taskColorClass: string;
  tasks: TaskType[];
};
