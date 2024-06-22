import React, { useEffect } from 'react';
import { Button, Image, Row } from 'react-bootstrap';

import { estatus } from '../../../../constants/catalogos';
import { useBeneficiarios } from '../../../../hooks';
import { FormInputGral } from '../../../common';
import { TablaBeneficiarios } from '../../beneficiarios';

export function VistaDatosEmpleado(props) {

    const { empleado, onClose } = props
    const { getBeneficiarios, beneficiarios } = useBeneficiarios()

    useEffect(() => {
        const getData = async () => {
            await getBeneficiarios(empleado.id)
        }
        getData()
    }, [])

    return (
        <div>
            <center>
                {
                    empleado.fotografia
                        ? <Image
                            roundedCircle
                            src={empleado.fotografia}
                            style={{ height: "250px", width: "250px", objectFit: "contain" }}
                        />
                        : <Image
                            roundedCircle
                            src='https://cdn-icons-png.flaticon.com/512/266/266033.png'
                            style={{ height: "250px", width: "250px" }}
                        />
                }
            </center>
            <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Nombre."
                    formatoLabel="tituloIzquierda"
                    nameControl="nombre"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.nombre}
                    disabled

                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Apellido paterno"
                    formatoLabel="tituloIzquierda"
                    nameControl="a_paterno"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.a_paterno}
                    disabled
                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Apellido materno"
                    formatoLabel="tituloIzquierda"
                    nameControl="a_materno"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.a_materno}
                    disabled
                />
            </Row>
            <Row style={{ marginBottom: "20px" }}>
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Fecha de ingreso"
                    formatoLabel="tituloIzquierda"
                    nameControl="fecha_ingreso"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.fecha_ingreso}
                    disabled

                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Fecha de nacimiento"
                    formatoLabel="tituloIzquierda"
                    nameControl="fecha_nacimiento"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.fecha_nacimiento}
                    disabled
                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Puesto"
                    formatoLabel="tituloIzquierda"
                    nameControl="puesto"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.puesto?.descripcion}
                    disabled
                />
            </Row>
            <Row style={{ marginBottom: "20px" }}>
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="id"
                    formatoLabel="tituloIzquierda"
                    nameControl="id"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.id}
                    disabled

                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Estatus"
                    formatoLabel="tituloIzquierda"
                    nameControl="status"
                    type="text"
                    placeHolderControl=""
                    valueControl={estatus[empleado.status]}
                    disabled
                />
                <FormInputGral
                    col="col-12 col-sm-4 col-lg-4"
                    tituloLabel="Salario"
                    formatoLabel="tituloIzquierda"
                    nameControl="salario"
                    type="text"
                    placeHolderControl=""
                    valueControl={empleado.salario}
                    disabled
                />
            </Row>
            <br />
            <TablaBeneficiarios data={beneficiarios} />
            <Row style={{ marginBottom: "20px" }}>
                <div style={{ marginTop: "25px" }}>
                    <center>
                        <Button onClick={() => onClose()} variant="light">
                            salir
                        </Button>
                    </center>
                </div>
            </Row>
        </div>
    )
}
