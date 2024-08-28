import express from "express";
import { servicoBuscarFatoPorAno, servicoValidaAno } from "./servicos/servico.js";
const app = express();

app.get("/", (req, res) => {
  let anoFato = req.query.ano;

  if (servicoValidaAno(anoFato)) {
    let fato = servicoBuscarFatoPorAno(anoFato);
    res.json({ fato: fato });
  } else {
    res.status(400).json({ erro: "Ano inválido" });
  }
});

app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor iniciado em: " + data);
});
