import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

const ReservarSala = () => {
  const [sala, setSala] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [periodo, setPeriodo] = useState("");
  const navigate = useNavigate();

  const salvarReserva = (reserva: any) => {
    const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
  };

  const handleSubimit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sala || !data || !hora || !periodo) {
      alert("Preencha os campos.");
      return;
    }

    salvarReserva({ tipo: "Sala", descricao: sala, data, hora, periodo });
    alert("Sala reservada com sucesso");
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
      <FormControl fullWidth required>
        <InputLabel id="select-sala-label">Selecione a sala</InputLabel>
        <Select
          labelId="select-sala-label"
          value={sala}
          label="Selecione a sala"
          onChange={(e) => setSala(e.target.value)}
        >
          <MenuItem value="Sala 101">Sala 101</MenuItem>
          <MenuItem value="Sala 102">Sala 102</MenuItem>
          <MenuItem value="Sala 103">Sala 103</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Data"
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        InputLabelProps={{ shrink: true }}
        required
      />

      <TextField
        label="Hora"
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        InputLabelProps={{ shrink: true }}>
      </TextField>

      <FormControl fullWidth required>
        <InputLabel id="select-periodo-label">Período</InputLabel>
        <Select
          labelId="select-periodo-label"
          value={periodo}
          label="Período"
          onChange={(e) => setPeriodo(e.target.value)}
        >
          <MenuItem value="Manhã">Manhã</MenuItem>
          <MenuItem value="Tarde">Tarde</MenuItem>
          <MenuItem value="Noite">Noite</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Reservar
      </Button>

      <Button className="btn-voltar" type="button" variant="outlined" onClick={() => navigate("/home")}>
        Voltar
      </Button>
    </Box>
  );
};

export default ReservarSala;