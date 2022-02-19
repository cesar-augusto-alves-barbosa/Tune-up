import React from "react";
import NavMechanic from '../components/NavMechanic';
import Button from "../components/Button";
import Footer from "../components/Footer";
import missionIcon from '../assets/img/missaoIcon.png';
import visionIcon from '../assets/img/visaoIcon.png';
import valuesIcon from '../assets/img/valoresIcon.png';
import logoEms from '../assets/img/EMS-Sem-Fundo-Branco.png'
import "../assets/reset.css";
import "../assets/home.css";
import { Link } from 'react-router-dom';


export default function HomeMechanic() {
    return (
        <React.Fragment>
            <NavMechanic />
            <div className="container" id="navegacao-paginainicial">
                <div className="div_banner">
                    <div className="banner"></div>
                    <h1 className="title_banner">Qualquer problema, nós vamos solucionar</h1>
                </div>
                <div className="container_aboutus" id="navegacao-sobrenos">
                    <div className="aboutus">
                        <h2 className="title_aboutus">
                            Quem somos
                        </h2>
                        <p className="paragraph_aboutus">
                            TUNE-UP é uma plataforma que integra, um sistema desenvolvido especialmente para as oficinas
                            mecânicas.
                            Combinando ferramentas de gestão e suporte à operação, especializado em colocar nas suas mãos tudo o
                            que você precisa para aprimorar serviços e atendimento com o gerenciamento da oficina com mais
                            eficiência!
                        </p>
                    </div>
                </div>
                <hr className="division_aboutus_msv" />
                <div className="container_msv">
                    <div className="card">
                        <h2>Missão</h2>
                        <img src={missionIcon} alt="" />
                        <p>
                            Satisfazer a necessidade de cada cliente, prestando um serviço com excelência em qualidade
                        </p>
                    </div>
                    <div className="card">
                        <h2>Visão</h2>
                        <img src={visionIcon} alt="" />
                        <p>
                            Ser reconhecida como uma empresa de ponta no segmento de oficinas mecânicas, inovando e gerando resultados
                        </p>
                    </div>
                    <div className="card">
                        <h2>Valores</h2>
                        <img src={valuesIcon} alt="" />
                        <p>
                            Profissionalismo; Comprometimento;
                            Trabalho em Equipe; Agilidade;
                            Flexibilidade;
                            Ética.
                        </p>
                    </div>
                </div>
                <div className="container_ems" id="navegacao-ems">
                    <img src={logoEms} alt="" />
                    <div className="card_ems">
                        <h2 className="title-card_ems">EMS</h2>
                        <p>
                            Inovando e contribuindo para o aprimoramento das oficinas, a EMS
                            produz dashboards, status  de produção, controle de fluxo de clientes e muito mais..
                        </p>
                        <p>
                            Assim que a EMS supera a cada dia, o desafio de oferecer meios para que oficinas acompanhem a dinâmica e correria do dia a dia
                        </p>
                        <Button classNameButton="btn_ems" colorButton="#FFC000">
                            <Link to="/proprietarios/login" >Conheça a EMS</Link>
                        </Button>
                    </div>
                </div>
                <div className="container_contact" id="navegacao-contato">
                    <div className="box_contact">
                        <h1 className="title_contact">ENTRE EM CONTATO CONOSCO</h1>
                        <div className="box_inputs-contact">
                            <div className="description_input-contact">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name="name" placeholder="Damião Oliveira" />
                            </div>
                            <div className="description_input-contact">
                                <label htmlFor="name">Email:</label>
                                <input type="email" placeholder="damiãoOliveira@gmail.com" />
                            </div>
                            <div className="description_input-contact">
                                <label htmlFor="name">Telefone:</label>
                                <input type="text" placeholder="(11) 94123-4560" />
                            </div>
                        </div>
                        <div className="box_msg-contact">
                            <label htmlFor="msg">Digite sua mensagem:</label>
                            <textarea name="msg" placeholder="Estou entrando em contato para falar de..."></textarea>
                        </div>
                        <Button classNameButton="btn_send">Enviar</Button>
                    </div>

                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}