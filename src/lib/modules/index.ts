import { combineReducers } from "@reduxjs/toolkit";
import workspace from "@/lib/modules/workspace/reducer";
import kanbanboard from "@/lib/modules/kanbanboard/reducer";

const rootReducer = combineReducers({ workspace, kanbanboard });

export default rootReducer;
