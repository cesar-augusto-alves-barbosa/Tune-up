import "../assets/css/profile-workshop.css";
import NavSimple from "../components/NavSimple";
import Button from "../components/Button"
import imgWorshop from "../assets/img/Logo-TuneUp-Icon.png";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router";

export default function ProfileWorkshop() {

    const [mensagem, setMensagem] = useState([]);

    const params = useParams();
    const [oficina, getOficina] = useState([]);
    const [servicos, getServicos] = useState([]);
    useEffect(() => {
        api.get(`oficinas/${params.id}`).then(response => {
            getOficina(response.data);
        })
        api.get(`servicos/${params.id}`).then(response => {
            getServicos(response.data);
        })

    }, []);

    async function enviarMensagem() {

        if (document.getElementById("texto").value === "" || document.getElementById("data").value === "" || document.getElementById("horario").value === "") {
            alert("Campos vazios!");
        } else {
            try {
                const resposta = await api.post("/envia-email", {
                    ...mensagem,
                });
                if (resposta.status === 201) {
                    alert("Mensagem enviada com sucesso!");
                    window.location.href = "/home-user";
                } else {
                    alert(resposta.status);
                }
            } catch (err) {
                alert("Erro ao enviar mensagem, tente novamente");
            }
        }
    }

    function handleInput(evento) {
        const { name, value } = evento.target;
        setMensagem({
            ...mensagem,
            [name]: value
        });
    }

    return (

        <div className="container_profile_workshop">
            <NavSimple />
            <div className="box-profile_workshop">
                <div className="info_profile_workshop">
                    <div className="box-img_workshop-profile_workshop">
                        <img src={imgWorshop} className="img_workshop-profile_workshop" alt="" />
                    </div>
                    <div className="info_workshop">
                        <div className="name_opening_hours_info_workshop">
                            <h1 className="name-profile_workshop">
                                {oficina.nome}
                            </h1>
                            <div className="opening_hours-profile_workshop">
                                <h2 className="opening_hours_title-profile_workshop">
                                    Horário de funcionamento
                            </h2>
                                <p className="opening_hours_text-profile_workshop">
                                    {oficina.hrFunc}
                                </p>
                            </div>
                        </div>
                        <div className="location_contact-profile_workshop">
                            <div className="location-profile_workshop">
                                <h2 className="title_location-profile_workshop">Endereço</h2>
                                <p className="location_text-profile_workshop">
                                    {
                                        oficina.rua + ", " +
                                        oficina.numero + " - " +
                                        oficina.complemento + " - Bairro " +
                                        oficina.bairro
                                    }
                                </p>
                            </div>
                            <div className="contact-profile_workshop">
                                <h2 className="contact_title-profile_workshop">
                                    Contato
                                </h2>
                                <div className="contact_title-profile_workshop">
                                    <h3 className="phone_title-profile_workshop">Telefone:</h3>
                                    <p className="phone-profile_workshop">{oficina.telefone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box_assessment-profile_workshop">
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                </div>
                <div className="services-profile_workshop">
                    <hr className="divisor_services-profile_workshop" />
                    <h1 className="title_services-profile_workshop">Serviços</h1>
                    <div className="content_services-profile_workshop">
                        {servicos.map((servico) => (
                            <p className="service-profile_workshop">{servico.descricaoServico}</p>
                        ))}
                    </div>
                    <hr className="divisor_services-profile_workshop" />
                </div>
                <div className="scheduling-profile_workshop">
                    <h1 className="title_scheduling-profile_workshop">Agendar Visita</h1>
                    <div className="fields_scheduling-profile_workshop">
                        <div className="field_scheduling-profile_workshop">
                            <label htmlFor="data_schedule">Data:</label>
                            <input onChange={handleInput} type="date" name="data" id="data" />
                        </div>
                        <div className="field_scheduling-profile_workshop">
                            <label htmlFor="schedule">Horario:</label>
                            <input onChange={handleInput} type="time" name="horario" id="horario" />
                        </div>
                    </div>
                    <textarea onChange={handleInput} name="texto" id="texto" placeholder="Estou entrando em contato pois..." className="msg_scheduling-profile_workshop"></textarea>
                    <Button type="submit" onClick={enviarMensagem} classNameButton="btn_scheduling-profile_workshop" >Agendar</Button>
                </div>
            </div>

        </div>
    )
}