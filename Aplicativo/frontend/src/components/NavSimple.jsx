import { Link } from 'react-router-dom';
import logoNav from '../assets/img/Tune-Up.png';
import '../assets/css/nav_search.css';

export default function NavSimple() {
    return (
        <nav className="navigation-search">
            <div className="bar_navigation-search">
                <img className="logo_navigation-search" src={logoNav} alt="Logo da empresa tuneup" />
                <div className="topbar_navigation-simple">
                    <Link to="/usuarios/login" className="btn_login">Entrar</Link>
                    <i className="far fa-user-circle"></i>
                </div>
            </div>
        </nav>
    );
}