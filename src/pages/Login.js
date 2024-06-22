import React, { useState } from 'react';
import { toast } from "react-toastify";
import imagen from '../assets/img/Lau.png';
import { useAuth } from '../hooks';

import { loginApi } from '../api/user';
import './App.css';

export function Login() {

    const { login } = useAuth()
    const [loginF, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const sendFormData = async (event) => {
        try {
            event.preventDefault();
            const formdata = {
                username: loginF,
                password: password
            }
            const response = await loginApi(formdata);
            const { access } = response;
            login(access);
        }
        catch (error) {
            toast.error(`Error en el inicio de sesión.\n${error.message}`);
        }

    }

    return (
        <div className='conteiner-login'>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={imagen} style={{ width: "100%" }} />
                    </div>

                    <form onSubmit={sendFormData} className='formStyle'>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="usuario" onChange={(e) => setLogin(e.target.value)} />
                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} />
                        <input type="submit" className="fadeIn fourth" value="ingresar" />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover">Prueba técnica - 2024</a>
                    </div>

                </div>
            </div>
        </div>


    );
}
