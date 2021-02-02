import styled from "styled-components";
import useBack from "../../components/hooks/useBack";

const HeaderDiv = styled.div `
    background-color: #FFCB05;
    width: 100vw;
    height: 15vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Botao = styled.button`
   margin-left: 20px;
   margin-right: 20px;
`
const Conteudo = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Img = styled.div`
    width: 200px;
    height: 200px;
    border-style: solid;
    border-color: black;
    margin: 20px;
`
const Stats = styled.div`
    width: 200px;
    height: 430px;
    border-style: solid;
    border-color: black;
    margin-top: 20px;
`
const Type = styled.div`
    width: 400px;
    height: 100px;
    border-style: solid;
    border-color: black;
    margin-top: 20px;
`
const Move = styled.div`
    width: 400px;
    height: 280px;
    border-style: solid;
    border-color: black;
    margin-top: 20px;
`
const Moves = styled.div`
    margin-top: 20px;
    margin-right: 20px;
`
const Detalhes = () => {
    return(
        <div> 
            <HeaderDiv>
                <Botao onClick={useBack('/pokedex')}>Ver minha Pokedex</Botao>
                <h1>Pokemon</h1>
                <Botao>Adicionar/Remover da Pokedex</Botao>
            </HeaderDiv>
            <Conteudo>
                <div>
                    <Img>foto frente</Img>
                    <Img>foto costas</Img>
                </div>
                <Stats>
                    <div>Stats</div>
                </Stats>
                <Moves>
                    <Type>Type</Type>
                    <Move>Moves</Move>
                </Moves>


            </Conteudo>

        </div>
    )
}

export default Detalhes;