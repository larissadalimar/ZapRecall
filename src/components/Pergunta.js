import { useState } from "react";
import styled from "styled-components";
import seta from '../assets/img/seta_play.png'
import seta_virar from '../assets/img/seta_virar.png'
import icone_erro from '../assets/img/icone_erro.png'
import icone_certo from '../assets/img/icone_certo.png'
import icone_quase from '../assets/img/icone_quase.png'


export default function Pergunta(props){

    const {index, pergunta, resposta, respostaAberta, setRespostaAberta, statusRespostas} = props
 

    const [opened, setOpened] = useState(false)
    const [textoCard, setTextoCard] = useState(pergunta)
    const [displaySeta, setDisplaySeta] = useState("flex");

    const riscado = statusRespostas[index] !== "#333333"? true: false
    const imagem = statusRespostas[index] === "#333333"? seta : 
    (statusRespostas[index] === "#FF3030"? icone_erro : 
    (statusRespostas[index] === "#FF922E"? icone_quase : icone_certo))

    function mostraResposta(){
        setTextoCard(resposta) 
        setDisplaySeta("none") 
        let novaRespostaAberta = respostaAberta
        novaRespostaAberta[index] = true
        setRespostaAberta(novaRespostaAberta)
    }

    return(
        <>
        {opened && !riscado? 
            (<PerguntaAberta data-identifier="flashcard" displaySeta={displaySeta}>
                <p data-identifier="flashcard-question flashcard-answer" >{textoCard}</p>
                <img data-identifier="flashcard-turn-btn" src={seta_virar} onClick={mostraResposta}/>
            </PerguntaAberta>) :
            (<PerguntaFechada data-identifier="flashcard" status={statusRespostas[index]} riscado={riscado}>
            <p data-identifier="flashcard-index-item" >Pergunta {index + 1}</p>
            <img data-identifier="flashcard-show-btn flashcard-status" src={imagem} onClick={() => setOpened(true)}/>
            </PerguntaFechada>) 
        }
        </>
    )
}

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    display:${(props) => props.displaySeta}
  }
`

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-decoration: ${props=>props.riscado?'line-through':'none'};
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.status};
  }
`

