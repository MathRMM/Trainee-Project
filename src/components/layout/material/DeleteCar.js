import axios from "axios"

export default function DeleteCar(car) {
    axios.delete(`http://localhost:3000/cars/${car.id}`)
        .then(console.log("foi"))
    return (
        alert("Carro excluido")
    )
}