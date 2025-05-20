import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  TextField,
  Box,
} from "@mui/material";

const ReservarMaterial = () => {
  const [material, setMaterial] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const navigate = useNavigate();

  const salvarReserva = (reserva: any) => {
    const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
  };

  const handleSubimit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!material || !quantidade) {
      alert("Preencha os campos.");
      return;
    }

    salvarReserva({ tipo: "Material", descricao: material, quantidade });
    alert("Material reservado com sucesso.");
    navigate("/home");
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubimit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        margin: "auto",
        mt: 5,
      }}
    >
      <TextField
        label="Material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        required
      />
      <TextField
        label="Quantidade"
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Reservar
      </Button>

      <Button className="btn-voltar" type="button" variant="outlined" onClick={() => navigate("/home")}>
        Voltar
      </Button>
    </Box>
  )
}

export default ReservarMaterial;

