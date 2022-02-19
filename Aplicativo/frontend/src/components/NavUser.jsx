import { Link } from 'react-router-dom';
import logoNav from '../assets/img/Tune-Up.png';

export default function Nav() {
    return (
        <nav className="navigation">
          {/* <div className="topbar_navigation">
                <Link to="/usuarios/login" className="btn_login">Entrar</Link>
                <i className="far fa-user-circle"></i>
            </div> */}
            <div className="bottombar_navigation">
                <img className="logo_navigation" src={logoNav} alt="Logo da empresa tuneup" />
                <div className="links_navigation-home">
                    <a href="#containerPage" className="link_navigation-home">PÁGINA INICIAL</a>
                    <a href="#navegacao-sobrenos-usuario" className="link_navigation-home">QUEM SOMOS</a>
                    <a href="#navegacao-buscaroficinas" className="link_navigation-home">BUSCAR OFICINAS</a>
                    <a href="#navegacao-contato-usuario" className="link_navigation-home">CONTATO CONOSCO</a>
                </div>
            </div>
        </nav>
    );
}