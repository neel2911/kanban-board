import { useState } from "react";

type ConfirmModalStateType =
  | {
      action: "OPEN";
      title?: string;
      description?: string;
      formData: any;
    }
  | { action: "CLOSE" };

export type ConfirmModalStateChangeType = (data: ConfirmModalStateType) => void;

const useConfirmModalConfig = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [formData, setFormData] = useState<any>();
  const onConfirmModalStateChangeHandler = (data: ConfirmModalStateType) => {
    if (data.action === "CLOSE") {
      setIsOpen(false);
      return;
    }
    setTitle(data.title);
    setDescription(data.description);
    setFormData(data.formData);
    setIsOpen(true);
  };

  return {
    isConfirmModalOpen: isOpen,
    onConfirmModalStateChange: onConfirmModalStateChangeHandler,
    confirmModalTitle: title || "Please provide title",
    confirmModalDescription: description || "Please provide description",
    confirmModalFormData: formData,
  };
};

export default useConfirmModalConfig;
