const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000 


app.use(express.json());
app.use(cors())



app.get("/pegar/usuario", async function (req, res) {
    try {
        // Consultar dados da tabela usuario
        const [rows, fields] = await pool.query('SELECT * FROM usuario');

        return res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao obter os usuários.' });
    }
})






app.listen(port, function () {
    console.log("Servidor rodando na porta"+ port)
})