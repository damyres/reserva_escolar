import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import Home from "./components/Home/Home";
import ReservarSala from "./components/ReservarSala/ReservarSala";
import ReservarMaterial from "./components/ReservarMaterial/ReservarMaterial";
import "./app.css"
import ListarReservasMateriais from "./components/ListarReservasMateriais/ListarReservasMateriais";
import ListarReservasSalas from "./components/ListarReservasSalas/ListarReservasSalas";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/tela-cadastro" element={<TelaCadastro />} />
      <Route path="/tela-login" element={<TelaLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reservar-sala" element={<ReservarSala />} />
      <Route path="/reservar-material" element={<ReservarMaterial />} />
      <Route path="/listar-reservas-salas" element={<ListarReservasSalas />} />
      <Route path="/listar-reservas-materiais" element={<ListarReservasMateriais />} />
    </Routes>
  </BrowserRouter>
);

export default App;
