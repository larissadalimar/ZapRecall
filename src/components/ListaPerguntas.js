import Pergunta from "./Pergunta"

export default function ListaPerguntas(props){
    const {perguntas, respostas} = props

    return(
        <div>
            {perguntas.map((pergunta, index) => <Pergunta index={index + 1} pergunta={pergunta} resposta={respostas[index]}/>)}
        </div>
    )
}