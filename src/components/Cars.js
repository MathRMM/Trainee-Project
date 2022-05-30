import axios from "axios";
import { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
/* -------------Definições----------------- */

const promise = axios.get("http://localhost:3000/car");

/* -------------startando ----------- */

function Cars() {

    const [dice, setDice] = useState([]);

    useEffect(() => {

        promise.then((response) => {
            const data = response.data
            console.log(data)
            setDice(data)
        });
    }, []);

    function Preenchertabela({ dicePlate, diceColor, diceBrand }) {
        let i = 0
        return (
            i = i + 1,
            <tr id={i}>
                <td>{dicePlate}</td>
                <td>{diceColor}</td>
                <td>{diceBrand}</td>
                <td>
                    <Button>Editar</Button>
                    <Button>Excluir</Button>
                </td>
            </tr>

        );
    }
    /*   console.log(dice); */

    return (
        <div className="tablepage">
            <div className="top">
                <h1>
                    Carros
                </h1>
                <Button variant="outlined">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    Novo carro
                </Button>
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
                    {dice.map((dados) => (
                        <Preenchertabela
                            dicePlate={dados.plate}
                            diceColor={dados.color}
                            diceBrand={dados.brand}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Cars

