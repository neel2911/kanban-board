import { WorkspaceConfigType } from "@/app/types";
import { RootState } from "@/lib/store";
import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

export const reducerSliceName = "workspace";

const workspaceAdapter = createEntityAdapter({
  selectId: (workspace: WorkspaceConfigType) => workspace._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const workspaceSlice = createSlice({
  name: reducerSliceName,
  initialState: workspaceAdapter.getInitialState(),
  reducers: {
    addWorkspace: (
      state,
      action: PayloadAction<{ workspace: WorkspaceConfigType }>
    ) => {
      const {
        payload: { workspace },
      } = action;
      console.log("payload", workspace);
      workspaceAdapter.addOne(state, workspace);
    },
    updateWorkspace: (
      state,
      action: PayloadAction<{ workspace: WorkspaceConfigType }>
    ) => {
      const {
        payload: { workspace },
      } = action;

      workspaceAdapter.updateOne(state, {
        id: workspace._id,
        changes: workspace,
      });
    },
    deleteWorkspace: (
      state,
      action: PayloadAction<{ workspace: WorkspaceConfigType }>
    ) => {
      const {
        payload: {
          workspace: { _id },
        },
      } = action;
      workspaceAdapter.removeOne(state, _id);
    },
    getAllWorkSpaces: workspaceAdapter.setMany,
  },
});

export const {
  addWorkspace,
  deleteWorkspace,
  getAllWorkSpaces,
  updateWorkspace,
} = workspaceSlice.actions;

export const globalizedWorkspaceSelectors = workspaceAdapter.getSelectors(
  (state: RootState) => state[reducerSliceName]
);

export default workspaceSlice.reducer;
