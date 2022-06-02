import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import Title from "./layout/material/Title";
import Counter from "./layout/material/Counter";
import FillTableCar from "./FillTableCar";

/* -------------startando ----------- */
function Cars(props) {
    if (props.cars !== undefined) {
        return (
            <div className="tablepage">
                <div className="top">
                    <Title>Carros</Title>
                    <Link to="/cars/newcar">
                        <Button variant="outlined">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            Novo carro
                        </Button>
                    </Link>
                </div>
                <table className="list">
                    <thead>
                        <tr>
                            <th>Placa</th>
                            <th>Cor</th>
                            <th>Marca</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cars.map((car) => (
                            <FillTableCar
                                car={car}
                            />
                        ))}
                    </tbody>
                </table>
                <Counter text="carros" value={props.cars.length} />
            </div>
        );
    } else {
        return (
            <Title text="Carregando..." />
        )
    }
}
/* ------------------------ */
export default Cars



