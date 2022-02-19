import React, { useState } from "react"
import NavSystem from '../components/NavSystem';
import "../assets/css/order_of_service.css";

import SavingImage from '../components/SavingImageBD';

export default function ServiceOrder() {

    const [cliente, setCliente] = useState([]);
    const [veiculo, setVeiculo] = useState([]);

    function handleInput(evento) {
        const { name, value } = evento.target;
        setCliente({
            ...cliente,
            [name]: value
        });
        console.log(cliente);
    }

    function handleInputVeiculo(evento) {
        const { name, value } = evento.target;
        setVeiculo({
            ...veiculo,
            [name]: value
        });
        console.log(veiculo);
    }


    return (
        <React.Fragment>
            <NavSystem />

            <div className="container-orderService">
                <div id="register-order">
                    <h1 className="title-order-service">Adicionando uma nova ordem de serviço</h1>
                    <h2 className="title-order-service-min">Dados do Cliente</h2>
                    <form action="">
                        <div className="group-order">
                            <label for="clientName">Nome do Cliente</label>
                            <input className="input-order_of_service" type="text" name="nome" id="nome" className="clientName"
                                placeholder="César Augusto Babosa" onChange={handleInput} />
                        </div>

                        <div className="group-order">
                            <label for="cpf">CPF</label>
                            <input className="input-order_of_service" type="text" name="cpf" id="cpf" placeholder="555.555.555-55" onChange={handleInput} />
                        </div>

                        <div className="group-order">
                            <label for="dtEmissao">Data de Emissão</label>
                            <input className="input-order_of_service" type="date" name="dtEmissao" id="dtEmissao" onChange={handleInput} />
                        </div>

                        <div className="group-order">
                            <label for="dtEstimada">Data Estimada</label>
                            <input className="input-order_of_service" type="date" name="dtEstimada" id="dtEstimada" onChange={handleInput} />
                        </div>

                        <div className="group-order">
                            <label for="precoService">Preço</label>
                            <input className="input-order_of_service" type="text" name="precoTotal" id="precoTotal" placeholder="R$ " onChange={handleInput} />
                        </div>

                        <div className="group-order">
                            <label for="statusService">Status de Serviço</label>
                            <select className="select-service_of_order" onChange={handleInput} name="statusServico" id="statusServico">
                                <option value="">Selecione o Status</option>
                                <option value="Não Iniciado">- Não Iniciado</option>
                                <option value="Em Andamento">- Em Andamento</option>
                                <option value="Concluído">- Concluído</option>
                            </select>
                        </div>
                    </form>

                    {/* <hr width="noshade" className="bottomHrClient" />

                <div className="adding-service-in-order">
                    <h2 className="title-order-service-min">Serviços</h2>

                    <div className="add-service">
                        <label for="">Pesquisa de Serviço</label><input type="text" id="searchService"
                            placeholder="Ex: Troca de pneus..." className="addService-order" />
                        <button className="buttonSearch" id="searchService">Pesquisar</button>
                    </div>
                    <div className="container-serviceAdd">
                        <h3 className="addService-order">Adicione Serviços a Essa Ordem</h3>
                    </div>
                </div>

                <hr width="noshade" className="tophr" />
                <div id="services-adding">

                </div>
                <hr width="noshade" className="bottomhr" /> */}

                    <div className="adding-car-in-order">
                        <h2 className="title-order-service-min">Veículo</h2>
                        <form action="">
                            <div className="group-order">
                                <label for="brandCar">Marca</label>
                                <input className="input-order_of_service" type="text" name="marca" id="marca" placeholder="BMW" onChange={handleInputVeiculo} />
                            </div>

                            <div className="group-order">
                                <label for="modelCar">Modelo</label>
                                <input className="input-order_of_service" type="text" name="modelo" id="modelo" placeholder="X6 M Sport" onChange={handleInputVeiculo} />
                            </div>

                            <div className="group-order">
                                <label for="yearCar">Ano</label>
                                <input className="input-order_of_service" type="number" name="ano" id="ano" placeholder="2018" onChange={handleInputVeiculo} />
                            </div>

                            <div className="group-order">
                                <label for="colorCar">Cor</label>
                                <input className="input-order_of_service" type="text" name="cor" id="cor" placeholder="Vantta Black" onChange={handleInputVeiculo} />
                            </div>

                            <div className="group-order">
                                <label for="categoryCar">Categoria</label>
                                <input className="input-order_of_service" type="text" name="categoria" id="categoria" placeholder="SUV Coupe" onChange={handleInputVeiculo} />
                            </div>

                            <div className="group-order">
                                <label for="identifierCar">Placa</label>
                                <input className="input-order_of_service" type="text" name="placa" id="placa" onChange={handleInputVeiculo} placeholder="GI87AT4" />
                            </div>
                        </form>
                    </div>

                    <hr width="noshade" className="tophr" />

                    <div className="adding-car-in-order">
                        <h2 className="title-order-service-min">Imagens do Veículo</h2>

                        <div className="save-image-bd">
                            <SavingImage

                                nome={cliente.nome}
                                cpf={cliente.cpf}
                                dtEmissao={cliente.dtEmissao}
                                dtEstimada={cliente.dtEstimada}
                                preco={cliente.preco}
                                precoTotal={cliente.precoTotal}
                                statusServico={cliente.statusServico}

                                marca={veiculo.marca}
                                cor={veiculo.cor}
                                modelo={veiculo.modelo}
                                ano={veiculo.ano}
                                categoria={veiculo.categoria}
                                placa={veiculo.placa} />
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}