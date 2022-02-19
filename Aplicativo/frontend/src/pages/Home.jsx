import React from "react";
import imgF from '../assets/img/Car-Workshop.jpg'
import lgo from '../assets/img/Tune-Up.png'
import "../assets/css/home.css";
import "../assets/css/home-style.css";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <React.Fragment>
        <title>Seja Bem-Vindo a Tune-Up</title>
        <section className="container-home">
            <img src={imgF} className="imgfundo-home" alt="Fundo" />
            <div className="first-page-home">
                <div className="banner-lgo-home">
                    <img src={lgo} alt="Logo Tune-Up" className="lgo-home" />
                </div>
                <h1>O que você procura?</h1>
                <Link to="home-user"><button className="search-home">Buscar Oficina</button></Link>
                <Link to="home-mechanic"><button className="modern-home">Modernizar Sua Oficina</button></Link>
            </div>
        </section>
        </React.Fragment>
    );
}