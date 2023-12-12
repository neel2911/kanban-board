import { TaskType } from "@/app/types";
import React from "react";

const Task: React.FC<TaskType & { taskColorClass: string }> = (props) => {
  const { title, taskColorClass, description } = props;

  return (
    <div className={`${taskColorClass} rounded-md p-3 mb-3`}>
      <h3 className="text-md font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
export default Task;
