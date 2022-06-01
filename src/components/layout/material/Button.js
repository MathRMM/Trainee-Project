import styled from "styled-components";

    function Button(props){
        return(
            <Btn>
                {props.children}
            </Btn>
        )
    }
const Btn = styled.button`
    width:60px;
    background-color: rgb(255, 255, 255);
    margin: 2px;
    padding: 5px 5px;
    color: #0066ff;

    border-radius: 5px;
    border-color: #0066ff;
`

export default Button;