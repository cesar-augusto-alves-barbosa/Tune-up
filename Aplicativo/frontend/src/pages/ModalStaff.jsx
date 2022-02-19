import React, { useEffect, useState } from "react";
import NavSystem from "../components/NavSystem";
import Button from "../components/Button";
import pencil from "../assets/img/pencil.png";
import "../assets/css/customer_view.css";
import "../assets/css/system_page.css";
import "../assets/css/style.css";
import "../assets/reset.css";
import "../assets/home.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import StaffVisualization from "./StaffVisualization";
import api from "../services/api";
export default function ModalStaff() {

    const { id } = useParams();
    const [funcionario, addFuncionario] = useState([]);
    useEffect(() => {
        async function getFuncionarios() {
            const resposta = await api.get(`/proprietarios/${id}`);
            addFuncionario(resposta.data);
        }
        getFuncionarios();
    }, []);

    if (funcionario.nivelAcesso === 1) {
        funcionario.nivelAcesso = "Gerente";
    } else if (funcionario.nivelAcesso === 2) {
        funcionario.nivelAcesso = "Chefe de Oficina";
    } else if (funcionario.nivelAcesso === 3) {
        funcionario.nivelAcesso = "Mecânico";
    }

    async function excluirFuncionario() {
        try {
            const resposta = await api.delete(`/oficinas/fk/${funcionario.id}`);
            if (resposta.status === 200) {
                const resposta2 = await api.delete(`/proprietarios/delete/${funcionario.email}/${funcionario.senha}`);
                if (resposta2.status === 200) {
                    alert("Funcionário excluído com sucesso");
                    window.location.href = "/visualizacao-funcionario"
                }
            }
        } catch {
            const resposta2 = await api.delete(`/proprietarios/delete/${funcionario.email}/${funcionario.senha}`);
            if (resposta2.status === 200) {
                alert("Funcionário excluído com sucesso");
                window.location.href = "/visualizacao-funcionario"
            }
        }
    }

    return (


        <React.Fragment>



            <div id="modal_process" className="modal_container mostrar">
                <div className="modal">
                    <h1 className="subtitle">Detalhes do seu funcionário</h1>
                    <div className="details_staff_view">

                        <div className="details_staff">
                            <div className="staff">

                                <h3>Nome do funcionário:</h3>
                                <input className="input-staff" type="text" defaultValue={funcionario.nome} />
                            </div>

                            <div className="staff">
                                <h3>Nascimento:</h3>
                                <input className="input-staff" type="text" defaultValue={funcionario.dataNasc} />

                            </div>
                        </div>


                        <div className="details_staff">

                            <div className="staff">
                                <h3>Cargo do funcionário: </h3>
                                <input className="input-staff" type="text" defaultValue={funcionario.nivelAcesso} />

                            </div>

                            <div className="staff">
                                <h3>CPF do funcionário: </h3>
                                <input className="input-staff" type="text" defaultValue={funcionario.cpf} />

                            </div>
                        </div>


                        <div className="details_staff">

                            <div className="staff">
                                <h3>E-mail do funcionário: </h3>
                                <input className="input-staff" type="text" defaultValue={funcionario.email} />

                            </div>

                            <div className="staff">
                                <h3>Telefone do funcionário:</h3>
                                <input className="input-staff" type="text" defaultValue={funcionario.telefone} />
                            </div>
                        </div>


                    </div>
                    <div class="staff_btn">

                        <Link to="/visualizacao-funcionario" class="btn_yellow_staff"> Fechar </Link>
                        <Link to={excluirFuncionario} class="btn_black_staff"> Excluir </Link>

                    </div>

                </div>
            </div>
            <StaffVisualization />
        </React.Fragment>
    )
}