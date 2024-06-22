import React, { useEffect, useState } from 'react'

import { Button } from 'react-bootstrap'
import {
    FormNewBeneficiario,
    FormNewEmployed,
    TablaEmpleados,
    VistaDatosEmpleado,
} from '../../../components/admin/empleados'
import { ModalBasic } from '../../../components/common'
import { useCatalogos, useEmployes } from '../../../hooks'
import './EmployedAdmin.css'

export function EmployedAdmin() {

    const {
        getParentesco, parentesco,
        getPuesto, puesto,
    } = useCatalogos()
    const { getEmployes, empleados, loading } = useEmployes()

    const [showModal, setshowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const [sizeModal, setsizeModal] = useState("md");

    const openCloseModal = () => setshowModal((prev) => !prev);
    const onRefetch = () => setRefetch((prev) => !prev);

    useEffect(() => {
        const getData = async () => {
            await getParentesco()
            await getPuesto()
            await getEmployes()
        }
        getData()
    }, [refetch])

    const agregarBeneficiario = (idEmp) => {
        setTitleModal("Agregar Beneficiario");
        setsizeModal("xl");
        setContentModal(
            <FormNewBeneficiario
                idEmp={idEmp}
                parentescos={parentesco}
                onClose={openCloseModal}
                onRefetch={onRefetch}
            />
        );
        openCloseModal();
    };

    const verInformacionEmpleado = (empleado) => {
        setTitleModal("Información empleado");
        setsizeModal("xl");
        setContentModal(
            <VistaDatosEmpleado
                empleado={empleado}
                onClose={openCloseModal}
            />
        );
        openCloseModal();
    };

    const agregarEmpleado = () => {
        setTitleModal("Agregar Empleado");
        setsizeModal("xl");
        setContentModal(
            <FormNewEmployed
                puestos={puesto}
                onClose={openCloseModal}
                onRefetch={onRefetch}
            />
        );
        openCloseModal();
    };

    const editarEmpleado = (empleado) => {
        setTitleModal("Editar Empleado");
        setsizeModal("xl");
        setContentModal(
            <FormNewEmployed
                empleado={empleado}
                puestos={puesto}
                onClose={openCloseModal}
                onRefetch={onRefetch}
            />
        );
        openCloseModal();
    };

    return (
        <div>
            <div className='conteiner-button'>
                <Button variant='light' onClick={agregarEmpleado}>
                    Agregar Empleado
                </Button>
            </div>
            {
                loading
                    ? <h5>Cargando datos</h5>
                    : (
                        <TablaEmpleados
                            data={empleados}
                            agregarBeneficiario={agregarBeneficiario}
                            verInformacionEmpleado={verInformacionEmpleado}
                            editarEmpleado={editarEmpleado}
                        />
                    )
            }
            <ModalBasic
                show={showModal}
                onClose={openCloseModal}
                title={titleModal}
                children={contentModal}
                size={sizeModal}
            />
        </div>
    )
}
