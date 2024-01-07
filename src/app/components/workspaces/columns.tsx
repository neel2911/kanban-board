import { createColumnHelper } from "@tanstack/react-table";
import { CreateModifyWorkspaceModalStateChangeType } from "@/app/hooks/useCreateModifyWorkspaceModalConfig";
import { WorkspaceConfigType } from "@/app/types";
import { ConfirmModalStateChangeType } from "@/app/hooks/useConfirmModalConfig";

const columnHelper = createColumnHelper<WorkspaceConfigType>();

export const columns = (
  onCreateModifyWorkspaceModalStateChange: CreateModifyWorkspaceModalStateChangeType,
  onConfirmModalStateChange: ConfirmModalStateChangeType
) => [
  columnHelper.accessor((row) => row.name, {
    id: "name",
    header: () => <span>Name</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.description, {
    id: "description",
    header: () => "Description",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("_id", {
    header: "",
    cell: (info) => (
      <div className="flex items-center justify-end space-x-4">
        <button
          className="text-indigo-600 hover:text-indigo-900"
          onClick={() =>
            onCreateModifyWorkspaceModalStateChange({
              action: "OPEN",
              type: "EDIT",
              formData: info.row.original,
            })
          }
        >
          Edit
        </button>
        <button
          className="text-red-600 hover:text-red-900"
          onClick={() => {
            onConfirmModalStateChange({
              action: "OPEN",
              title: `Delete ${info.row.original.name}`,
              description: `Are you sure want to delete ${info.row.original.name}?`,
              formData: info.row.original,
            });
          }}
        >
          Delete
        </button>
      </div>
    ),
  }),
];

export default columns;
