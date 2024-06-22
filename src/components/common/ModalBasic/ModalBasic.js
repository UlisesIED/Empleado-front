import React from "react";
import { Modal } from "react-bootstrap";
import "./ModalBasic.css";

export function ModalBasic(props) {
  const { show, size, title, children, onClose } = props;

  return (
    <Modal className="model-basic" show={show} onHide={onClose} size={size}>
      {title && (
        <Modal.Header closeButton>
          {title}
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}