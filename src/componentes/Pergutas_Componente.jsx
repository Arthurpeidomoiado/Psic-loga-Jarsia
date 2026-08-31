function Perguntas_Componente({pergunta,resposta}){
    return(
        <section className="botao">
            <p>
                {pergunta}
            </p>
            <small>{resposta}</small>
        </section>
    );
}
export default Perguntas_Componente