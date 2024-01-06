export type TaskType = { title: string; description: string };

export type WorkspaceConfigType = {
  _id: string;
  name: string;
  description: string;
};

export type BoardConfigType = {
  name: string;
  description: string;
  visibility: "public" | "private";
  workspace: string;
  columns: Array<{ id: number; value: string; order: number }>;
};

export type ColumnType = {
  id: number;
  title: string;
  taskColorClass: string;
  tasks: TaskType[];
};

export type DialogPropType = {
  title: JSX.Element;
  body?: JSX.Element;
  footer: JSX.Element;
};

type DialogCloseActionType = "SUBMIT" | "CANCEL" | "CLOSE";

type CloseDialog = <T>(param: {
  type: DialogCloseActionType;
  data?: T;
}) => void;

export type BaseDialogProps = {
  title: string;
  description?: string;
  closeDialog: CloseDialog;
};

export type DialogType = "CONFIRM" | "CREATE_TASK" | "VIEW_TASK";

export type DialogContextType = {
  isOpen: boolean;
  type: DialogType;
  openDialog: (type: DialogType) => void;
  closeDialog: Function;
};

export type EventNameType = string;

export type PubSubContextType = {
  subscribe?: <T>(
    eventName: EventNameType,
    callback: (data: T) => void
  ) => Function;
  unsubscribe?: <T>(
    eventName: EventNameType,
    callback: Function | null
  ) => void;
  publish?: <T>(eventName: EventNameType, data: T) => void;
};
