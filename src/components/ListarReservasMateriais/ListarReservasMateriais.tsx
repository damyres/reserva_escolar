import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, List, ListItem, ListItemText } from "@mui/material";

const ListarReservasMateriais = () => {
  const [reservas, setReservas] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedReservas = JSON.parse(localStorage.getItem("reservas") || "[]");
    const reservasFiltradas = storedReservas.filter((reserva: any) => reserva.tipo === "Material");
    setReservas(reservasFiltradas);
  }, []);

  const cancelarReserva = (index: number) => {
    const novasReservas = reservas.filter((_, i) => i !== index);
    setReservas(novasReservas);
    localStorage.setItem("reservas", JSON.stringify(novasReservas));
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        margin: "auto",
        mt: 5,
      }}
    >
      <h2>Lista de Reservas de Materiais</h2>
      {reservas.length > 0 ? (
        <List>
          {reservas.map((reserva, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`${reserva.descricao} - ${reserva.quantidade}`}
              />
              <Button
                variant="contained"
                color="error"
                onClick={() => cancelarReserva(index)}
              >
                Cancelar
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Nenhuma reserva encontrada</p>
      )}

      <Button className="btn-voltar2" variant="outlined" onClick={() => navigate("/home")}>
        Voltar
      </Button>
    </Box>
  )
};

export default ListarReservasMateriais;