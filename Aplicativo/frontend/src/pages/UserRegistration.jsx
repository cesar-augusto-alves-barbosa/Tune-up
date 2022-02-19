/*import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/user_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import api from "../services/api";

export default function UserRegistration() {

  const [usuario, setUsuario] = useState(
    {
      cpf: "",
      dataNasc: "",
      email: "",
      nome: "",
      senha: "",
      telefone: ""
    });

  async function cadastrar() {
    try {
      const resposta1 = await api.post("/usuarios", {
        ...usuario,
      });

      if (resposta1.status === 201) {
        alert("Usuário cadastrado");
        window.location.href = "/visualizacao-cliente"
      }
    } catch (err) {
      alert("Erro no cadastro, tente novamente");
    }
  }

  function handleInput(evento) {

    const { name, value } = evento.target;
    setUsuario({
      ...usuario,
      [name]: value
    });

  }

  function handleInput2(evento) {
    if (usuario.senha != null) {
      if (usuario.senha != evento.target.value) {
        document.getElementById("senhas-teste").innerHTML = "As senhas não combinam";
      } else {
        document.getElementById("senhas-teste").innerHTML = "";
      }
    }
  }

  return (
    <div className="container_registration">
      <div className="box_registration">
        <img className="logo_registration" src={Logo} alt="" />
        <h2 className="title_registration">Cadastrar Cliente</h2>
        <form action="" className="form_registration">
          <div className="inputs-form_registration">
            <div className="inputs_top_registration">
              <div className="inputs_left_registration">
                <input className="geral_input input-form_registration" type="text" placeholder="Nome completo" name="nome" onChange={handleInput} />
                <input className="geral_input input-form_registration" type="text" placeholder="CPF" name="cpf" onChange={handleInput} />
              </div>
              <div className="inputs_right_registration">
                <input className="geral_input input-form_registration" type="date" name="dataNasc" onChange={handleInput} />
                <input className="geral_input input-form_registration" type="text" placeholder="Telefone" name="telefone" onChange={handleInput} />
              </div>
            </div>
            <input className="geral_input input_email-form_registration" type="email" placeholder="Email" name="email" onChange={handleInput} />
            <div className="passwords">
              <input className="geral_input input-form_registration" type="password" placeholder="Senha" name="senha" onChange={handleInput} />
              <input className="geral_input input-form_registration" type="password" placeholder="Confirmação senha" name="senha2" onChange={handleInput2} onClick={handleInput2} />
            </div>
            <p id="senhas-teste"></p>
            <div className="buttons_register-user_registration">
              <button type="button" className="btn button_register-user_registration btn_cancel_registration">
                <Link to="/home-user" className="link_button-user_registration">
                  Cancelar
                </Link>
              </ button>
              <button onClick={cadastrar} type="button" className="btn button_register-user_registration btn_registration">Cadastrar</ button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 
*/