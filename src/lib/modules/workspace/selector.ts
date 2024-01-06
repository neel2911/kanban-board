import { RootState } from "@/lib/store";
import { reducerSliceName } from "@/lib/modules/workspace/reducer";

export const getAllWorkSpacesSelector = (state: RootState) => {
  return state[reducerSliceName];
};
