import styled from "styled-components";
import useBack from "../../components/hooks/useBack"

const Box = styled.div`
    border-radius: 10px;
    width: 200px;
    height:200px;
    border-style: solid;
    border-color: black;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items: center;
`


function Card() {

    return(
        <Box>
            <img src=""></img>
            <p>Nome: Bulbasaur</p>
            <div>
                <button>Adicionar</button>
                <button onClick={useBack('/detalhes')}>Detalhes</button>
            </div>
        </Box>
    )
}
export default Card;