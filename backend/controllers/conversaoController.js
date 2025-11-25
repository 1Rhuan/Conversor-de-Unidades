const axios = require('axios');

function converterMoeda(req, res) {
    const { from, to, amount } = req.query;
    const valor = parseFloat(amount);

    if (!from || !to || isNaN(valor)) {
        return res.status(400).json({
            error: "Use: /api/moeda?from=USD&to=BRL&amount=10"
        });
    }

    const taxas = {
        USD: 5.00,
        BRL: 1,
        EUR: 6.00,
        GBP: 7.00,
        JPY: 0.038,
    };

    if (!taxas[from] || !taxas[to]) {
        return res.status(400).json({ error: "Moeda inválida" });
    }

    const resultado = (valor * taxas[from]) / taxas[to];

    res.json({
        tipo: "moeda",
        from,
        to,
        valor,
        resultado,
    });
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

