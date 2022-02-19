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
import CustomerView from "./CustomerView";
import api from "../services/api";

export default function ModalCustomer() {
    const [user, addUser] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function getUser() {
            const resposta = await api.get(`/usuarios/${id}`);
            addUser(resposta.data);
        }
        getUser();
    }, []);

    async function excluirCliente() {
        try {
            const resposta = await api.delete(`/veiculos/${user.id}`);
            if (resposta.status === 200) {
                const resposta2 = await api.delete(`/usuarios/delete/${user.email}/${user.senha}`);
                if (resposta2.status === 200) {
                    alert("Usuário excluído com sucesso");
                    window.location.href="/visualizacao-cliente"
                }
            }
        } catch {
            const resposta2 = await api.delete(`/usuarios/delete/${user.email}/${user.senha}`);
            if (resposta2.status === 200) {
                alert("Usuário excluído com sucesso");
                window.location.href="/visualizacao-cliente"
            }
        }
    }


    return (
        <React.Fragment>
            <div id="modal_process" className="modal_container_customer show_customer">
                <div className="modal_customer">
                    <h1 className="subtitle">Detalhes do seu cliente</h1>
                    <div className="details_customer_view">
                        <div className="details_view">
                            <div className="client">
                                <h3>Nome do cliente:</h3>
                                <input className="input-music" type="text" defaultValue={user.nome} />
                            </div>
                            <div className="client">
                                <h3>CPF do cliente: </h3>
                                <input className="input-music" type="text" defaultValue={user.cpf} />
                            </div>
                        </div>
                        <div className="details_view">
                            <div className="client">
                                <h3>E-mail do cliente: </h3>
                                <input className="input-music" type="text" defaultValue={user.email} />
                            </div>
                            <div className="client">
                                <h3>Telefone do cliente:</h3>
                                <input className="input-music" type="text" defaultValue={user.telefone} />
                            </div>
                        </div>
                    </div>
                    <div class="client_btn">
                        <Link to="/visualizacao-cliente" class="btn_blue_customer"> Fechar </Link>
                        <Link to={excluirCliente} class="btn_black_customer"> Excluir </Link>
                    </div>
                </div>
            </div>
            <CustomerView />
        </React.Fragment>
    )
}