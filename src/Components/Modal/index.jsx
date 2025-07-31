import React from "react";

import {
  overlay,
  modal,
  modalHeader,
  modalTitle,
  modalClose,
  modalContent
} from "./style.js";

const Modal = ({ onClose = () => {}, title, children }) => {
  return (
    <div css={overlay} onClick={onClose}>
      <div css={modal} onClick={(e) => e.stopPropagation()}>
        <div css={modalHeader}>
          {title && <h2 css={modalTitle}>{title}</h2>}
          <button css={modalClose} onClick={onClose}>
            x
          </button>
        </div>
        <div css={modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
