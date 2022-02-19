import React from "react";
import "../assets/reset.css";
import "../assets/home.css";
import NavUser from '../components/NavUser';
import missionIcon from '../assets/img/missaoIcon.png';
import visionIcon from '../assets/img/visaoIcon.png';
import valuesIcon from '../assets/img/valoresIcon.png';
import Button from "../components/Button";
import Footer from "../components/Footer";
import SearchHome from "../components/SearchHome";

export default function HomeMechanic() {
    return (
        <React.Fragment>
            <SearchHome />
            <div className="container" id="containerPage">
                <NavUser />

                <div className="div_banner">
                    <div className="banner"></div>
                    <h1 className="title_banner">Qualquer problema, nós vamos solucionar</h1>
                </div>
                <div className="container_aboutus" id="navegacao-sobrenos-usuario">
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
                <div className="container_tuneup" id="navegacao-buscaroficinas">
                    <div className="box_tuneup">
                        <h2 className="title_tuneup">Tune up</h2>
                        <p>
                            Nós te ajudamos a encontrar a oficina ideal e que atenda suas necessidades,
                            possuindo uma barra de pesquisa para encontrar oficinas no local
                            desejado e até as mais próximas, mostrando também o contato da oficina e
                            avaliações e muito mais..
                        </p>
                        <p>
                            Assim que a TUNE-UP supera a cada dia,
                            o desafio de oferec er meios para que usuários
                            acompanhem a dinâmica e correria do dia a dia.
                        </p>
                        <Button onClick={showSearch} classNameButton="btn_search_tuneup">Buscar por oficinas</Button>
                    </div>
                </div>
                <div className="container_contact" id="navegacao-contato-usuario">
                    <div className="box_contact">
                        <h1 className="title_contact">ENTRE EM CONTATO CONOSCO</h1>
                        <div className="box_inputs-contact">
                            <div className="description_input-contact">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name="name" placeholder="Oliver Santos Correia"/>
                            </div>
                            <div className="description_input-contact">
                                <label htmlFor="name">Email:</label>
                                <input type="email" placeholder="oliversantos@gmail.com"/>
                            </div>
                            <div className="description_input-contact">
                                <label htmlFor="name">Telefone:</label>
                                <input type="text" placeholder="(11) 98745-4547"/>
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

function showSearch() {
    const search = document.getElementById("searchScreen");
    const boxSearch = document.getElementById("boxScreen");
    const containerPage = document.getElementById("containerPage");
    search.style.display = "flex";
    boxSearch.style.display = "flex";
    containerPage.style.filter = "blur(3px)";
}