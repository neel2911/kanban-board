import { WorkspaceConfigType } from "@/app/types";
import mongoose from "mongoose";
const { Schema } = mongoose;
const workspaceSchema = new Schema<WorkspaceConfigType>({
  name: { type: String },
  description: { type: String },
});

const workspace =
  mongoose.models.WorkspaceModal ||
  mongoose.model("WorkspaceModal", workspaceSchema, "workspaces");
export default workspace;
