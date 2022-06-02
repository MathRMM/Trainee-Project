import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

export default function Header() {
    return (
        <header>
            <div className="banner">
                <h1>
                    Gerenciamento de Veiculos
                </h1>
            </div>
            <div className="buttons">
                <Link to="/cars" > <Button variant="contained">Carro</Button></Link>
                <Link to="/cars/brand"><Button variant="contained">Marca</Button></Link>
            </div>
        </header>
    )
}
