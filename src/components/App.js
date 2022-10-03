import styled from 'styled-components'
import perguntas from '../perguntas'
import respostas from '../respostas'
import Logo from './Logo'
import ListaPerguntas from './ListaPerguntas'
import Footer from './Footer'
import { useState } from 'react'
import GlobalStyle from './GlobalStyle'

export default function App(){
    const [respostasConcluidas, setRespostasConcluidas] = useState(0)
    const [respostaAberta, setRespostaAberta] = useState(Array(perguntas.length).fill(false))
    const [statusRespostas, setStatusRespostas] = useState(Array(perguntas.length).fill("#333333"))

    return(
        <>
        <GlobalStyle/>
        <ScreenContainer>

        <Logo/>

        <ListaPerguntas perguntas={perguntas} respostas={respostas} respostaAberta={respostaAberta}
        setRespostaAberta={setRespostaAberta} statusRespostas={statusRespostas}/>

        <Footer totalDePerguntas={perguntas.length} respostasConcluidas={respostasConcluidas} 
        setRespostasConcluidas={setRespostasConcluidas} respostaAberta={respostaAberta} 
        setRespostaAberta={setRespostaAberta} 
        statusRespostas={statusRespostas} setStatusRespostas={setStatusRespostas}/>

        </ScreenContainer>
        </>
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