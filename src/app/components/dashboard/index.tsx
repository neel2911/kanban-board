"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getAllWorkSpaces } from "@/lib/modules/workspace/reducer";
import { getAllWorkSpacesSelector } from "@/lib/modules/workspace/selector";
import { useEffect, useCallback } from "react";
import Workspaces from "./workspaces";

const Dashboard: React.FC = () => {
  const workspaces = useAppSelector(getAllWorkSpacesSelector);
  const dispatch = useAppDispatch();
  const fetchWorkspaces = useCallback(async () => {
    const res = await fetch("api/workspaces", {
      method: "GET",
    });
    const data = await res.json();
    dispatch(getAllWorkSpaces(data));
  }, [dispatch]);

  useEffect(() => {
    fetchWorkspaces();
  }, [fetchWorkspaces]);

  console.log("workspaces :: ", workspaces);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
      {workspaces.map((workspace) => (
        <Workspaces key={workspace._id} {...workspace} />
      ))}
    </div>
  );
};

export default Dashboard;
