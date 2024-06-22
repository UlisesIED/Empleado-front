import { BASE_API } from "../utils/constants";

export async function getParentescoApi() {
    try {
        const url = `${BASE_API}/api/parentesco/obtenerParentesco/`
        const response = await fetch(url)
        const result = response.json()
        return result;
    } catch (error) {
        throw error;
    }
}


export async function getPuestoApi() {
    try {
        const url = `${BASE_API}/api/puesto/obtenerPuesto/`
        const response = await fetch(url)
        const result = response.json()
        return result;
    } catch (error) {
        throw error;
    }
}