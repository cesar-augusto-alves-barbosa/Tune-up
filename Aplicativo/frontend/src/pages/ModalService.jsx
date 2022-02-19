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
import ServiceRequest from "./ServiceRequest";
import plus from "../assets/img/plus.png";
import api from "../services/api";
import ServiceRequestContainer from "../components/ServiceRequestContainer";


export default function ModalService() {

    const [services, addServicesList] = useState([]);
    const [servicos, addServicos] = useState([]);
    const [itemServicos, addItemServicos] = useState([]);
    const [images, addImages] = useState([]);


    const [user, addUser] = useState(
        {
            nome: "",
            dataNasc: "",
            email: "",
            cpf: "",
            telefone: "",
            senha: "",
        }
    );

    const { id } = useParams();
    const { fk } = useParams();
    const { fkVeiculo } = useParams();

    useEffect(() => {
        async function getServices() {
            const resposta = await api.get(`/ordens-de-servico/${id}`);
            addServicesList(resposta.data);
        }
        getServices();

        async function getVeiculos() {
            const resposta = await api.get(`/veiculos/${fkVeiculo}`);
            addVeiculosList(resposta.data);
        }
        getVeiculos();
        async function getUser() {
            const resposta = await api.get(`/usuarios/${fk}`);
            addUser(resposta.data);
        }
        getUser();
        async function getServicos() {
            const resposta = await api.get(`/item-servico/ordem/${id}`);
            addServicos(resposta.data);
        }
        getServicos();
        async function getItemServicosById() {
            const resposta = await api.get(`/servicos/id/${id}`);
            addItemServicos(resposta.data);
        }
        // getItemServicosById();
        // async function getImageByFk() {
        //     const resposta = await api.get(`/images-veiculos/anexo/placa/${veiculo.placa}`);
        //     addImages(resposta.data);
        // }
        // getImageByFk();
    }, []);
    const [veiculo, addVeiculosList] = useState([]);
    function handleInput(eventoDoOnChange) {
        const { name, value } = eventoDoOnChange.target;
        addUser({
            ...user,
            [name]: value,
        });
    }
    async function deleteVeiculo() {
        const resposta = await api.delete(`/ordens-de-servico/deletar/${id}`);
    }
    console.log(images)
    return (
        <React.Fragment>
            {/* id = {id};
            fkClienteOrdem = { services.fkClienteOrdem};
            fkVeiculoOrdem = { services.fkVeiculoOrdem};
            dtEstimada = { services.dtEstimada};
            dtEmissao = { services.dtEmissao};
            statusServico = { services.statusServico};
            precoTotal = { services.precoTotal}; */}
            <div id="modal_process" className="modal_service_container mostrar_service">
                <div className="modal_service">
                    <h1 className="subtitle_request">Detalhes da sua ordem de serviço</h1>
                    <div className="details_service_view">
                        <div className="details_service">
                            <div className="service">
                                <h3 className="title-order_of_service">Nome do cliente:</h3>
                                <input onChange={handleInput} className="input-service-order_of_service" type="text" defaultValue={user.nome} />
                            </div>
                            <div className="service">
                                <h3 className="title-order_of_service">CPF do cliente: </h3>
                                <input onChange={handleInput} className="input-service-order_of_service" type="text" defaultValue={user.cpf} />
                            </div>
                        </div>
                        <div className="details_service">
                            <div className="service">
                                <h3 className="title-order_of_service">Preço do serviço R$: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={services.precoTotal} />
                            </div>
                            <div className="service">
                                <h3 className="title-order_of_service">Data estimada: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={services.dtEstimada} />
                            </div>
                        </div>
                        <div className="details_service">
                            <div className="service">
                                <h3 className="title-order_of_service">Data de emissão: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={services.dtEmissao} />
                            </div>
                            <div className="service">
                                <h3 className="title-order_of_service">Status do serviço:</h3>
                                <select className="select-order_of_service" onChange={handleInput} name="" id="" >
                                    <option defaultValue={services.statusServico}>{services.statusServico}</option>
                                    <option value="Concluido">Concluído</option>
                                    <option value="Em andamento">Em andamento</option>
                                    <option value="Não iniciado">Não iniciado</option>
                                </select>
                            </div>
                        </div>
                        <h1 className="subtitle_service">Serviços adicionados</h1>
                        <div className="inputs_services_add--order_of_service">

                            <div className="input_services_add--order_of_service">
                                <input className="input-service-order_of_service" type="text" value="Troca de óleo do motor" />
                            </div>
                            <div className="input_services_add--order_of_service">
                                <input className="input-service-order_of_service" type="text" value="Turbo" />
                            </div>
                            <div className="input_services_add--order_of_service">
                                <input className="input-service-order_of_service" type="text" value="Turbo" />
                            </div>
                            <div className="input_services_add--order_of_service">
                                <input className="input-service-order_of_service" type="text" value="Turbo" />
                            </div>
                            <div className="input_services_add--order_of_service">
                                <input className="input-service-order_of_service" type="text" value="Turbo" />
                            </div>
                        </div>
                        <h1 className="subtitle_service">Veículo</h1>
                        <div className="details_service">
                            <div className="service">
                                <h3 className="title-order_of_service">Marca: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={veiculo.marca} />
                            </div>
                            <div className="service">
                                <h3 className="title-order_of_service">Placa do carro: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={veiculo.placa} />
                            </div>
                        </div>
                        <div className="details_service">
                            <div className="service">
                                <h3 className="title-order_of_service">Ano: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={veiculo.ano} />
                            </div>
                            <div className="service">
                                <h3 className="title-order_of_service">Cor: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={veiculo.cor} />
                            </div>
                        </div>
                        <div className="details_service">
                            <div className="service">
                                <h3 className="title-order_of_service">Modelo: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={veiculo.modelo} />
                            </div>
                            <div className="service">
                                <h3 className="title-order_of_service">Categoria: </h3>
                                <input className="input-service-order_of_service" type="text" defaultValue={veiculo.categoria} />
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <h1 className="subtitle_service">Imagens do veículo</h1>
                    <div className="photos_cars">
                        <div className="photo_container_img">
                            <div className="photo_plus">
                                <img src={`http://localhost:8080/images-veiculos/anexo/placa/${veiculo.placa}/0`} width="60%" />
                            </div>
                        </div>
                        <div className="photo_container_img">
                            <div className="photo_plus">
                                <img src={`http://localhost:8080/images-veiculos/anexo/placa/${veiculo.placa}/1`} width="60%" />
                            </div>
                        </div>
                        <div className="photo_container_img">
                            <div className="photo_plus">
                                <img src={`http://localhost:8080/images-veiculos/anexo/placa/${veiculo.placa}/2`} width="60%" />
                            </div>
                        </div>
                        <div className="photo_container_img">
                            <div className="photo_plus">
                                <img src={`http://localhost:8080/images-veiculos/anexo/placa/${veiculo.placa}/3`} width="60%" />
                            </div>
                        </div>
                        <div className="photo_container_img">
                            <div className="photo_plus">
                                <img src={`http://localhost:8080/images-veiculos/anexo/placa/${veiculo.placa}/4`} width="60%" />
                            </div>
                        </div>
                    </div>
                    <div class="service_btn">
                        <Link to="/ordem-de-servico" class="btn_blue_service"> Fechar </Link>
                        <Link to="/ordem-de-servico" class="btn_yellow_service"> Salvar </Link>
                        <Link onClick={deleteVeiculo} class="btn_black_service"> Excluir </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}