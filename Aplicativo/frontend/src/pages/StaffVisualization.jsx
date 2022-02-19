import React, { useEffect, useState } from "react";
import NavSystem from "../components/NavSystem";
import pencil from "../assets/img/pencil.png";
import "../assets/css/staff_visualization.css";
// import "../assets/css/style.css";
// import "../assets/reset.css";
import StaffVisualizationContainer from "../components/StaffVisualizationContainer";
import api from "../services/api";

export default function StaffVisualization() {
    const [funcionario, addFuncionario] = useState([]);

    useEffect(() => {
        async function getFuncionarios() {
            const resposta = await api.get("/proprietarios/funcionario");
            addFuncionario(resposta.data);
        }
        getFuncionarios();
    }, []);

    function changePage() {
        window.location.href = "/employee-registration";
    }
    return (
        <React.Fragment>
            <NavSystem />

            <div className="geral">
                <div>
                    <b>
                        <h1 className="title_staff">FUNCIONÁRIOS</h1>
                    </b>
                </div>


                <div className="background_staff">
                    <div className="geral_container_staff">
                        {funcionario.map((funcionarios) => (
                            <StaffVisualizationContainer
                                id={funcionarios.id}
                                nome={funcionarios.nome}
                                nivel={funcionarios.nivelAcesso}
                            />
                        ))}
                    </div>


                </div>

                <div className="geral_btn_staff">
                    <button className="btn_staff text_btn-system" onClick={changePage}>Adicionar um novo funcionário</button>
                </div>



            </div>

        </React.Fragment>
    );
}