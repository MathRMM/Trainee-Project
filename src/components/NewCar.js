import axios from "axios";



import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from '@mui/material/Stack';

import styled from "styled-components";


export default function NewCar() {

    /* ------------------ Pegando a Marca para seleção-------------- */
    const promise = axios.get("http://localhost:3000/brand");

    const [dice, setDice] = useState([]);

    useEffect(() => {
        promise.then((response) => {
            const data = response.data
            setDice(data)
        });
    }, []);

    let listBrands = []
    let i = 0
    dice.map((brands) => {
        listBrands[i] = brands
        i += 1
    })

    const defaultProps = {
        options: listBrands,
        getOptionLabel: (option) => option.name,
    };
    /* ------------------ Pegando a Marca para seleção-------------- */
    /* ------------------ Salvando o novo carro-------------- */
    const promise2 = axios.get("http://localhost:3000/car")
    const [quantityCars, setQuantityCars] = useState(0)
    promise2.then((response) => {
        setQuantityCars(String(response.data.length))
    })
    const [car, setCar] = useState({
        id: '',
        plate: '',
        color: '',
        brand: ''
    });
    car.id = quantityCars
    function saveCar() {
        const request = axios.post("http://localhost:3000/car", car)
        request.then((response) => {
            if (response.status === 201) {
                alert("Criado com sucesso!!")
            }
        })
        request.catch((error) => {
            if (error.response.status === 500) {
                alert("Esse id já existe, tente outro.")
            }
        })
    }
    /* ------------------ Salvando o novo carro-------------- */

    return (
        <Container>
            <div className="top">
                <h1>Novo Carro</h1>
            </div>

            <Content>
                <Stack spacing={1} sx={{ width: 230 }}>
                    <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        onChange={(evt, newValue) => setCar({ ...car, brand: newValue.name })}
                        renderInput={(params) => (
                            <TextField {...params} label="Marca" />
                        )}
                    />
                    <div className="datapost">
                        <TextField
                            id="outlined-basic"
                            label="Placa"
                            value={car.plate}
                            onChange={evt => setCar({ ...car, plate: evt.target.value })}
                            variant="outlined" />
                    </div>
                    <div className="datapost">
                        <TextField
                            id="outlined-basic"
                            label="Cor"
                            variant="outlined"
                            value={car.color}
                            onChange={evt => setCar({ ...car, color: evt.target.value })} />
                    </div>
                    <div className="auto-aling">
                        <Button onClick={saveCar}>Salvar</Button>
                        <Link to="/car"><Button>Voltar</Button></Link>
                    </div>
                </Stack>
            </Content>
        </Container>
    );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px 25px;
`;

const Content = styled.div`
  margin: 20px 0;
`;

