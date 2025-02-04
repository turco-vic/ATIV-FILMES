// 1. Carregar variáveis de ambiente
require("dotenv").config();

// 2. Importação das dependências
const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes");

// 3. Configuração da aplicação
const app = express();
const PORT = process.env.PORT || 3000;

// 4. Middlewares
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Habilitar o parsing de JSON nas requisições

// 5. Definir as rotas a serem usadas
app.use("/api", movieRoutes);

// 6. Rota de teste (opcional)
app.get("/", (req, res) => {
    res.send("ROTA TA FUNCIONANTE!!!!🚀🚀🚀");
});

// 7. Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
