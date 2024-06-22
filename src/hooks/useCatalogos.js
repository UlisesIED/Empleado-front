import { useState } from 'react';

import {
    getParentescoApi,
    getPuestoApi,
} from '../api/catalagos';
import { useAuth } from './';

export function useCatalogos() {

    const { auth } = useAuth()
    const [puesto, setPuesto] = useState(undefined);
    const [parentesco, setParentesco] = useState(undefined);
    const [loading, setLoading] = useState(false)

    const getParentesco = async () => {
        try {
            setLoading(true)
            const response = await getParentescoApi()
            setParentesco(response)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    const getPuesto = async () => {
        try {
            setLoading(true)
            const response = await getPuestoApi()
            setPuesto(response)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return {
        puesto,
        parentesco,
        loading,
        getParentesco,
        getPuesto
    }

}