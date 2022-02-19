import logo from "../assets/img/Tune-Up.png";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Workshop from "./Workshop";
import Img from "../assets/img/Car-Workshop.jpg";
import "../assets/css/search.css";
import api from "../services/api";

export default function Search({ functionSearch, handleInput }) {


    return (
        <div className="search" id="searchScreen">
            <div className="box_search" id="boxScreen">
                <img src={logo} alt="" />
                <h1 className="title">BUSCAR POR OFICINAS</h1>
                <div className="inputs_search">
                    <div className="field">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="nome" id="nameWorkshop" onChange={handleInput} />
                    </div>
                    {/* <div className="field">
                        <label htmlFor="city">Cidade:</label>
                        <input type="text" name="city" />
                    </div> */}
                    {/* <div className="field">
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" name="cep" />
                    </div> */}
                </div>
                <div className="buttons_search">
                    <Button onClick={hideSearch}>Cancelar</Button>
                    <Button onClick={hideAndSearch}>Buscar</Button>
                </div>
            </div>
        </div>
    )
    function hideAndSearch() {
        functionSearch();
        const search = document.getElementById("searchScreen");
        const boxSearch = document.getElementById("boxScreen");
        const containerPage = document.getElementById("containerPage");
        search.style.display = "none";
        boxSearch.style.display = "none";
        containerPage.style.filter = "blur(0px)";
    }
    function hideSearch() {
        functionSearch();
        const search = document.getElementById("searchScreen");
        const boxSearch = document.getElementById("boxScreen");
        const containerPage = document.getElementById("containerPage");
        search.style.display = "none";
        boxSearch.style.display = "none";
        containerPage.style.filter = "blur(0px)";
    }
}




