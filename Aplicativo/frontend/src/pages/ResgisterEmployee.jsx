import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import "../assets/css/register_employee.css";
import lgoTuneUp from "../assets/img/Tune-Up.png";
import backImage from "../assets/img/fundo-login.jpeg"

export default function RegisterEmployee() {
    const [funcionario, setFuncionario] = useState(
        {
            nivelAcesso: "",
            cpf: "",
            dataNasc: "",
            email: "",
            nome: "",
            senha: "",
            telefone: "",
            nivelAcesso: ""
        });

    async function cadastrar() {
        try {
            const resposta = await api.post("/proprietarios", {
                ...funcionario,
            });
            if (resposta.status === 201) {
                alert("Usuário cadastrado");
                window.location.href = "/home-system"
            }
        } catch (err) {
            alert("Erro no cadastro, tente novamente");
        }
    }

    function handleInput(evento) {
        const { name, value } = evento.target;
        setFuncionario({
            ...funcionario,
            [name]: value
        });

    }

    function handleInput2(evento) {
        if (funcionario.senha != null) {
            if (funcionario.senha != evento.target.value) {
                document.getElementById("senhas-teste").innerHTML = "As senhas não combinam";
            } else {
                document.getElementById("senhas-teste").innerHTML = "";
            }
        }
    }



    return (
        <div className="main-banner">
            <img src={backImage} className="imgfundo-employee" alt="" />

            <div className="container-employee">
                <div id="owner-register-container">
                    <div className="img-back">
                        <img src={lgoTuneUp} alt="" className="lgo-employee" />
                        <h1>Cadastro de funcionário</h1>
                    </div>

                    <form action="">
                        <div className="group-employee">
                            <label for="completeName">Nome</label>
                            <input className="geral_input input-owner-register-container" type="name" name="nome" id="name" placeholder="Digite seu nome completo"
                                autocomplete="off" onChange={handleInput} required="true" />
                        </div>

                        <div className="group-employee">
                            <label for="dtBirth ">Data de Nascimento</label>
                            <input className="geral_input input-owner-register-container" type="date" id="date" name="dataNasc" placeholder="00/00/0000" onChange={handleInput} required="true" />
                        </div>

                        <div className="group-employee">
                            <label for="cpf">CPF</label>
                            <input className="geral_input input-owner-register-container" type="text" name="cpf" id="cpf" placeholder="555.555.555-55" onChange={handleInput} required="true" />
                        </div>

                        <div className="group-employee">
                            <label for="phone">Telefone</label>
                            <input className="geral_input input-owner-register-container" type="tel" name="telefone" id="phone" placeholder="11 55555-5555" onChange={handleInput} required="true" />
                        </div>

                        <div className="group-employee">
                            <label for="email">E-mail</label>
                            <input className="geral_input input-owner-register-container" type="email" name="email" id="email" placeholder="Digite seu E-mail"
                                autocomplete="off" onChange={handleInput} required="true" />
                        </div>

                        <div className="group-employee">
                            <label for="responsibility">Cargo</label>
                            <select name="nivelAcesso" id="respon" onChange={handleInput}>
                                <option value="">Selecione o Cargo:</option>
                                <option value="1">- Gerente</option>
                                <option value="2">- Chefe de Oficina</option>
                                <option value="3">- Mêcanico</option>
                            </select>
                        </div>

                        <div className="group-employee">
                            <label for="password">Senha</label>
                            <input className="geral_input input-owner-register-container" type="password" name="senha" id="senha" placeholder="Digite a sua senha" onChange={handleInput} required="true" />
                        </div>

                        <div className="group-employee">
                            <label for="confirmPassword">Confirmar Senha</label>
                            <input className="geral_input input-owner-register-container" type="password" name="confirmPassword" id="confirmPassword"
                                placeholder="Confirme sua senha" onChange={handleInput2} onClick={handleInput2} />
                        </div>
                    </form>
                    <p id="senhas-teste"></p>
                    <div className="buttons">
                        <Link to="/visualizacao-funcionario"><button name="cancel" id="cancelPage" className="cancel-page">Cancelar</button></Link>
                        <button name="next" id="nextPage" className="next-page" onClick={cadastrar}>Cadastrar Funcionário</button>
                    </div>
                </div>
            </div>
        </div>
    );
}