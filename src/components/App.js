import styled from 'styled-components'
import perguntas from '../perguntas'
import respostas from '../respostas'
import Logo from './Logo'
import ListaPerguntas from './ListaPerguntas'
import Footer from './Footer'

export default function App(){

    return(
        <ScreenContainer>
            <Logo/>
            <ListaPerguntas perguntas={perguntas} respostas={respostas}/>
            <Footer/>
        </ScreenContainer>
    )

}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`