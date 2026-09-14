import Popup from "reactjs-popup";
import { PopupProps } from "reactjs-popup/dist/types";
import { ReactNode } from "react";
import "./Popup.css";

interface PopUpWrapperProps extends Omit<PopupProps, "children"> {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

function PopUpWrapper({
  open = false,
  children,
  onClose,
  className,
  ...rest
}: PopUpWrapperProps) {
  return (
    <Popup open={open} closeOnDocumentClick onClose={onClose} {...rest}>
      <div className="modal border border-gray-600 rounded-md">{children}</div>
    </Popup>
  );
}

export default PopUpWrapper;
