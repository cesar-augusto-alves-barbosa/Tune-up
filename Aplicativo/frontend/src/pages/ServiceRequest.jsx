import React, { useEffect, useState } from "react";
import NavSystem from "../components/NavSystem";
import Button from "../components/Button";
import pencil from "../assets/img/pencil.png";
import "../assets/css/service_request.css";
import "../assets/css/system_page.css";
import "../assets/css/style.css";
import "../assets/reset.css";
import "../assets/home.css";
import api from "../services/api";
import ServiceRequestContainer from "../components/ServiceRequestContainer";
import { useParams } from "react-router";

export default function ServiceRequest() {

    const [services, addServicesList] = useState([]);
    const { idRemover } = useParams();
    useEffect(() => {
        async function getServices() {
            const resposta = await api.get("/ordens-de-servico/nao-concluido");
            addServicesList(resposta.data);
            // console.log(services[0].id);
            // const novaLista = services.filter((service) => service.id != idRemover);
            // // console.log(novaLista);
            // // addServicesList(novaLista);
        }
        getServices();
    }, []);


    return (
        <React.Fragment>
            <NavSystem />

            <div className="geral_service" id="id_service">
                <div>
                    <b>
                        <h1 className="title_service">ORDEM DE SERVIÇO</h1>
                    </b>
                </div>


                <div className="background_service">
                    <div className="geral_container_service">
                        {services.map((ordem) => (
                            <ServiceRequestContainer
                                id={ordem.id}
                                status={ordem.statusServico}
                                fkVeiculo={ordem.fkVeiculoOrdem}
                            />
                        ))}

                    </div>


                </div>

                <div className="geral_btn">
                    <button className="btn_service"><a href="/service-order" className="text_btn-system">Nova ordem de serviço</a></button>
                </div>



            </div>

        </React.Fragment>
    );
}