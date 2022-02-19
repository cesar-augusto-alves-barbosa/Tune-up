import { Link } from 'react-router-dom';
import logoNav from '../assets/img/Tune-Up.png';

export default function Nav() {
    return (
        <nav className="navigation" >
            <div className="topbar_navigation">
                <Link to="/login" className="btn_login">Entrar</Link>
                <i className="far fa-user-circle"></i>
            </div>
            <div className="bottombar_navigation">
                <img className="logo_navigation" src={logoNav} alt="Logo da empresa tuneup" />
                <div className="links_navigation">
                    <button className="link_navigation">PÁGINA INICIAL</button>
                    <button className="link_navigation">QUEM SOMOS</button>
                    <button className="link_navigation">EMS</button>
                    <button className="link_navigation">CONTATO CONOSCO</button>
                </div>
            </div>
        </nav>
    );
}