import React, { useEffect, useState } from "react";
import NavSystem from "../components/NavSystem";
import "../assets/css/customer_view.css";
import "../assets/css/system_page.css";
import "../assets/css/style.css";
import "../assets/reset.css";
import "../assets/home.css";
import CustomerViewContainer from "../components/CustomerViewContainer";
import api from "../services/api";

export default function CustomerView() {
    const [clientes, addCliente] = useState([]);

    useEffect(() => {
        getClientes();
    }, []);

    async function getClientes() {
        const resposta = await api.get("/usuarios/");
        addCliente(resposta.data);
    }

    function changePage() {
        window.location.href = "/user-registration";
    }

    return (
        <React.Fragment>
            <NavSystem />
            <div className="geral">
                <div>
                    <b>
                        <h1 className="title_client">CLIENTES</h1>
                    </b>
                </div>
                <div className="background">
                    <div className="geral_container">
                        {clientes.map((clientes) => (
                            <CustomerViewContainer
                                id={clientes.id}
                                nome={clientes.nome}
                                email={clientes.email}
                                phone={clientes.telefone}
                            />
                        ))}
                    </div>
                </div>
                <div className="geral_btn">
                    <button className="btn_customer text_btn-system" onClick={changePage}>Adicionar um novo cliente</button>
                </div>
            </div>
        </React.Fragment>
    );
}