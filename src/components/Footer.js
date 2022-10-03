import styled from "styled-components";

export default function Footer(props){
    const {totalDePerguntas, respostasConcluidas, setRespostasConcluidas, 
        respostaAberta, setRespostaAberta, statusRespostas, setStatusRespostas} = props

    function contabilizaConcluidos(cor){
        for(let i = 0; i < totalDePerguntas; i++){
            if(respostaAberta[i]){
                setRespostasConcluidas(respostasConcluidas+1)
                let novoStatusGeral = statusRespostas
                novoStatusGeral[i] = cor
                setStatusRespostas(novoStatusGeral)
                let novaRespostaAberta = respostaAberta
                novaRespostaAberta[i] = false
                setRespostaAberta(novaRespostaAberta)
                break
            }
        }
    }

    return(
        <FooterConcluidos>
            <div>
                <Button cor="#FF3030" data-identifier="forgot-btn" onClick={() => contabilizaConcluidos("#FF3030")}>Não lembrei</Button>
                <Button cor="#FF922E" data-identifier="almost-forgot-btn" onClick={() => contabilizaConcluidos("#FF922E")}>Quase não lembrei</Button>
                <Button cor="#2FBE34" data-identifier="zap-btn" onClick={() => contabilizaConcluidos("#2FBE34")}>Zap!</Button>
            </div>
            <p data-identifier="flashcard-counter">{respostasConcluidas}/{totalDePerguntas} CONCLUÍDOS</p>
        </FooterConcluidos>
    )
}

const Button = styled.button`
    width: 85px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    padding:5px;
    border:0;

    background-color: ${(props) => props.cor}
`

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

    div{
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }

`