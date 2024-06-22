import { useFormik } from "formik";
import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { toast } from "react-toastify";
import * as Yup from "yup";

import { useBeneficiarios } from "../../../../hooks";
import { FormInputGral } from "../../../common";

export function FormNewBeneficiario(props) {

    const { idEmp, parentescos, onClose, onRefetch } = props;
    const { addBeneficiario } = useBeneficiarios()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit: async (formvalue) => {
            try {
                formvalue.id = idEmp
                const response = await addBeneficiario(formvalue)
                await onRefetch()
                onClose()
                toast.success(`Registro de un beneficiario con éxito con id.\n${response.id}`);
            } catch (error) {
                toast.error(`Error en el registro de un beneficiario.\n${error.message}`);

            }
        },
    });


    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row style={{ marginBottom: "20px" }}>
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Nombre."
                    formatoLabel="tituloIzquierda"
                    nameControl="nombre"
                    type="text"
                    placeHolderControl=""
                    valueControl={formik.values.nombre}
                    onChangeControl={formik.handleChange}
                    error={formik.errors.nombre}
                    touched={formik.touched.nombre}
                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Apellido paterno"
                    formatoLabel="tituloIzquierda"
                    nameControl="a_paterno"
                    type="text"
                    placeHolderControl=""
                    valueControl={formik.values.a_paterno}
                    onChangeControl={formik.handleChange}
                    error={formik.errors.a_paterno}
                    touched={formik.touched.a_paterno}
                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Apellido materno"
                    formatoLabel="tituloIzquierda"
                    nameControl="a_materno"
                    type="text"
                    placeHolderControl=""
                    valueControl={formik.values.a_materno}
                    onChangeControl={formik.handleChange}
                    error={formik.errors.a_materno}
                    touched={formik.touched.a_materno}
                />
            </Row>
            <Row style={{ marginBottom: "20px" }}>
                <Form.Group className="col-12 col-sm-6 col-lg-6">
                    <FormInputGral
                        tituloLabel="Parentesco"
                        formatoLabel="tituloIzquierda"
                    />
                    <Form.Select
                        name="parentesco"
                        value={formik.values.parentesco}
                        onChange={formik.handleChange}
                    >
                        <option value={null}>Selecciona una opción</option>
                        {parentescos.map((parentesco, index) => (
                            <option key={index} value={parentesco.id}>
                                {parentesco.descripcion}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {formik.touched.parentesco && formik.errors.parentesco ? (
                            <div className="text-danger">{formik.errors.parentesco}</div>
                        ) : null}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="col-12 col-sm-6 col-lg-6">
                    <div style={{ marginTop: "25px" }}>
                        <center>
                            <Button type="sumbit" variant="light">
                                Guardar
                            </Button>
                        </center>
                    </div>
                </Form.Group>
            </Row>

        </Form>
    )
}


function initialValues() {
    return {
        nombre: "",
        a_paterno: "",
        a_materno: "",
        parentesco: "",
    };
}
function newSchema() {
    return {
        nombre: Yup.string("El nombre no puede estar vacío").required("El nombre es requerido"),
        a_paterno: Yup.string("El apellido paterno no debe estar vacio").required("El apellido paterno es requerido"),
        parentesco: Yup.string("El parentesco no debe estar vacio").required("El parentesco es requerido"),
    };
}