/* import SaveCar from "./SaveBrand" */

import { Link } from "react-router-dom";

import useState from 'react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styled from "styled-components";
import axios from "axios";

export default function NewBrand() {

    /* ------------------ Salvando o novo carro-------------- */
    const [brand, setBrand] = useState({ id: "", name: '' });

    function SaveCar() {
        const request = axios.post("http://localhost:3000/brand", brand)
        request.then((response) => {
            if (response.status === 201) {
                alert("Criado com sucesso!!")
            }
        })
        request.catch((error) => {
            console.log(error)
            if (error.response.status === 500) {
                alert("Esse id já existe, tente outro.")
            }
        })
        console.log(brand)
    }
    /* ------------------ Salvando o novo carro-------------- */

    return (
        <Container>
            <div className="top">
                <h1>Nova Marca</h1>
            </div>

            <Content>
                <div className="datapost">
                    <TextField
                        className="numberId"
                        label="Numero do ID"
                        type="number"
                        value={brand.id}
                        onChange={evt => setBrand({ ...brand, id: evt.target.value })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="datapost">
                    <TextField
                        id="outlined-basic"
                        label="Nome da Marca"
                        value={brand.name}
                        onChange={evt => setBrand({ ...brand, name: evt.target.value })}
                        variant="outlined" />
                </div>

                <div className="auto-aling">
                    <Button onClick={SaveCar}>Salvar</Button>
                    <Link to="/car"><Button>Voltar</Button></Link>
                </div>
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
