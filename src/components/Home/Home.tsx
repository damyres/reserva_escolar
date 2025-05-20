import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="tela-home">
      <Link to="/">
        <button className="voltar">←</button>
      </Link>

      <h1>Bem-vindo!</h1>
      <Link to="/reservar-sala">
        <button>Reservar Sala</button>
      </Link>
      <Link to="/reservar-material">
        <button>Reservar Material</button>
      </Link>
      <Link to="/listar-reservas-salas">
        <button>Listar Reservas de Salas</button>
      </Link>

      <Link to="/listar-reservas-materiais">
        <button>Listar Reservas de Materiais</button>
      </Link>
    </div>
  );
};

export default Home;
