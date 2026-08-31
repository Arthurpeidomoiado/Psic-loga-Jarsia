import "./App.css";
import Header from "./componentes/Header.jsx";
import Hero from "./componentes/Hero.jsx";
import Sobre from "./componentes/Sobre.jsx";
import Servicos from "./componentes/Servicos.jsx";
import Beneficios from "./componentes/Beneficios.jsx";
import Depoimentos from "./componentes/Depoimentos.jsx";
import Contato from "./componentes/Contato.jsx";
import Footer from "./componentes/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Beneficios />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;