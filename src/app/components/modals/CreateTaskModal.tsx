"use client";
import Dialog from "@/app/components/shared/Dialog";
import { BaseDialogProps } from "@/app/types";
import { useForm, UseFormRegister } from "react-hook-form";
export type CreateTaskType = {
  title: string;
  description: string;
};

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

const FormEl: React.FC<{ register: UseFormRegister<CreateTaskType> }> = (
  props
) => {
  const { register } = props;
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="taskTitle">Task Title</label>
        <input
          id="taskTitle"
          className="border border-gray-300 rounded-md px-2 py-1"
          {...register("title")}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="taskDescription">Task Description</label>
        <textarea
          id="taskDescription"
          className="border border-gray-300 rounded-md px-2 py-1"
          rows={3}
          {...register("description")}
        ></textarea>
      </div>
    </>
  );
};

const FooterEl: React.FC<{
  closeDialog: BaseDialogProps["closeDialog"];
}> = (props) => {
  const { closeDialog } = props;
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
        Create Task
      </button>
    </>
  );
};

const CreateTaskDialog: React.FC<BaseDialogProps> = (props) => {
  const { title, closeDialog } = props;
  const { handleSubmit, register } = useForm<CreateTaskType>();

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((data) => {
        closeDialog<CreateTaskType>({
          type: "SUBMIT",
          data,
        });
      })}
    >
      <Dialog
        title={<TitleEl title={title} closeDialog={closeDialog}></TitleEl>}
        footer={<FooterEl closeDialog={closeDialog} />}
      >
        <FormEl register={register} />
      </Dialog>
    </form>
  );
};

export default CreateTaskDialog;
