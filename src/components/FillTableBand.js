import Button from "./layout/material/Button";

export default function FillTableBrand({ name }) {
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