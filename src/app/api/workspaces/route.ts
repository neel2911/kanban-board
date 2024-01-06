import { WorkspaceConfigType } from "@/app/types";
import connectDB from "@/mongodb/connection";
import Workspace from "@/mongodb/Models/Workspace";

export const GET = async (req: Request) => {
  await connectDB();
  const workspaces = await Workspace.find();
  return Response.json({ workspaces });
};

export const POST = async (req: Request) => {
  const workspace = await req.json();
  await connectDB();
  const createdWorkspace = await Workspace.create({
    ...workspace,
  });
  return Response.json({ workspace: createdWorkspace });
};
