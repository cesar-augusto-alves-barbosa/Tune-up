import { Link } from "react-router-dom";
import "../assets/css/workshop_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
import React, { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";

export default function WorkshopRegistration() {
    var fkProprietario;
    const [usuario, getUsuario] = useState([]);
    useEffect(() => {
        async function getUser() {
            const resposta = await api.get(`/proprietarios/proprietario/${sessionStorage.getItem('emailProprietario')}`);
            if (resposta.status === 200) {
                getUsuario(resposta.data);
            }
        } getUser();
    }, [])
    fkProprietario = usuario.id;
    sessionStorage.setItem('idProprietario', usuario.id);


    const [oficina, setOficina] = useState(
        {
            nome: "",
            razaoSocial: "",
            email: "",
            cnpj: "",
            ie: "",
            cep: "",
            rua: "",
            bairro: "",
            numero: "",
            complemento: "",
            hrFunc: "",
            telefone: "",
            fkPrope: ""
        });

    async function cadastrar() {

        try {
            const resposta = await api.post("/oficinas", {
                ...oficina,
            });
            localStorage.setItem("idOficina", resposta.data);
            if (resposta.status === 201) {
                alert("Oficina cadastrada");
                window.location.href = "/registration-service"
            }
        } catch (err) {
            alert("Erro no cadastro, tente novamente");
            console.log(err);
        }
    }

    function handleInput(evento) {

        const { name, value } = evento.target;
        setOficina({
            ...oficina,
            [name]: value
        });
    }

    function voltar() {
        window.location.href = "/owner-registration";
    }
    return (

        <div className="workshop_container_registration">
            <div className="workshop_box_registration">
                <img className="workshop_logo_registration" src={Logo} alt="" />
                <h2 className="workshop_title_registration">CADASTRO DA OFICINA</h2>


                <form action="">
                    <div className="group-work">
                        <input className="input-workshop_registration" type="name" name="nome" id="name" placeholder="Nome da oficina"
                            autocomplete="off" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="name" id="date" name="razaoSocial" placeholder="Razão social" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="text" name="cnpj" id="cnpj" placeholder="CNPJ" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="name" name="rua" id="rua" placeholder="Rua"
                            autocomplete="off" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="cep" name="cep" id="cep" placeholder="CEP" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="bairro" name="bairro" id="bairro" placeholder="Bairro"
                            autocomplete="off" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="numero" name="numero" id="numero" placeholder="Número" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="numero" name="complemento" id="complemento"
                            placeholder="Complemento" onChange={handleInput} />
                    </div>

                    <div className="group-work">
                        <input className="input-workshop_registration" type="numero" name="telefone" id="tel"
                            placeholder="Telefone empresarial" onChange={handleInput} />

                    </div>
                    <div className="group-work">
                        <input className="input-workshop_registration" type="email" name="email" id="email"
                            placeholder="E-mail empresarial" onChange={handleInput} />
                    </div>
                    <div className="group-work">
                        <input className="input-workshop_registration" type="text" name="ie" id="text"
                            placeholder="IE(Inscrição Estadual)" onChange={handleInput} />
                    </div>
                    <div className="group-work">
                        <input className="input-workshop_registration" type="text" name="fkPrope" id="fkPrope"
                            placeholder="id do Proprietário" value={usuario.id} onPointerMove={handleInput} onSelect={handleInput} />
                    </div>
                </form>

                <div className="group-workshop">
                    <label htmlFor="horario">Horário de funcionamento:</label>
                    <textarea name="hrFunc" id="horario"
                        placeholder="Ex: De segunda a sexta das 08:00 até as 19:00
                                De domingo das 09:00 até as 16:00
                                De Feriados das 10:00 até ás 15:00" onChange={handleInput} />
                </div>
                <div className="buttons_workshop-registration">
                    <button onClick={voltar} name="voltar" className="btn_workshop-registration btn-back_workshop-registration">Voltar</button>
                    <button onClick={cadastrar} name="proximo" className="btn_workshop-registration btn-next_workshop-registration">Proximo</button>
                </div>
            </div>

        </div>


    );
}