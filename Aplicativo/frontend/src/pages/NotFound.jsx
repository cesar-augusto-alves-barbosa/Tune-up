import { Link } from "react-router-dom"
import notFound from "../assets/img/not-found.png"
import "../assets/css/style.css"
// import Button from "../components/Button"

export default function NotFound() {
    return (
        <div className="container index">
        <div className="index-content">
          <div className="box-text-index">          
            <div className="info-index not-found">
             <b> <h1>Oops!</h1> </b>
              <h3>A página que você procura não foi encontrada.</h3>
            </div>
            <div className="img-index"></div>
            <Link to="/home-mechanic">
            <button className="btn-voltar">Voltar</button>
            </Link>
          </div>
          <img src={notFound} alt="" className="index-img"/>
        </div>
      </div>
    )
}