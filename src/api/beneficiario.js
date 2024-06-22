import { BASE_API } from "../utils/constants";


export async function getBeneficiarioApi(idEmpleado, token) {
    try {
        const queryParams = new URLSearchParams();
        queryParams.append("idEmpleado", JSON.stringify(idEmpleado))
        const url = `${BASE_API}/api/beneficiarios/obtenerBeneficiarios/?${queryParams.toString()}`;
        const params = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = response.json()
        return result;
    } catch (error) {
        throw error;
    }
}

export async function addBeneficiarioApi(data, token) {
    try {
        const formData = new FormData();
        formData.append("empleado", data.id);
        formData.append("nombre", data.nombre);
        formData.append("a_paterno", data.a_paterno);
        if (data.a_materno) formData.append("a_materno", data.a_materno);
        formData.append("parentesco", data.parentesco);
        const url = `${BASE_API}/api/beneficiarios/`;
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}
