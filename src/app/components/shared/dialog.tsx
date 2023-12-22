import { DialogPropType } from "@/app/types";
import React, { PropsWithChildren } from "react";

const Dialog: React.FC<PropsWithChildren<DialogPropType>> = (props) => {
  const { title, body, footer, children } = props;
  return (
    <div className="dialog-backdrop fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="dialog bg-white rounded-md p-6 w-96">
        <div className="dialog-title flex justify-between items-center mb-4">
          {title}
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
