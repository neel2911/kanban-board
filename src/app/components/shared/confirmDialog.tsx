import Dialog from "@/app/components/shared/dialog";
import { useDialog } from "@/app/context/DialogContext";
import { DialogContextType } from "@/app/types";

const BodyEl: React.FC<{ description: string }> = (props) => {
  const { description } = props;
  return <p className="text-sm text-gray-600 mb-6">{description}</p>;
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

const ConfirmDialog: React.FC<{ title: string; description: string }> = (
  props
) => {
  const { isOpen, type, closeDialog } = useDialog();
  const { title = "Title", description = "Are you sure want do delete?" } =
    props;
  return isOpen && type === "CONFIRM" ? (
    <Dialog title={title} footer={<FooterEl closeDialog={closeDialog} />}>
      <BodyEl description={description} />
    </Dialog>
  ) : null;
};

export default ConfirmDialog;
