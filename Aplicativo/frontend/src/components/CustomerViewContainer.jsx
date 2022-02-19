import pencil from "../assets/img/pencil.png";
import "../assets/css/customer_view.css";
import "../assets/home.css";
import "../assets/reset.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function CustomerViewContainer({ id, nome, email, phone, ...props }) {
    const [veiculo, addVeiculosList] = useState([]);

    useEffect(() => {
        async function getVeiculos() {
            const resposta = await api.get(`/veiculos/fk/${id}`);
            addVeiculosList(resposta.data);
        }
        getVeiculos();
    }, []);
    return (
        /*<div className="customer_container_view">
            <div className="title_container_customer">
                <h1>Cliente {id}</h1>
            </div>
            <div className="customer_container">
                <div className="name_container_customer">
                    <h2>{nome}</h2>
                </div>
                <Link to={`/modal-cliente/${id}`}>
                    <img className="image_menu_customer" src={pencil} />
                </Link>
                <div className="license_plate_customer">
                    <h2>Placa:</h2>
                    <p >{veiculo.placa}</p>
                </div>
            </div>
        </div>*/
        <div id="id_background" className="service_request_container">
            <div className="title_container_service">
                <h1>Cliente {id}</h1>
            </div>
            <div className="service_container_request">
                <div className="container_name_icon-customer_view_container">
                    <div className="name_container_customer">
                        <div className="title-customer_view_container title_name-customer_view_container">Nome</div>
                        <div className="name-customer_view_container">{nome}</div>
                    </div>
                    <Link to={`/modal-cliente/${id}`}>
                        <span className="iconify icon-customer_view_container" data-icon="mdi:pencil" data-width="45" data-height="45"></span>
                    </Link>
                </div>
                <div className="license_plate_customer">
                    <div className="title-customer_view_container title_plate-customer_view_container">
                        Placa do veículo
                    </div>
                    <div>{veiculo.placa}</div>
                </div>
                <div className="email_container-customer_view_container">
                    <div className="title-customer_view_container title_email-customer_view_container">
                        Email
                    </div>
                    <div className="value_email-customer_view_container">
                        {email}
                    </div>
                </div>
            </div >
        </div >
    )
}