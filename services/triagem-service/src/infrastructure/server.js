const express = require("express");
const cors = require("cors");
const path = require("path");
const GerenciadorConsultas = require("./GerenciadorConsultas");
const NotificadorHttp = require("./NotificadorHttp");
const HospitalFacade = require("../application/HospitalFacade");

const app = express();
app.use(cors());
app.use(express.json());

const hospital = new HospitalFacade(GerenciadorConsultas, new NotificadorHttp());

// Servir arquivos estáticos do frontend global
app.use(express.static(path.join(__dirname, "../../../../frontend")));

app.post("/agendar", async (req, res) => {
  const consulta = await hospital.agendar(req.body);
  res.json({
    mensagem: `Paciente: ${consulta.paciente}<br>Sintomas: ${consulta.sintomas}<br>Consulta: ${consulta.tipo}<br>Prioridade: ${consulta.prioridade}`
  });
});

app.get("/consultas", (req, res) => {
  res.json(GerenciadorConsultas.listarTodas());
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🏥 triagem-service rodando na porta ${PORT}`);
});