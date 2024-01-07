import { useAppDispatch } from "@/lib/hooks";
import { getAllWorkSpaces } from "@/lib/modules/workspace/reducer";
import { useCallback, useEffect } from "react";

const useGetWorkspaces = () => {
  const dispatch = useAppDispatch();
  const fetchWorkspaces = useCallback(async () => {
    const res = await fetch("api/workspaces", {
      method: "GET",
    });
    const data = await res.json();
    const { workspaces } = data;
    dispatch(getAllWorkSpaces(workspaces));
  }, [dispatch]);

  useEffect(() => {
    fetchWorkspaces();
  }, [fetchWorkspaces]);
};
export default useGetWorkspaces;
