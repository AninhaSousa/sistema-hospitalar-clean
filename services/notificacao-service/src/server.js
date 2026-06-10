const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rota que o triagem-service vai chamar via HTTP (POST)
app.post("/notificar", (req, res) => {
  const { mensagem } = req.body;

  if (!mensagem) {
    return res.status(400).json({ erro: "Mensagem não fornecida." });
  }

  // Aqui é onde o padrão Observer ganha vida na arquitetura distribuída
  console.log(`\n🔔 [NOTIFICAÇÃO RECEBIDA]: ${mensagem}\n`);

  return res.status(200).json({ sucesso: true });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`🔔 notificacao-service rodando na porta ${PORT}`);
});