import Pergunta from "./Pergunta"

export default function ListaPerguntas(props){
    const {perguntas, respostas, respostaAberta, setRespostaAberta, statusRespostas} = props

    return(
        <div>
            {perguntas.map((pergunta, index) => <Pergunta index={index} pergunta={pergunta} resposta={respostas[index]}
            respostaAberta={respostaAberta} setRespostaAberta={setRespostaAberta} statusRespostas={statusRespostas}/>)}
        </div>
    )
}