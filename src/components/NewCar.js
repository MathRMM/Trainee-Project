import axios from "axios";

import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from '@mui/material/Stack';

import styled from "styled-components";


export default function NewCar() {

    const promise = axios.get("http://localhost:3000/brand");

    const [dice, setDice] = useState([]);

    useEffect(() => {

        promise.then((response) => {
            const data = response.data
            console.log(data)
            setDice(data)
        });
    }, []);

    let listBrands = []
    let i = 0
    dice.map((brands) => {
        listBrands[i] = brands
        i += 1
    })

    console.log(listBrands)

    const defaultProps = {
        options: listBrands,
        getOptionLabel: (option) => option.name,
    };


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
                        renderInput={(params) => (
                            <TextField {...params} label="Marca" />
                        )}
                    />

                    <div className="datapost">
                        <TextField id="outlined-basic" label="Placa" variant="outlined" />
                    </div>

                    <div className="datapost">
                        <TextField id="outlined-basic" label="Cor" variant="outlined" />
                    </div>

                    <div className="auto-aling">
                        <Button>Salvar</Button>
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

