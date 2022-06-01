import axios from "axios";



import  {useState}  from 'react';

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from '@mui/material/Stack';

import styled from "styled-components";


export default function NewCar(props) {

    /* ------------------ Pegando a Marca para seleção-------------- */

    let listBrands = []
    let i = 0
    props.brands.map((brands) => {
        listBrands[i] = brands
        i += 1
    })

    const defaultProps = {
        options: listBrands,
        getOptionLabel: (option) => option.name,
    };
    /* -------------------------------- */
    /* ------------------ Salvando o novo carro-------------- */
    const [cars, setCar] = useState({
        id: '',
        plate: '',
        color: '',
        brand: ''
    });
    cars.id = props.cars.length
    function saveCar() {
        const request = axios.post("http://localhost:3000/cars", cars)
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
    /* -------------------------------- */

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
                        onChange={(evt, newValue) => setCar({ ...cars, brand: newValue.name })}
                        renderInput={(params) => (
                            <TextField {...params} label="Marca" />
                        )}
                    />
                    <div className="datapost">
                        <TextField
                            id="outlined-basic"
                            label="Placa"
                            value={cars.plate}
                            onChange={evt => setCar({ ...cars, plate: evt.target.value })}
                            variant="outlined" />
                    </div>
                    <div className="datapost">
                        <TextField
                            id="outlined-basic"
                            label="Cor"
                            variant="outlined"
                            value={cars.color}
                            onChange={evt => setCar({ ...cars, color: evt.target.value })} />
                    </div>
                    <div className="auto-aling">
                        <Button onClick={saveCar}>Salvar</Button>
                        <Link to="/cars"><Button>Voltar</Button></Link>
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

