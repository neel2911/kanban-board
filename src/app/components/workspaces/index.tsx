"use client";
import useGetWorkspaces from "@/app/hooks/useGetWorkspaces";
import { ModalType, Param, WorkspaceConfigType } from "@/app/types";
import { useAppSelector } from "@/lib/hooks";
import { getAllWorkSpacesSelector } from "@/lib/modules/workspace/selector";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import CreateModifyWorkspaceDialog from "@/app/components/modals/CreateModifyWorkspaceModal";
import useCreateModifyWorkspaceModalConfig from "@/app/hooks/useCreateModifyWorkspaceModalConfig";
import columns from "@/app/components/workspaces/columns";
import useConfirmModalConfig from "@/app/hooks/useConfirmModalConfig";
import ConfirmDialog from "../modals/ConfirmModal";

const onSubmitHandler = async (
  type: ModalType,
  formValues: WorkspaceConfigType
) => {
  const apiPath =
    type === "ADD" ? "api/workspaces" : `api/workspaces/${formValues._id}`;
  const res = await fetch(apiPath, {
    method: "POST",
    body: JSON.stringify(formValues),
  });

  console.log(res);
};

const onDeleteHandler = async (formValues: WorkspaceConfigType) => {
  console.log("formValues :: ", formValues);
  const res = await fetch(`api/workspaces/${formValues._id}`, {
    method: "DELETE",
  });

  console.log(res);
};

const Workspaces: React.FC = () => {
  const workspaces = useAppSelector(getAllWorkSpacesSelector);

  const {
    isCreateModifyWorkspaceModalOpen,
    createModifyWorkspaceModalFormData,
    modalType,
    onCreateModifyWorkspaceModalStateChange,
    createModifyWorkspaceModalTitle,
  } = useCreateModifyWorkspaceModalConfig();

  const {
    isConfirmModalOpen,
    confirmModalTitle,
    confirmModalDescription,
    onConfirmModalStateChange,
    confirmModalFormData,
  } = useConfirmModalConfig();

  useGetWorkspaces();
  const table = useReactTable({
    data: workspaces,
    columns: columns(
      onCreateModifyWorkspaceModalStateChange,
      onConfirmModalStateChange
    ),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <div className="flex items-center justify-end mb-4">
        <input
          type="text"
          id="search"
          placeholder="Search..."
          className="border mx-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <button
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
          onClick={() =>
            onCreateModifyWorkspaceModalStateChange({
              action: "OPEN",
              type: "ADD",
            })
          }
        >
          + Add Workspace
        </button>
      </div>
      <table className="min-w-full bg-white border-collapse shadow-md">
        <thead className="bg-gray-50 border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-4 px-6 text-sm font-medium text-gray-900"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isCreateModifyWorkspaceModalOpen && (
        <CreateModifyWorkspaceDialog
          title={createModifyWorkspaceModalTitle}
          type={modalType}
          data={createModifyWorkspaceModalFormData}
          closeDialog={(action) => {
            if (action.type === "SUBMIT") {
              onSubmitHandler(modalType, action.data as WorkspaceConfigType);
            }
            onCreateModifyWorkspaceModalStateChange({ action: "CLOSE" });
          }}
        />
      )}
      {isConfirmModalOpen && (
        <ConfirmDialog
          title={confirmModalTitle}
          description={confirmModalDescription}
          data={confirmModalFormData}
          closeDialog={(action) => {
            if (action.type === "SUBMIT") {
              onDeleteHandler(action.data as WorkspaceConfigType);
            }
            onConfirmModalStateChange({ action: "CLOSE" });
          }}
        />
      )}
    </div>
  );
};
export default Workspaces;
