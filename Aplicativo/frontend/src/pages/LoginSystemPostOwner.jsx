import React, { useState } from "react";
import Button from "../components/Button";
import Logo from "../assets/img/Tune-Up.png";
import { Link } from "react-router-dom";
import "../assets/css/login_system.css";
import api from "../services/api";


export default function LoginSystemOwner() {
  const [proprietario, setProprietario] = useState(
    {
      email: "",
      senha: "",
    });

  async function logar() {
    try {
      const resposta = await api.post("/proprietarios/login", {
        ...proprietario,
      });
      if (resposta.status === 200) {
        sessionStorage.setItem('emailProprietario', proprietario.email);
        sessionStorage.setItem('senhaProprietario', proprietario.senha);

        window.location.href = "/home-system";
      }
    } catch (err) {
      alert("Erro no Login, tente novamente");
    }
  }

  function handleInput(evento) {

    const { name, value } = evento.target;
    setProprietario({
      ...proprietario,
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
        {/*Login*/}
        <form action="">
          <div className="group-login-system">
            <label for="email">E-mail</label>
            <input className="input-login_system_owner" onChange={handleInput} type="email" name="email" id="email" placeholder="Digite seu E-mail" autocomplete="off" />
          </div>

          <div className="group-login-system">
            <label for="password">Senha</label>
            <input className="input-login_system_owner" onChange={handleInput} type="password" name="senha" id="senha" placeholder="Digite a sua senha" />
          </div>

          {/* <Link to="/login" id="forgot-pass">Esqueceu a senha?</Link> */}
        </form>

        <div className="buttons-login-system">
          <button className="register-button-login" name="cadastrar" id="cadastrar"><Link to="/owner-registration">Cadastrar-se</Link></button>
          <button className="cancel-button-login" onClick={logar}>Entrar</button>
        </div>
      </div>
    </div>
  );


}
