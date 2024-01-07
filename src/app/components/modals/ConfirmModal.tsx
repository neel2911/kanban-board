import Dialog from "@/app/components/shared/Dialog";
import { BaseDialogProps } from "@/app/types";

const BodyEl: React.FC<{ description: string }> = (props) => {
  const { description } = props;
  return <p className="text-sm text-gray-600 mb-6">{description}</p>;
};

const TitleEl: React.FC<{
  title: string;
  closeDialog: BaseDialogProps["closeDialog"];
}> = (props) => {
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

const FooterEl: React.FC<{
  closeDialog: BaseDialogProps["closeDialog"];
  data: any;
}> = (props) => {
  const { closeDialog, data } = props;
  return (
    <>
      <button
        onClick={() => closeDialog<boolean>({ type: "SUBMIT", data })}
        className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 mr-2"
      >
        Confirm
      </button>
      <button
        onClick={() => closeDialog<boolean>({ type: "CANCEL" })}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Cancel
      </button>
    </>
  );
};

const ConfirmDialog: React.FC<BaseDialogProps & { data: any }> = (props) => {
  const {
    title = "Delete",
    description = "Are you sure want do delete?",
    closeDialog,
    data,
  } = props;
  return (
    <Dialog
      title={<TitleEl title={title} closeDialog={closeDialog} />}
      footer={<FooterEl closeDialog={closeDialog} data={data} />}
    >
      <BodyEl description={description} />
    </Dialog>
  );
};

export default ConfirmDialog;
