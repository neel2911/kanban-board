"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { DialogContextType, DialogType } from "@/app/types";

const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  type: "CONFIRM",
  openDialog: () => {},
  closeDialog: () => {},
});

const DialogProvider: React.FC<PropsWithChildren> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [type, setType] = useState<DialogType>("CONFIRM");
  const { children } = props;

  const openDialog = (type: DialogType) => {
    setType(type);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <DialogContext.Provider value={{ isOpen, type, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
export const useDialog = () => useContext(DialogContext);
