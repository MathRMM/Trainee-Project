import axios from "axios";
import { useEffect, useState } from 'react';

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";



/* -------------Definições----------------- */

const promise = axios.get("http://localhost:3000/brand");


/* -------------startando ----------- */

export default function Brand() {

    const [dice, setDice] = useState([]);
    useEffect(() => {
        promise.then((response) => {
            const data = response.data
            console.log(data)
            setDice(data)
        });
    }, []);

    function Preenchertabela({ name }) {
        let i = 0
        return (
            i = i + 1,
            <tr id={i}>
                <td>{name}</td>
                <td>
                    <Button>Editar</Button>
                    <Button>Excluir</Button>
                </td>
            </tr>

        );
    }
    console.log(dice)
    return (
        <div className="tablepage">
            <div className="top">
                <h1>
                    Marcas
                </h1>
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
                    {dice.map((dados) => (
                        <Preenchertabela
                            name={dados.name}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
