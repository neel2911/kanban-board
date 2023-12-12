import { useDialog } from "@/app/context/DialogContext";
import { Dialog } from "@/app/types";
import React from "react";

const Dialog: React.FC<Dialog & { children?: React.ReactElement }> = (
  props
) => {
  const { closeDialog } = useDialog();
  const { title, body, footer, children } = props;
  return (
    <div className="dialog-backdrop fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="dialog bg-white rounded-md p-6 w-96">
        <div className="dialog-title flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => closeDialog()}
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
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="dialog-body text-sm text-gray-600 mb-6">
          {children || body}
        </div>
        <div className="dialog-footer flex justify-end">{footer}</div>
      </div>
    </div>
  );
};

export default Dialog;
