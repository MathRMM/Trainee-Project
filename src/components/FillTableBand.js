import Button from "./layout/material/Button";
import DeleteBrand from "./layout/material/DeleteBrand";

export default function FillTableBrand({ brand }) {
    let i = 0
    console.log(brand)
    return (
        i = i + 1,
        <tr id={i}>
            <td>{brand.name}</td>
            <td>
                <Button>Editar</Button>
                <Button onClick={() => DeleteBrand(brand)}>Excluir</Button>
            </td>
        </tr>

    );
}