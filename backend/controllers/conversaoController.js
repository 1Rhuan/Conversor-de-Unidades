const axios = require('axios');

async function converterMoeda(req, res) {
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
}

function converterTemperatura(req, res) {
    const { from, to, value } = req.query;
    const num = parseFloat(value);

    if (!from || !to || isNaN(num)) {
        return res.status(400).json({ error: "Use: /temp?from=C&to=F&value=30" });
    }

    let result;

    if (from === "C" && to === "F") {
        result = (num * 9/5) + 32;
    } else if (from === "F" && to === "C") {
        result = (num - 32) * 5/9;
    } else {
        return res.status(400).json({ error: "Conversão inválida. Use C↔F." });
    }

    res.json({
        tipo: "temperatura",
        from,
        to,
        valor: num,
        resultado: result
    });
}

function converterDistancia(req, res) {
    const { from, to, value } = req.query;
    const num = parseFloat(value);

    if (!from || !to || isNaN(num)) {
        return res.status(400).json({ error: "Use: /dist?from=km&to=mi&value=10" });
    }

    let result;

    if (from === "km" && to === "mi") {
        result = num * 0.621371;
    } else if (from === "mi" && to === "km") {
        result = num / 0.621371;
    } else {
        return res.status(400).json({ error: "Conversão inválida. Use km↔mi." });
    }

    res.json({
        tipo: "distância",
        from,
        to,
        valor: num,
        resultado: result
    });
}

function converterPeso(req, res) {
    const { from, to, value } = req.query;
    const num = parseFloat(value);

    if (!from || !to || isNaN(num)) {
        return res.status(400).json({ error: "Use: /peso?from=kg&to=lb&value=50" });
    }

    let result;

    if (from === "kg" && to === "lb") {
        result = num * 2.20462;
    } else if (from === "lb" && to === "kg") {
        result = num / 2.20462;
    } else {
        return res.status(400).json({ error: "Conversão inválida. Use kg↔lb." });
    }

    res.json({
        tipo: "peso",
        from,
        to,
        valor: num,
        resultado: result
    });
}

module.exports = {
    converterMoeda,
    converterTemperatura,
    converterDistancia,
    converterPeso
};

