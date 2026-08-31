import { servicos2 } from "./Conteudo2";
import Perguntas_Componente from "./Pergutas_Componente"
function Perguntas(){
    return(
        <section>
            <h1>Perguntas e respostas</h1>
            <div>{servicos2.map((servico2)=> 
                (<Perguntas_Componente
                    key={servico2.id} 
                    pergunta={servico2.pergunta} 
                    resposta={servico2.resposta}
                />
            )
            )
            }</div>
        </section>
    );
}
export default Perguntas