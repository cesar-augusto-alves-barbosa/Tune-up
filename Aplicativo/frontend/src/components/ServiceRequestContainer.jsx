import pencil from "../assets/img/pencil.png";
import "../assets/css/service_request.css";
import "../assets/home.css";
import "../assets/reset.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useState, useEffect } from "react";


export default function ServiceRequestContainer({ id, status, fkVeiculo, ...props }) {

    const [veiculo, addVeiculosList] = useState([]);
    const [clientes, addClienteList] = useState([]);
    const [colorStatus, setColorStatus] = useState();

    useEffect(() => {
        async function getVeiculos() {
            const resposta = await api.get(`/veiculos/${fkVeiculo}`);
            addVeiculosList(resposta.data);
        }
        getVeiculos();
        setColorStatus("#333")
        if (status == "Em Andamento") {
            setColorStatus("#FFFF00")
        } else if (status == "Concluido") {
            setColorStatus("#00FF00")
        }
    }, []);


    //  async function getClienteByOficina(){
    //     const resposta = await api.get(`/veiculos/${fkVeiculo}`);
    //     addClienteList(resposta.data);
    //  }

    const fk = veiculo.fkCliente;

    return (
        <div id="id_background" className="service_request_container">
            <div className="title_container_service">
                <h1>Serviço {id}</h1>
            </div>
            <div className="service_container_request">
                <section className="model_icon-service_container">
                    <div className="plate-service_conteiner">
                        <div className="title-service_container title_plate-service_container">
                            Placa
                        </div>
                        <div className="value_plate-sevice_container">
                            {veiculo.placa}
                        </div>
                    </div>
                    <div className="icon_container-service_container">
                        <Link to={`/modal-ordem-de-servico/${id}/${veiculo.fkCliente}/${fkVeiculo}`}>
                            <span class="iconify" id="icon_pencil_service_container" data-icon="mdi:pencil" data-width="45" data-height="45"></span>
                        </Link>
                    </div>
                </section>
                <section className="plate_brand-service_container">
                    <div className="model-service_container">
                        <div className="title-service_container title_model-service_container">
                            Modelo
                        </div>
                        <div className="value_model-service_container">
                            {veiculo.modelo}
                        </div>
                    </div>
                    <div className="brand-service_container">
                        <div className="title-service_container title_brand-service_container">
                            Marca
                        </div>
                        <div className="value_brand-sevice_container">
                            {veiculo.marca}
                        </div>
                    </div>
                </section>
                <section className="section_status-service_container">
                    <div className="title-service_container title_status-service_container">
                        Status
                    </div>
                    <div className="value_status-service_container" >
                        <div className="text_status-service_container">
                            {status}
                        </div>
                        <div className="circle_status-service_container" style={{ backgroundColor: colorStatus }} >
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}
