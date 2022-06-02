import Button from "./layout/material/Button";
import DeleteCar from "./layout/material/DeleteCar";

export default function FillTableCar({ car }) {
    let i = 0
    return (
        i = i + 1,
        <tr key={car.id}>
            <td>{car.plate}</td>
            <td>{car.color}</td>
            <td>{car.brand}</td>
            <td>
                <Button>Editar</Button>
                <Button onClick={() => DeleteCar(car)}>Excluir</Button>
            </td>
        </tr>

    );
}