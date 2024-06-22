import { useState } from "react";
import { useAuth } from "./useAuth";

import {
    addEmployeApi,
    aditEmployeApi,
    getEmployesApi
} from "../api/employes";

export function useEmployes() {

    const { auth } = useAuth()
    const [empleados, setEmpleados] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const addEmploye = async (data) => {
        try {
            setLoading(true)
            await addEmployeApi(data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);

        }
    }
    const aditEmploye = async (id, data) => {
        try {
            setLoading(true)
            await aditEmployeApi(data, id, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    const getEmployes = async () => {
        try {
            setLoading(true)
            const response = await getEmployesApi(auth.token)
            setEmpleados(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return {
        empleados,
        loading,
        addEmploye,
        aditEmploye,
        getEmployes
    }
}