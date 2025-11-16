const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

app.get('/moedas', (req, res) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({ error: "Parâmetros faltando. Use: /convert?from=USD&to=BRL&amount=10" });
    }

    try {
        const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;

        const response = await axios.get(url);

        res.json({
            from,
            to,
            amount,
            resultado: response.data.result
        });

    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar taxa de câmbio", detalhes: error.message });
    }
})


app.listen(8080, () => {
        console.log('rodando em 8080')
})
