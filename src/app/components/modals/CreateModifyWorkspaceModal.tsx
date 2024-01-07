"use client";
import Dialog from "@/app/components/shared/Dialog";
import { BaseDialogProps, ModalType, WorkspaceConfigType } from "@/app/types";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

const TitleEl: React.FC<BaseDialogProps> = (props) => {
  const { title, closeDialog } = props;
  return (
    <>
      <h2 className="text-lg font-semibold">{title}</h2>
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={() => closeDialog({ type: "CLOSE" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

const FormEl: React.FC<{ register: UseFormRegister<WorkspaceConfigType> }> = (
  props
) => {
  const { register } = props;
  return (
    <>
      <div className="flex items-center">
        <label htmlFor="workspaceName" className="w-36">
          Name:
        </label>
        <input
          id="workspaceName"
          className="border border-gray-300 rounded-md px-2 py-1 flex-1 mb-1"
          {...register("name")}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="workspaceDesc" className="w-36">
          Description:
        </label>
        <textarea
          id="workspaceDesc"
          className="border border-gray-300 rounded-md px-2 py-1 flex-1 mt-1"
          rows={3}
          {...register("description")}
        ></textarea>
      </div>
    </>
  );
};

const FooterEl: React.FC<{
  type: ModalType;
  closeDialog: BaseDialogProps["closeDialog"];
}> = (props) => {
  const { type, closeDialog } = props;
  return (
    <>
      <button
        type="button"
        className="bg-red-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-red-600"
        onClick={() =>
          closeDialog({
            type: "CANCEL",
          })
        }
      >
        Cancel
      </button>
      <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600">
        {type === "EDIT" ? "Update" : "Create"}
      </button>
    </>
  );
};

const CreateModifyWorkspaceDialog: React.FC<
  BaseDialogProps & { type: ModalType; data?: WorkspaceConfigType }
> = (props) => {
  const { title, closeDialog, type } = props;
  const { handleSubmit, register } = useForm<WorkspaceConfigType>({
    ...(type === "EDIT" && { defaultValues: props.data }),
  });
  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((data) => {
        closeDialog<WorkspaceConfigType>({
          type: "SUBMIT",
          data,
        });
      })}
    >
      <Dialog
        title={<TitleEl title={title} closeDialog={closeDialog} />}
        footer={<FooterEl type={type} closeDialog={closeDialog} />}
      >
        <FormEl register={register} />
      </Dialog>
    </form>
  );
};

export default CreateModifyWorkspaceDialog;
