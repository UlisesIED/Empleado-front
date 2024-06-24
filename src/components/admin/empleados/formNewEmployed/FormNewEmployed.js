import { useFormik } from "formik";
import React from 'react';
import { Button, Form, Image, Row } from 'react-bootstrap';
import { toast } from "react-toastify";
import * as Yup from "yup";
import { estatus } from '../../../../constants/catalogos';

import { useEmployes } from '../../../../hooks';
import { FormInputGral } from "../../../common";

export function FormNewEmployed(props) {

    const { empleado, puestos, onClose, onRefetch } = props;
    const { addEmploye, aditEmploye } = useEmployes()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues(empleado),
        validationSchema: Yup.object(empleado ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formvalue) => {
            try {
                if (empleado) await aditEmploye(empleado.id, formvalue)
                else await addEmploye(formvalue)
                toast.success(empleado ? "Empleado modificado con éxito" : "Creación del empleado con éxito")
            } catch (error) {
                console.log(error);
                toast.error(error)
            }
            onClose()
            onRefetch()
        },
    });

    async function handleUpload(e) {
        const file = e.target.files[0];
        await formik.setFieldValue("fotografia", file);
    }

    console.log(empleado);

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
                    disabled={empleado ? true : false}
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
                    disabled={empleado ? true : false}

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
                    disabled={empleado ? true : false}
                    touched={formik.touched.a_materno}
                />
            </Row>
            <Row style={{ marginBottom: "20px" }}>
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Usuario"
                    formatoLabel="tituloIzquierda"
                    nameControl="username"
                    type="text"
                    valueControl={formik.values.username}
                    onChangeControl={formik.handleChange}
                    error={formik.errors.username}
                    touched={formik.touched.username}
                    disabled={empleado ? true : false}
                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Contraseña"
                    formatoLabel="tituloIzquierda"
                    nameControl="password"
                    type="password"
                    placeHolderControl=""
                    valueControl={formik.values.password}
                    onChangeControl={formik.handleChange}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                />

                <Form.Group className="col-12 col-sm-4 col-lg-4">
                    <FormInputGral
                        tituloLabel="Puesto"
                        formatoLabel="tituloIzquierda"
                    />
                    <Form.Select
                        name="puesto"
                        value={formik.values.puesto}
                        onChange={formik.handleChange}
                    >
                        <option value={null}>Selecciona una opción</option>
                        {puestos.map((puesto, index) => (
                            <option key={index} value={puesto.id}>
                                {puesto.descripcion}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {formik.touched.puesto && formik.errors.puesto ? (
                            <div className="text-danger">{formik.errors.puesto}</div>
                        ) : null}
                    </Form.Text>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="col-12 col-sm-4 col-lg-4">
                    <FormInputGral
                        tituloLabel="Estatus"
                        formatoLabel="tituloIzquierda"
                    />
                    <Form.Select
                        name="status"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                    >
                        {estatus.map((status, index) => (
                            <option key={index} value={index}>
                                {status}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {formik.touched.status && formik.errors.status ? (
                            <div className="text-danger">{formik.errors.status}</div>
                        ) : null}
                    </Form.Text>
                </Form.Group>
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Salario"
                    formatoLabel="tituloIzquierda"
                    nameControl="salario"
                    type="text"
                    placeHolderControl=""
                    valueControl={formik.values.salario}
                    onChangeControl={formik.handleChange}
                    error={formik.errors.salario}
                    touched={formik.touched.salario}
                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Fecha de nacimiento"
                    formatoLabel="tituloIzquierda"
                    nameControl="fecha_nacimiento"
                    type="date"
                    placeHolderControl=""
                    valueControl={formik.values.fecha_nacimiento}
                    onChangeControl={formik.handleChange}
                    error={formik.errors.fecha_nacimiento}
                    touched={formik.touched.fecha_nacimiento}
                    disabled={empleado ? true : false}
                />

            </Row>
            <br />
            <center>
                {
                    empleado && empleado.fotografia
                        ? (
                            <>
                                <Image
                                    style={{
                                        height: "150px",
                                        width: "150px",
                                        objectFit: "contain"
                                    }}
                                    rounded
                                    src={empleado.fotografia}
                                />
                                <br />
                            </>
                        )
                        : null
                }
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Fotografía"
                    formatoLabel="tituloIzquierda"
                    nameControl="fotografia"
                    type="file"
                    onChangeControl={(e) => handleUpload(e)}
                    error={formik.errors.fotografia}
                    touched={formik.touched.fotografia}
                />
            </center>
            <br />
            <center>
                <Button variant="light" type="submit">
                    {empleado ? "Editar empleado" : "Agregar empleado"}
                </Button>
            </center>
        </Form>
    )
}


function initialValues(empleado) {
    return {
        username: empleado?.user?.username || "",
        password: "",
        nombre: empleado?.nombre || "",
        a_paterno: empleado?.a_paterno || "",
        a_materno: empleado?.a_materno || "",
        fecha_nacimiento: empleado?.fecha_nacimiento || "",
        fotografia: "",
        puesto: empleado?.puesto?.id || "",
        salario: empleado?.salario || "",
        status: empleado?.status || "",
    };
}
function newSchema() {
    return {
        nombre: Yup.string("El nombre no puede estar vacío").required("El nombre es requerido"),
        a_paterno: Yup.string("El apellido paterno no debe estar vacio").required("El apellido paterno es requerido"),
        fecha_nacimiento: Yup.string("La fecha de nacimiento no debe estar vacio").required("La fecha de nacimiento es requerida"),
        puesto: Yup.string("El puesto no debe estar vacio vacio").required("Debes asignarle un puesto al empleado"),
        salario: Yup.string("El salario no debe estar vacio").required("Asigna un salario al empleado"),
        status: Yup.string("El estatus no debe estar vacio").required("Asignale un status al empleado"),
    };
}

function updateSchema() {
    return {
        puesto: Yup.string("El puesto no debe estar vacio vacio").required("Debes asignarle un puesto al empleado"),
        salario: Yup.string("El salario no debe estar vacio").required("Asigna un salario al empleado"),
        status: Yup.string("El estatus no debe estar vacio").required("Asignale un status al empleado"),
    };
}
