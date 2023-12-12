"use client";
import Dialog from "@/app/components/shared/dialog";
import { useDialog } from "@/app/context/DialogContext";
import { DialogContextType } from "@/app/types";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
type CreateTaskType = {
  title: string;
  description: string;
};

const onSubmitHandler: SubmitHandler<CreateTaskType> = (formValues) => {
  console.log(formValues);
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

const FooterEl: React.FC<{ closeDialog: DialogContextType["closeDialog"] }> = (
  props
) => {
  const { closeDialog } = props;
  return (
    <>
      <button
        type="button"
        className="bg-red-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-red-600"
        onClick={() => closeDialog()}
      >
        Cancel
      </button>
      <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600">
        Create Task
      </button>
    </>
  );
};

const CreateTaskDialog = () => {
  const { isOpen, type, closeDialog } = useDialog();
  const { handleSubmit, register } = useForm<CreateTaskType>();
  return isOpen && type === "CREATE_TASK" ? (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((data) => {
        onSubmitHandler(data);
        closeDialog();
      })}
    >
      <Dialog
        title="Create New Task"
        footer={<FooterEl closeDialog={closeDialog} />}
      >
        <FormEl register={register} />
      </Dialog>
    </form>
  ) : null;
};

export default CreateTaskDialog;
