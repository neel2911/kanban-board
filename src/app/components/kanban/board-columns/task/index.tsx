import { TaskType } from "@/app/types";
import React from "react";

const Task: React.FC<TaskType & { taskColorClass: string }> = (props) => {
  const { title, taskColorClass } = props;
  return <div className={`${taskColorClass} p-3 rounded-md mb-2`}>{title}</div>;
};
export default Task;
