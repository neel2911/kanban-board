import { RootState } from "@/lib/store";
import { globalizedWorkspaceSelectors } from "@/lib/modules/workspace/reducer";

export const getAllWorkSpacesSelector = (state: RootState) =>
  globalizedWorkspaceSelectors.selectAll(state);
