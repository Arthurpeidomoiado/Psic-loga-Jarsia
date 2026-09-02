import CardServico from "./CardServico";
import { servicos } from "../componentes/Conteudo";

function Servicos() {
  return (
    <section className="secao secao-clara" id="servicos">
      <div className="container">
        <p className="titulo-secao">Serviços</p>
        <h2>Possibilidades de cuidado</h2>
        <div className="grade-servicos">
          {servicos.map((servico) => (
            <CardServico
              key={servico.id}
              icone={servico.icone}
              titulo={servico.titulo}
              descricao={servico.descricao}
              modalidade={servico.modalidade}
              disponibilidade={servico.diponibilidade}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;