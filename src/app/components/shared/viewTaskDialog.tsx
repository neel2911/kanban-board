import Dialog from "@/app/components/shared/dialog";
import { useDialog } from "@/app/context/DialogContext";
import { DialogContextType } from "@/app/types";

const BodyEl: React.FC<{ title: string; description: string }> = (props) => {
  const { title, description } = props;
  return (
    <>
      <h1>{title}</h1>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
    </>
  );
};

const FooterEl: React.FC<{
  closeDialog: DialogContextType["closeDialog"];
}> = (props) => {
  const { closeDialog } = props;
  return (
    <>
      <button
        onClick={() => closeDialog()}
        className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 mr-2"
      >
        Confirm
      </button>
      <button
        onClick={() => closeDialog()}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Cancel
      </button>
    </>
  );
};

const ViewTaskDialog: React.FC<{ title: string; description: string }> = (
  props
) => {
  const { isOpen, type, closeDialog } = useDialog();
  const { title, description } = props;
  return isOpen && type === "VIEW_TASK" ? (
    <Dialog title="View task" footer={<FooterEl closeDialog={closeDialog} />}>
      <BodyEl title={title} description={description} />
    </Dialog>
  ) : null;
};

export default ViewTaskDialog;
