import React from "react"
import NavSystem from '../components/NavSystem';
import logoTuneUp from "../assets/img/Tune-Up.png";
import "../assets/reset.css";
import "../assets/home.css";

export default function Home_System() {
    return (
        <React.Fragment>
        <NavSystem />
        <div class="container">
        <div class="div_banner">
            <img src={logoTuneUp} class="title_banner" alt="Logo da TuneUp"/>
        </div>
    </div>
    </React.Fragment>
    );
}