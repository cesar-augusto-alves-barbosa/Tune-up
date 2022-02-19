import { Link } from "react-router-dom";
import "../assets/css/workshop.css";

export default function Workshop({ id, img, name, address, }) {
    return (
        <div className="workshop">
            <img src={img} alt={"Imagem da oficina " + name} />
            <div className="workshop_details">
                <div className="name-address">
                    <h2 className="name-workshop">{name}</h2>
                    <p className="workshop_address">{address}</p>
                </div>
                <Link to={`profile-workshop/${id}`} className="btn-details btn" >Detalhes da oficina</Link>
            </div>
        </div>
    )
}