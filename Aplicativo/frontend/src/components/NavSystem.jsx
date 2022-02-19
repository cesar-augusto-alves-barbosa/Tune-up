import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoEms from "../assets/img/EMS-Sem-Fundo-Black.png";
import api from "../services/api";
import "../assets/css/nav_system.css"

export default function NavSystem() {
  const [usuario, getUsuario] = useState([]);

  useEffect(() => {
    async function getUser() {
      const resposta = await api.get(`/proprietarios/proprietario/${sessionStorage.getItem('emailProprietario')}`);
      getUsuario(resposta.data);
    }
    getUser();
  }, []);

  return (
    <>
      <nav id="nav_id" className="navigation_system">
        <div className="topbar_navigation_system">
          <a className="btn_login_system">
            {sessionStorage.setItem('idProprietario', usuario.id)}
            {usuario.nome}</a>
          <i className="far fa-user-circle"></i>
        </div>
        <div className="bottombar_navigation_system">
          <img className="logo_navigation_system" src={logoEms} alt="Logo da empresa tuneup" />
          <div className="links_navigation_system">
            {/* <Link to="/dashboard"><button className="link_navigation_system">DASHBOARD</button></Link> */}
            <a className="nav-title-system" href="/ordem-de-servico"><button className="link_navigation_system">ORDEM DE SERVIÇO</button></a>
            <a className="nav-title-system" href="/visualizacao-cliente"><button className="link_navigation_system">CLIENTES</button></a>
            <a className="nav-title-system" href="/visualizacao-funcionario"><button className="link_navigation_system">FUNCIONÁRIOS</button></a>
          </div>
        </div>
      </nav>
    </>
  )
}