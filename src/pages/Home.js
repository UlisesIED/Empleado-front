import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../hooks';
import { Login } from './Login';
import { InicioAdmin } from './admin';
import { InicioEmployeed } from './employed';

export function Home() {
    const { auth } = useAuth();
    const navigate = useNavigate();
    console.log(auth);

    useEffect(() => {
        if (!auth) {
            navigate("/");
        } else if (auth.me.role === 1) {
            navigate("/admin");
        } else if (auth.me.role === 2) {
            navigate("/employeed");
        }
    }, [auth, navigate]);

    if (!auth) return <Login />;
    if (auth?.me?.role === 1) return <InicioAdmin />;
    if (auth?.me?.role === 2) return <InicioEmployeed />;
    return null;
}
