import { useNavigate } from "react-router-dom";


export default function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="tela-inicial">
      <div className="logo">📖</div>
      <h1>
        <span className="titulo-home">SCHOOL</span><br />RESERVE
      </h1>
      <div className="botoes">
        <button onClick={() => navigate("/tela-cadastro")}>Cadastrar</button>
        <button onClick={() => navigate("/tela-login")}>Entrar</button>
      </div>
    </div>
  );
}