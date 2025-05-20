import { useState } from 'react';
import { useNavigate } from "react-router-dom";
interface Props {
  onVoltar?: () => void;
}

export default function TelaCadastro({ onVoltar }: Props) {
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const nome = (form.elements.namedItem('nome') as HTMLInputElement).value.trim();
    const nascimento = (form.elements.namedItem('nascimento') as HTMLInputElement).value;
    const cpf = (form.elements.namedItem('cpf') as HTMLInputElement).value.trim();
    const sala = (form.elements.namedItem('sala') as HTMLInputElement).value.trim();

    if (!nome || !nascimento || !cpf || !sala) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!/^\d{11}$/.test(cpf)) {
      alert('CPF deve conter exatamente 11 dígitos numéricos.');
      return;
    }

    try {
      const res = await fetch('https://seu-backend.com/api/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, nascimento, cpf, sala }),
      });

      if (res.ok) {
        setMensagem('Cadastro realizado com sucesso!');
        form.reset();
      } else {
        alert('Erro ao cadastrar.');
      }
    } catch {
      alert('Erro de conexão.');
    }
  };

  return (
    <div className="tela-cadastro">
      <button className="voltar" onClick={() => navigate("/")}>←</button>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" required />
        <input type="date" name="nascimento" required />
        <input type="text" name="cpf" placeholder="CPF" required />
        <input type="text" name="sala" placeholder="Número da sala" required />
        <button type="submit">Cadastrar</button>
      </form>
      <p id="mensagem">{mensagem}</p>
    </div>
  );
}
