import React, { useState } from "react";
import Logo from "../assets/img/Tune-Up.png";
import { Link } from "react-router-dom";
import "../assets/css/login_system.css";
import api from "../services/api";

let email = 'nulo';
let senha = 'nulo';

export default function LoginSystem() {

    const [login, setLogin] = useState(
        {
            email: "",
            senha: "",
        });
    
    async function logar() {
        let resposta = await api.post("/login", {
            ...login,
        });
        if (resposta.status === 201) {
            alert("Login efetuado");
        } else {
            alert("erro! " + resposta.status);
        }
    }
    
    function handleInput(evento) {
        console.log("CAMPO" + evento.target.name);
    
        if (evento.target.name == "email") {
            email = evento.target.value;
            console.log(email);
        }else if(evento.target.name === "senha")
        {
            senha = evento.target.value;
            console.log("SENHA"+senha)
        }
        const { name, value } = evento.target;
        setLogin({
            ...login,
            [name]: value
        });
    
    }

    return (
        <div id="body-login">
            <div id="login-container">
                <div className="container-back-login">
                    <Link to="/home-mechanic" className="back-login">Voltar</Link>
                </div>

                <div className="img-back">
                    <img src={Logo} alt="" />
                </div>

                <form action="">
                    <div className="group-login-system">
                        <label for="email">E-mail</label>
                        <input onChange={handleInput} type="email" name="email" id="email" placeholder="Digite seu E-mail" autocomplete="off" />
                    </div>

                    <div className="group-login-system">
                        <label for="password">Senha</label>
                        <input onChange={handleInput} type="password" name="password" id="password" placeholder="Digite a sua senha" />
                    </div>

                    <Link to="/login" id="forgot-pass">Esqueceu a senha?</Link>
                </form>

                <div className="buttons-login-system">
                    <button className="register-button-login" name="cadastrar" id="cadastrar"><Link to="/user-registration">Cadastrar-se</Link></button>
                    <button className="cancel-button-login" onClick={logar}>Entrar</button>
                </div>
            </div>
        </div>
    );
}
