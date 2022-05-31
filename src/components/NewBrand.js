import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export default function NewBrand() {

    

    return (
        <Container>
            <div className="top">
                <h1>Nova Marca</h1>
            </div>

            <Content>

                <div className="datapost">
                    <TextField
                        id="outlined-number"
                        label="Numero do ID"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="datapost">
                    <TextField id="outlined-basic" label="Nome da Marca" variant="outlined" />
                </div>

                <div className="auto-aling">
                    <Button>Salvar</Button>
                    <Link to = "/car"><Button>Voltar</Button></Link>
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
