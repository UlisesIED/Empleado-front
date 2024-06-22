import React, { useRef } from "react";
import { Form } from "react-bootstrap";

import "./FormInputGral.css";

export function FormInputGral(props) {
  const {
    col,
    tituloLabel,
    formatoLabel,
    nameControl,
    type,
    placeHolderControl,
    valueControl,
    onChangeControl,
    rows,
    error,
    touched,
    disabled,
    size,
    accept,
    ref,
  } = props;

  function formularioConColsRowsYnameControl() {
    return (
      <Form.Group className={col}>
        <Form.Label className={formatoLabel}>{tituloLabel}</Form.Label>
        <Form.Control
          name={nameControl}
          type={type}
          as="textarea"
          placeholder={placeHolderControl}
          rows={rows}
          value={valueControl}
          onChange={onChangeControl}
          disabled={disabled}
          ref={ref}
        />
        <Form.Text className="text-danger">
          {touched && error ? <div className="text-danger">{error}</div> : null}
        </Form.Text>
      </Form.Group>
    );
  }

  function formularioConColsYnameControl() {
    return (
      <Form.Group className={col}>
        <Form.Label className={formatoLabel}>{tituloLabel}</Form.Label>
        <Form.Control
          name={nameControl}
          type={type}
          placeholder={placeHolderControl}
          value={valueControl}
          onChange={onChangeControl}
          disabled={disabled}
          size={size}
          accept={accept}
          ref={ref}
        />
        <Form.Text className="text-danger">
          {touched && error ? <div className="text-danger">{error}</div> : null}
        </Form.Text>
      </Form.Group>
    );
  }
  function formularioConCols() {
    return (
      <Form.Group className={col}>
        <Form.Label className={formatoLabel}>{tituloLabel}</Form.Label>
      </Form.Group>
    );
  }

  function formularioRowsYnameControl() {
    return (
      <Form.Group>
        <Form.Label className={formatoLabel}>{tituloLabel}</Form.Label>
        <Form.Control
          name={nameControl}
          type={type}
          as="textarea"
          placeholder={placeHolderControl}
          rows={rows}
          value={valueControl}
          onChange={onChangeControl}
          disabled={disabled}
          ref={ref}
        />
        <Form.Text className="text-danger">
          {touched && error ? <div className="text-danger">{error}</div> : null}
        </Form.Text>
      </Form.Group>
    );
  }

  function formularioConNameControl() {
    return (
      <Form.Group>
        <Form.Label className={formatoLabel}>{tituloLabel}</Form.Label>
        <Form.Control
          name={nameControl}
          type={type}
          placeholder={placeHolderControl}
          value={valueControl}
          onChange={onChangeControl}
          disabled={disabled}
          ref={ref}
        />
        <Form.Text className="text-danger">
          {touched && error ? <div className="text-danger">{error}</div> : null}
        </Form.Text>
      </Form.Group>
    );
  }
  function formulario() {
    return (
      <Form.Group>
        <Form.Label className={formatoLabel}>{tituloLabel}</Form.Label>
      </Form.Group>
    );
  }

  if (col)
    if (nameControl)
      if (rows) return formularioConColsRowsYnameControl();
      else return formularioConColsYnameControl();
    else return formularioConCols();
  else if (nameControl)
    if (rows) return formularioRowsYnameControl();
    else return formularioConNameControl();
  else return formulario();
}
