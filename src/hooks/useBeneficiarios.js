import { useState } from "react";
import { useAuth } from "./useAuth";

import {
    addBeneficiarioApi,
    getBeneficiarioApi
} from "../api/beneficiario";

export function useBeneficiarios() {

    const { auth } = useAuth()
    const [beneficiarios, setBeneficiarios] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const addBeneficiario = async (data) => {
        try {
            setLoading(true)
            const response = await addBeneficiarioApi(data, auth.token)
            setLoading(false)
            return response;
        } catch (error) {
            setLoading(false)
            console.log(error);

        }
    }

    const getBeneficiarios = async (idEmpleado) => {
        console.log(idEmpleado);
        try {
            setLoading(true)
            const response = await getBeneficiarioApi(idEmpleado, auth.token)
            setBeneficiarios(response)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return {
        beneficiarios,
        loading,
        addBeneficiario,
        getBeneficiarios,
    }
}