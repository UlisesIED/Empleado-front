import { BASE_API } from "../utils/constants";


export async function getEmployesApi(token) {
    try {
        const url = `${BASE_API}/api/empleados/`
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
        console.log(error);
    }
}

export async function addEmployeApi(data, token) {
    try {
        const formData = new FormData();
        formData.append("nombre", data.nombre);
        formData.append("a_paterno", data.a_paterno);
        if (data.a_materno) formData.append("a_materno", data.a_materno);
        formData.append("fecha_nacimiento", data.fecha_nacimiento);
        if (data.fotografia) formData.append("fotografia", data.fotografia);
        formData.append("salario", data.salario);
        formData.append("puesto", data.puesto);
        formData.append("username", data.username);
        formData.append("password", data.password);
        const url = `${BASE_API}/api/empleados/agregarEmpleado/`;
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

export async function aditEmployeApi(data, id, token) {
    try {
        const formData = new FormData();
        formData.append("id", id);
        if (data.fotografia) formData.append("fotografia", data.fotografia);
        if (data.salario) formData.append("salario", data.salario);
        if (data.puesto) formData.append("puesto", data.puesto);
        if (data.password) formData.append("password", data.password);
        if (data.status) formData.append("status", data.status);
        const url = `${BASE_API}/api/empleados/editarEmpleado/`;
        const params = {
            method: "PATCH",
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