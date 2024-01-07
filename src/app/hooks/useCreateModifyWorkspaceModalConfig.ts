import { ModalType, WorkspaceConfigType } from "@/app/types";
import { useState } from "react";

type CreateModifyWorkspaceModalStateType =
  | { action: "CLOSE" }
  | ({ action: "OPEN"; type: ModalType } & (
      | { type: "ADD" }
      | { type: "EDIT"; formData: WorkspaceConfigType }
    ));

export type CreateModifyWorkspaceModalStateChangeType = (
  data: CreateModifyWorkspaceModalStateType
) => void;

const useCreateModifyWorkspaceModalConfig = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>("ADD");
  const [formData, setFormData] = useState<WorkspaceConfigType>();

  const onCreateModifyWorkspaceModalStateChangeHandler = (
    data: CreateModifyWorkspaceModalStateType
  ) => {
    if (data.action === "CLOSE") {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setModalType(data.type);
    if (data.type === "EDIT") {
      setFormData(data.formData);
    }
  };

  return {
    isCreateModifyWorkspaceModalOpen: isOpen,
    modalType,
    createModifyWorkspaceModalFormData: formData,
    onCreateModifyWorkspaceModalStateChange:
      onCreateModifyWorkspaceModalStateChangeHandler,
    createModifyWorkspaceModalTitle:
      modalType === "ADD" ? "Create new workspace" : "Update workspace setting",
  };
};

export default useCreateModifyWorkspaceModalConfig;
