import FillTable from "./FillTableBand";
import Title from "./layout/material/Title";
import Counter from "./layout/material/Counter";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

/* -------------startando ----------- */

export default function Brand(props) {
console.log(props.brands)
    if(props.brands !== undefined){
    return (
        <div className="tablepage">
            <div className="top">
                <Title text = "Marca"/>
                <Link to="/cars/newbrand" >
                    <Button variant="outlined">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Nova Marca
                    </Button>
                </Link>
            </div>

            <table className="list">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.brands.map((dados) => (
                        <FillTable
                            name={dados.name}
                        />
                    ))}
                </tbody>
            </table>
            <Counter text="marcas" value={props.brands.length}/>
        </div>
    )
}else {
    return(
        <Title text = "Carregando..." />
    )
}
}
