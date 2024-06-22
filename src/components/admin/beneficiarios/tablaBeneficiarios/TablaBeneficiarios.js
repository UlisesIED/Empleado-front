import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";

import { FilterInput } from "../../../common";

export function TablaBeneficiarios(props) {
    const columns = [
        {
            name: "id",
            selector: (row) => row.id,
        },
        {
            name: "Nombre",
            selector: (row) => `${row.nombre} ${row.a_paterno} ${row.a_materno}`,
            sortable: true
        },
        {
            name: "Beneficiario",
            selector: (row) => row.descripcion,
            sortable: true
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