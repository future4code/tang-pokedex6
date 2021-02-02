import styled from "styled-components";
import Card from "../../components/Card/Card";
import useBack from "../../components/hooks/useBack";

const HeaderDiv = styled.div `
    background-color: #FFCB05;
    width: 100vw;
    height: 15vh;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30%;
`
const Catalogo = styled.div`
 margin: 1em 0.5em;
  display: grid;
  grid-template: 1fr 1fr / repeat(4, 1fr);
  gap: 0.5em;
`
const Botao = styled.button`
   margin-left: 20px;
`

const Home = () => {
    return(
        <div>
            <HeaderDiv>
                <Botao onClick={useBack('/pokedex')}>Ver minha Pokedex</Botao>
                <h1>Lista de Pokemons</h1>
            </HeaderDiv>
            <Catalogo>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>             
            </Catalogo>
        </div>
    )
}

export default Home;