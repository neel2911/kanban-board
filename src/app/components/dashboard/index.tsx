"use client";
import { useAppSelector } from "@/lib/hooks";
import Category from "@/app/components/dashboard/category";
import { getAllWorkSpacesSelector } from "@/lib/modules/workspace/selector";
import useGetWorkspaces from "@/app/hooks/useGetWorkspaces";

const Dashboard: React.FC = () => {
  const workspaces = useAppSelector(getAllWorkSpacesSelector);

  useGetWorkspaces();
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
      {workspaces.map((workspace) => (
        <Category key={workspace._id} {...workspace} />
      ))}
    </div>
  );
};

export default Dashboard;
