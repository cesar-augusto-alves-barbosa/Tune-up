import { Link } from 'react-router-dom';
import logoNav from '../assets/img/Tune-Up.png';

export default function Nav() {
    return (
        <nav className="navigation">
            <div className="topbar_navigation">
                <Link to="/proprietarios/login" className="btn_login">Entrar</Link>
                <i className="far fa-user-circle"></i>
            </div>
            <div className="bottombar_navigation">
                <img className="logo_navigation" src={logoNav} alt="Logo da empresa tuneup" />
                <div className="links_navigation-home">
                    <a href="#navegacao-paginainicial" className="link_navigation-home">PÁGINA INICIAL</a>
                    <a href="#navegacao-sobrenos" className="link_navigation-home">QUEM SOMOS</a>
                    <a href="#navegacao-ems" className="link_navigation-home">EMS</a>
                    <a href="#navegacao-contato" className="link_navigation-home">CONTATO CONOSCO</a>
                </div>
            </div>
        </nav>
    );
}