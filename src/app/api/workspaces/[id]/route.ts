import connectDB from "@/mongodb/connection";
import Workspace from "@/mongodb/Models/Workspace";

type ParamType = { params: { id: string } };

export const GET = async (req: Request, { params }: ParamType) => {
  await connectDB();
  const workspace = await Workspace.findOne({ id: params.id });
  return Response.json({ workspace });
};

export const PUT = async (req: Request, { params }: ParamType) => {
  const workspace = await req.json();
  await connectDB();
  const updatedWorkspace = await Workspace.findByIdAndUpdate(
    { _id: params.id },
    {
      ...workspace,
    },
    {
      new: true,
    }
  );
  return Response.json({ workspace: updatedWorkspace });
};

export const DELETE = async (req: Request, { params }: ParamType) => {
  await connectDB();

  const deletedWorkspace = await Workspace.findByIdAndDelete({
    _id: params.id,
  });

  return Response.json({ workspace: deletedWorkspace });
};
