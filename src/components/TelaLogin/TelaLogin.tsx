import { useNavigate } from "react-router-dom";
import { useState } from 'react';


interface Props {
  onVoltar?: () => void;
}

export default function TelaLogin({ onVoltar }: Props) {
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const cpf = (form.elements.namedItem('cpf') as HTMLInputElement).value.trim();
    const sala = (form.elements.namedItem('sala') as HTMLInputElement).value.trim();

    if (!cpf || !sala) {
      alert('Preencha todos os campos.');
      return;
    }

    if (!/^\d{11}$/.test(cpf)) {
      alert('CPF inválido. Deve ter 11 dígitos numéricos.');
      return;
    }
    setMensagem('Login simulado com sucesso!');
    form.reset();
    navigate("/home");
    /* parte de autenticação do login, ignorado para fazer o fluxo de login sem backend
    try {
       const res = await fetch('https://seu-backend.com/api/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ cpf, sala }),
       });
 
       if (res.ok) {
         setMensagem('Login realizado com sucesso!');
         form.reset();
         navigate("/home");
       } else {
         alert('CPF ou sala incorretos.');
       }
     } catch
       {
       alert('Erro de conexão.');
     }
     */
  };

  return (
    <div className="tela-login">
      <button className="voltar" onClick={() => navigate("/")}>←</button>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" name="cpf" placeholder="CPF" required />
        <input type="text" name="sala" placeholder="Número da sala" required />
        <button type="submit">Entrar</button>
      </form>
      <p id="loginMensagem">{mensagem}</p>
    </div>
  );
}
