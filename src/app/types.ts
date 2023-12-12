import { ReactElement } from "react";

export type TaskType = { title: string; description: string };

export type ColumnType = {
  id: number;
  title: string;
  taskColorClass: string;
  tasks: TaskType[];
};

export type Dialog = {
  title: string;
  body?: JSX.Element;
  footer: JSX.Element;
};

export type DialogType = "CONFIRM" | "CREATE_TASK" | "VIEW_TASK";

export type DialogContextType = {
  isOpen: boolean;
  type: DialogType;
  openDialog: (type: DialogType) => void;
  closeDialog: Function;
};
