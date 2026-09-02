function func_dispo(disponibilidade) {
  return disponibilidade ? "Disponível" : "Indisponível";
}

function CardServico({ icone, titulo, descricao, modalidade, disponibilidade }) {
  return (
    <article className="card-servico">
      <span className="icone-servico" aria-hidden="true">{icone}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <span className="modalidade">{modalidade}</span>
      <br />
      <small>{func_dispo(disponibilidade)}</small>
    </article>
  );
}

export default CardServico;