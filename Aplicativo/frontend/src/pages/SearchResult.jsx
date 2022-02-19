import NavMechanic from "../components/NavMechanic";
import Img from "../assets/img/Car-Workshop.jpg";
import React, { useEffect, useState } from "react";
import Workshop from "../components/Workshop";
import "../assets/css/search-result.css";
import Search from "../components/Search";
import Button from "../components/Button";
import api from "../services/api";
import NavSimple from "../components/NavSimple";

export default function SearchResult() {
    const [listaOficina, getOficina] = useState([]);
    const [nomeOficina, setNomeOficina] = useState({
        nome: sessionStorage.nameSearch
    });
    useEffect(() => {
        searchByNome()
        // searchByBairro()
    }, []);
    async function searchByNome() {
        try {
            const resposta = await api.get(`oficinas/search/nome/${nomeOficina.nome}`);
            getOficina(resposta.data);

        } catch (err) {
            console.log(err);
        }
    }

    // async function searchByBairro() {
    //     try {
    //         const resposta = await api.get(`oficinas/search/bairro/${nomeOficina.nome}`);
    //         getOficina(resposta.data);

    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    function handleInput(evento) {
        const { name, value } = evento.target;
        setNomeOficina({
            ...nomeOficina,
            [name]: value
        });
    }
    return (
        <div>
            <Search functionSearch={searchByNome} handleInput={handleInput} />

            <div className="container" id="containerPage">
                <NavSimple />
                <div className="search_field">
                    <Button onClick={showSearch} classNameButton="btn_search">BUSCAR OFICINAS</Button>
                </div>
                <div className="box_workshops" id="workshops-search">
                    {listaOficina.map((oficina) => (

                        < Workshop id={oficina.id} img={Img} name={oficina.nome} address={
                            oficina.rua
                            + ", " +
                            oficina.numero
                            + " - " +
                            oficina.bairro
                            + ", " +
                            oficina.complemento
                            + "."
                        } />
                    ))}
                </div>
            </div>
        </div>
    );
}
function showSearch() {
    const search = document.getElementById("searchScreen");
    const boxSearch = document.getElementById("boxScreen");
    const containerPage = document.getElementById("containerPage");
    search.style.display = "flex";
    boxSearch.style.display = "flex";
    containerPage.style.filter = "blur(3px)";
}
