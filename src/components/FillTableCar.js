import Button from "./layout/material/Button";

export default function Preenchertabela({ dicePlate, diceColor, diceBrand }) {
    let i = 0
    return (
        i = i + 1,
        <tr>
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