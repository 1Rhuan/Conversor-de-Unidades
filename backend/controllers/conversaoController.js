const axios = require('axios');

async function converterMoeda(req, res) {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({
            error: "Parâmetros faltando. Use: /api/moedas?from=USD&to=BRL&amount=10"
        });
    }

    try {
        const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
        const response = await axios.get(url);

        const resultado = response?.data?.result;

        if (resultado === undefined || resultado === null) {
            return res.status(500).json({
                error: "API externa não retornou resultado válido",
                detalhes: response.data
            });
        }

        return res.json({
            from,
            to,
            amount: Number(amount),
            resultado
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao buscar taxa de câmbio",
            detalhes: error.message
        });
    }
}

function converterTemperatura(req, res) {
    const { from, to, value } = req.query;
    const num = parseFloat(value);

    if (!from || !to || isNaN(num)) {
        return res.status(400).json({ error: "Use: /temp?from=C&to=F&value=30" });
    }

    const unidade = from.toUpperCase();
    const destino = to.toUpperCase();

    let celsius;

    switch (unidade) {
        case "C": celsius = num; break;
        case "F": celsius = (num - 32) * 5/9; break;
        case "K": celsius = num - 273.15; break;
        case "R": celsius = (num - 491.67) * 5/9; break;
        default:
            return res.status(400).json({ error: "Unidade de origem inválida. Use C, F, K ou R." });
    }

    let resultado;

    switch (destino) {
        case "C": resultado = celsius; break;
        case "F": resultado = (celsius * 9/5) + 32; break;
        case "K": resultado = celsius + 273.15; break;
        case "R": resultado = (celsius * 9/5) + 491.67; break;
        default:
            return res.status(400).json({ error: "Unidade de destino inválida. Use C, F, K ou R." });
    }

    res.json({
        tipo: "temperatura",
        from: unidade,
        to: destino,
        valor: num,
        resultado
    });
}

function converterDistancia(req, res) {
    const { from, to, value } = req.query;
    const num = parseFloat(value);

    if (!from || !to || isNaN(num)) {
        return res.status(400).json({ error: "Use: /dist?from=km&to=mi&value=10" });
    }

    const fatores = {
        km: 1000,     
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        ft: 0.3048
    };

    if (!fatores[from] || !fatores[to]) {
        return res.status(400).json({
            error: "Unidade inválida. Suporte: km, m, cm, mm, mi, ft"
        });
    }

    const metros = num * fatores[from];
    const result = metros / fatores[to];

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
        return res.status(400).json({
            error: "Use: /peso?from=kg&to=lb&value=50"
        });
    }

    const fatores = {
        kg: 1000,
        g: 1,
        mg: 0.001,
        lb: 453.592,
        oz: 28.3495
    };

    if (!fatores[from] || !fatores[to]) {
        return res.status(400).json({
            error: "Unidade inválida. Suporte: kg, g, mg, lb, oz"
        });
    }

    const gramas = num * fatores[from];
    const result = gramas / fatores[to];

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

