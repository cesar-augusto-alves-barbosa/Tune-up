import React from "react"
import NavSystem from '../components/NavSystem';
import ImgDash from "../assets/img/image-dash-teste.png";
import "../assets/reset.css";
import "../assets/home.css";
import '../assets/css/style_dashboards.css';

export default function Dashboard() {
    return (
        <React.Fragment>
            <NavSystem />
            <div className="showcase-dash">
                <div className="cards_dashboard">

                    <div className="card_dashboard g-1">
                        <img src={ImgDash} alt="" />
                    </div>

                    <div className="card_dashboard g-1">
                        <img src={ImgDash} alt="" />
                    </div>
                </div>

                <div className="cards-status-os">
                    <div className="cardg-2">
                        <img src={ImgDash} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}