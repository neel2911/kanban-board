import { WorkspaceConfigType } from "@/app/types";
import {
  type Action,
  ActionCreator,
  createSlice,
  ActionCreatorWithPayload,
  PayloadAction,
} from "@reduxjs/toolkit";

export const reducerSliceName = "workspace";
export type State = WorkspaceConfigType;

const initialState: State[] = [];

const workspaceSlice = createSlice({
  name: reducerSliceName,
  initialState: initialState,
  reducers: {
    addWorkspace: (state, action) => {
      return state;
    },
    deleteWorkspace: (state, action) => {
      return state;
    },
    getWorkSpace: (state, action) => {
      return state;
    },
    getAllWorkSpaces: (
      state,
      action: PayloadAction<{ workspaces: WorkspaceConfigType[] }>
    ) => {
      const { payload } = action;
      state = payload.workspaces;
      return state;
    },
  },
});

export const { addWorkspace, deleteWorkspace, getWorkSpace, getAllWorkSpaces } =
  workspaceSlice.actions;

export default workspaceSlice.reducer;
