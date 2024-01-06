import { WorkspaceConfigType } from "@/app/types";

const Workspaces: React.FC<WorkspaceConfigType> = (props) => {
  const { _id, description, name } = props;
  return (
    <div className="bg-gray-200 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Workspaces;
