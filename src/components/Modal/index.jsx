import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const ref = useRef();
  if (!ref.current) {
    ref.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(ref.current);
    return () => modalRoot.removeChild(ref.current);
  }, []);

  return createPortal(<div>{children}</div>, ref.current);
};

export default Modal;
