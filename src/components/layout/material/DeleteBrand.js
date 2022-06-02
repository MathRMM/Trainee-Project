import axios from "axios"

export default function DeleteBrand(brand) {
    axios.delete(`http://localhost:3000/brands/${brand.id}`)
        .then(console.log("foi"))
    return (
        alert("Marca excluida")
    )
}