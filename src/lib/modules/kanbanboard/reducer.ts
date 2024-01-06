import { BoardConfigType } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

type State = {
  items: BoardConfigType[];
};

const initialState: State = {
  items: [],
};

const kanbanBoardSlice = createSlice({
  name: "kanbanboard",
  initialState: initialState,
  reducers: {
    getAllKanbanBoards: (state, action) => {
      return state;
    },
    addKanbanBoard: (state, action) => {
      return state;
    },
    removeKanbanBoard: (state, action) => {
      return state;
    },
  },
});

export const { getAllKanbanBoards, addKanbanBoard, removeKanbanBoard } =
  kanbanBoardSlice.actions;

export default kanbanBoardSlice.reducer;
