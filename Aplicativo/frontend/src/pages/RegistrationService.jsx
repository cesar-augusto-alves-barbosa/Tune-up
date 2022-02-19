import { Link } from "react-router-dom";
import "../assets/css/registration_service.css";
import lgoTuneUp from "../assets/img/Tune-Up.png";
import backImage from "../assets/img/fundo-login.jpeg";
import { useState } from "react";
import api from "../services/api";
import loading from "../assets/img/loading.gif";

export default function RegistrationService() {
    const [loadingState, setLoading] = useState(
        {
            loading: "none"
        }
    );
    const [listaServicos, setServicos] = useState(
        {
            servicos: []
        }
    );
    function checkInput(e) {

        let inputServico = e.target.dataset;

        if (document.getElementById(e.target.id).checked) {
            e.target.dataset.checked = true;
            let auxServicos = listaServicos.servicos;
            auxServicos.push({
                ...listaServicos.servicos,
                descricaoServico: inputServico.nomeservico,
                fkOficina: localStorage.getItem("idOficina")
            })
            setServicos({ servicos: auxServicos });
        } else {
            e.target.dataset.checked = false;
            let auxServicos = [];

            listaServicos.servicos.map(servico => {
                if (servico.descricaoServico != inputServico.nomeservico) {
                    auxServicos.push(servico);
                }
            });
            setServicos({
                servicos: auxServicos
            });
        }
    }
    async function cadastrar() {
        setLoading({ loading: "block" })
        if (listaServicos.length == 0) {
            setLoading({ loading: "none" })
            console.log(loadingState)
            alert("Selecione um serviço")
        } else {
            try {
                const resposta = await api.post("/servicos/list", listaServicos.servicos).then(() => {
                    setLoading({ loading: "none" })
                });
                localStorage.setItem("idOficina", resposta.data);
                if (resposta.status === 201) {
                    alert("Serviços cadastrados");
                    window.location.href = "/home-system"
                }
            } catch (err) {
                alert("Erro no cadastro, tente novamente");
                console.log(err);
            }
        }
    }
    return (
        <div className="regis-services-banner">
            <img src={backImage} alt="" className="services-banner-back" />

            <div className="container-services">


                <div id="container-service-service">
                    <div className="header-register">
                        <img src={lgoTuneUp} alt="Logo Tune-Up" />
                        <h1>Cadastro de Serviços</h1>
                    </div>

                    <div className="services">
                        <div className="service-brakes">
                            <div className="title-service">
                                <h3>Freios</h3>
                            </div>
                            <div className="container-service">
                                <div className="services-right">
                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Troca de Pastilhas" onClick={checkInput} type="checkbox" id="troca_pastilhas" />
                                        <label for="troca_pastilhas">Troca de Pastilhas</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Lona de Freios" onClick={checkInput} type="checkbox" id="lona_freios" />
                                        <label for="lona_freios">Lona de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Disco de Freios" onClick={checkInput} type="checkbox" id="disco_freios" />
                                        <label for="disco_freios">Disco de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Cabos de Freios" onClick={checkInput} type="checkbox" id="cabos_freios" />
                                        <label for="cabos_freios">Cabos de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Fluído de Freios" onClick={checkInput} type="checkbox" id="fluido_freios" />
                                        <label for="fluido_freios">Fluído de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Pneus" onClick={checkInput} type="checkbox" id="pneus" />
                                        <label for="pneus">Pneus</label>
                                    </div>
                                </div>

                                <div className="services_left">
                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Hidro Vácuo dos Freios" onClick={checkInput} type="checkbox" id="hidro_vacuo_freios" />
                                        <label for="hidro_vacuo_freios">Hidro Vácuo dos Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Alinhamento" onClick={checkInput} type="checkbox" name="" id="alinhamento" />
                                        <label for="alinhamento">Alinhamento</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Balanciamento" onClick={checkInput} type="checkbox" id="balanciamento" />
                                        <label for="balanciamento">Balanciamento</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Freios ABS" onClick={checkInput} type="checkbox" id="freios_abs" />
                                        <label for="freios_abs">Freios ABS</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Revisão dos Componentes de
                                            Freios" onClick={checkInput} type="checkbox" id="revisao_componentes_freios" />
                                        <label for="revisao_componentes_freios">Revisão dos Componentes de
                                            Freios</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-motor">
                            <div className="title-service">
                                <h3>Motor</h3>
                            </div>
                            <div className="container-service">
                                <div className="services-right">
                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Troca de Oléo do Motor" onClick={checkInput} type="checkbox" id="troca_oleo_motor" />
                                        <label for="troca_oleo_motor">Troca de Oléo do Motor</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Arrefeiciamento" onClick={checkInput} type="checkbox" id="arrefeiciamento" />
                                        <label for="arrefeiciamento">Arrefeiciamento</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Motores Ciclo Diesel" onClick={checkInput} type="checkbox" id="motores_ciclo_diesel" />
                                        <label for="motores_ciclo_diesel">Motores Ciclo Diesel</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Motores Ciclo Otto" onClick={checkInput} type="checkbox" id="motores_ciclo_otto" />
                                        <label for="motores_ciclo_otto">Motores Ciclo Otto</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Reguladores de Motor" onClick={checkInput} type="checkbox" id="reguladores_motor" />
                                        <label for="reguladores_motor">Reguladores de Motor</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Injeção Eletrônica Diesel" onClick={checkInput} type="checkbox" id="injecao_eletronica_diesel" />
                                        <label for="injecao_eletronica_diesel">Injeção Eletrônica Diesel</label>
                                    </div>
                                </div>

                                <div className="services_left">
                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Retificar Motores" onClick={checkInput} type="checkbox" id="retificar_motores" />
                                        <label for="retificar_motores">Retificar Motores</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Troca de Filtros" onClick={checkInput} type="checkbox" id="troca_filtros" />
                                        <label for="troca_filtros">Troca de Filtros</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Radiadores" onClick={checkInput} type="checkbox" id="radiadores" />
                                        <label for="radiadores">Radiadores</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Injeção Eletrônica" onClick={checkInput} type="checkbox" id="injecao_eletronica" />
                                        <label for="injecao_eletronica">Injeção Eletrônica</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Injeção e Ignição Eletrônica" onClick={checkInput} type="checkbox" id="injecao_ignicao_eletronica" />
                                        <label for="injecao_ignicao_eletronica">Injeção e Ignição Eletrônica</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Revisão no Sistema de
                                        Arrefeiciamento" onClick={checkInput} type="checkbox" id="revisao_sistema_arrefeiciamento" />
                                        <label for="revisao_sistema_arrefeiciamento">Revisão no Sistema de
                                        Arrefeiciamento
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-service">
                            <div className="service-aesthetics">
                                <div className="title-service">
                                    <h3>Estética</h3>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Funilária" onClick={checkInput} type="checkbox" id="funilaria" />
                                    <label for="funilaria">Funilária</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Lavagem e Polimento" onClick={checkInput} type="checkbox" id="lavagem_polimento" />
                                    <label for="lavagem_polimento">Lavagem e Polimento</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Plotagem" onClick={checkInput} type="checkbox" id="plotagem" />
                                    <label for="plotagem">Plotagem</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Tapeçaria" onClick={checkInput} type="checkbox" id="tapecaria" />
                                    <label for="tapecaria">Tapeçaria</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Limpeza e Fluidos" onClick={checkInput} type="checkbox" id="limpeza_fluidos" />
                                    <label for="limpeza_fluidos">Limpeza e Fluidos</label>
                                </div>
                            </div>

                            <div className="service-automotive-preparation">
                                <div className="title-service">
                                    <h3>Preparação Automotiva</h3>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Preparação de Motores" onClick={checkInput} type="checkbox" id="preparacao_motores" />
                                    <label for="preparacao_motores">Preparação de Motores</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Turbo" onClick={checkInput} type="checkbox" id="turbo" />
                                    <label for="turbo">Turbo</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Remap de Potência" onClick={checkInput} type="checkbox" id="remap_potencia" />
                                    <label for="remap_potencia">Remap de Potência</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Suspensão" onClick={checkInput} type="checkbox" id="suspensao" />
                                    <label for="suspensao">Suspensão</label>
                                </div>
                            </div>
                        </div>

                        <div className="service-electrical-electronic">
                            <div className="title-service">
                                <h3>Elétrica e Eletrônica</h3>
                            </div>
                            <div className="container-service">
                                <div className="services-right">
                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Troca de Multimídia" onClick={checkInput} type="checkbox" id="troca_multimidia" />
                                        <label for="troca_multimidia">Troca de Multimídia</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Personalização de Painel" onClick={checkInput} type="checkbox" id="personalizacao_painel" />
                                        <label for="personalizacao_painel">Personalização de Painel</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Instalação de Som" onClick={checkInput} type="checkbox" id="instalacao_som" />
                                        <label for="instalacao_som">Instalação de Som</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Vidros Elétricos" onClick={checkInput} type="checkbox" id="vidros_eletricos" />
                                        <label for="vidros_eletricos">Vidros Elétricos</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Aplicação de LED" onClick={checkInput} type="checkbox" id="aplicacao_led" />
                                        <label for="aplicacao_led">Aplicação de LED</label>
                                    </div>
                                </div>

                                <div className="services-left">
                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Alarme" onClick={checkInput} type="checkbox" id="alarme" />
                                        <label for="alarme">Alarme</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Travas" onClick={checkInput} type="checkbox" id="travas" />
                                        <label for="travas">Travas</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="AirBag" onClick={checkInput} type="checkbox" id="airbag" />
                                        <label for="airbag">AirBag</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input data-checked={false} data-nomeServico="Reparo de Módulos" onClick={checkInput} type="checkbox" id="reparo_modulos" />
                                        <label for="reparo_modulos">Reparo de Módulos</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-aesthetics">
                            <div className="title-service">
                                <h3>Embreagem</h3>
                            </div>
                            <div className="container-service-embreagem">
                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Manutenção da Embreagem" onClick={checkInput} type="checkbox" id="manutencao_embreagem" />
                                    <label for="manutencao_embreagem">Manutenção da Embreagem</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Troca de Disco" onClick={checkInput} type="checkbox" id="troca_disco" />
                                    <label for="troca_disco">Troca de Disco</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Troca de Platô" onClick={checkInput} type="checkbox" id="troca_plato" />
                                    <label for="troca_plato">Troca de Platô</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Rolamento" onClick={checkInput} type="checkbox" id="rolamento" />
                                    <label for="rolamento">Rolamento</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input data-checked={false} data-nomeServico="Verificação de Cabos" onClick={checkInput} type="checkbox" id="verificacao_cabos" />
                                    <label for="verificacao_cabos">Verificação de Cabos</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={loading} className="loading-registration-service" style={{ display: loadingState.loading }} alt="" />
                    <div className="finished-register">
                        <button name="cancel-service" id="cancel-finished-service" className="cancel-service">Cancelar</button>
                        <button name="finish-service" id="finished-service" onClick={cadastrar} className="finished-service">Finalizar
                            Cadastro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}