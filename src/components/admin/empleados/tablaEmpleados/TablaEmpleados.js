import React, { useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import DataTable from "react-data-table-component";

import { estatus } from '../../../../constants/catalogos';
import { FilterInput } from "../../../common";
import "./TablaEmpleados.css";

export function TablaEmpleados(props) {
    const { agregarBeneficiario, verInformacionEmpleado, editarEmpleado } = props;
    const columns = [
        {
            name: "Nombre",
            selector: (row) => `${row.nombre} ${row.a_paterno} ${row.a_materno}`,
            sortable: true
        },
        {
            name: "Fecha de ingreso",
            selector: (row) => row.fecha_ingreso.split("T")[0],
            sortable: true
        },
        {
            name: "Puesto",
            selector: (row) => row.puesto.descripcion,
            sortable: true
        },
        {
            name: "Estatus",
            selector: (row) => estatus[row.status],
            sortable: true
        },
        {
            button: true,
            cell: (row) => (
                <Button
                    size="sm"
                    variant="light"
                    title="Beneficiarios"
                    onClick={() => agregarBeneficiario(row.id)}
                >
                    Agregar beneficiario
                </Button>
            )
        },
        {
            button: true,
            cell: (row) => (
                <Button
                    size="sm"
                    variant="light"
                    title="Ver más detalles"
                    onClick={() => verInformacionEmpleado(row)}
                >
                    Ver más información
                </Button>
            )
        },
        {
            button: true,
            cell: (row) => (
                <Button
                    size="sm"
                    variant="light"
                    title="Desasignar Empleados"
                    onClick={() => editarEmpleado(row)}
                >
                    Editar empleado
                </Button>
            )
        },
    ]

    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems = props.data
        ? props.data.filter(
            (item) =>
                JSON.stringify(item)
                    .toLowerCase()
                    .indexOf(filterText.toLowerCase()) !== -1
        )
        : "";

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterInput
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <DataTable
            columns={columns}
            data={filteredItems}
            defaultSortField="Empleados"
            striped
            pagination
            subHeader
            subHeaderComponent={subHeaderComponent}
        />
    );
}