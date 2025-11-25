const tipos = {
  moedas: {
    title: "CONVERSOR MONETÁRIO",
    from: ["BRL", "USD", "EUR"],
    to: ["BRL", "USD", "EUR"],
  },
  temp: { title: "CONVERSOR DE TEMPERATURA", from: ["C", "F"], to: ["C", "F"] },
  dist: {
    title: "CONVERSOR DE DISTÂNCIA",
    from: ["km", "mi"],
    to: ["km", "mi"],
  },
  peso: { title: "CONVERSOR DE PESO", from: ["kg", "lb"], to: ["kg", "lb"] },
};
let tipoSelecionado = "moedas";

function renderForm() {
  const t = tipos[tipoSelecionado];
  document.getElementById("title").textContent = t.title;
  const fromSelect = document.getElementById("from");
  const toSelect = document.getElementById("to");
  fromSelect.innerHTML = t.from
    .map((opt) => `<option value="${opt}">${opt}</option>`)
    .join("");
  toSelect.innerHTML = t.to
    .map((opt) => `<option value="${opt}">${opt}</option>`)
    .join("");
}

document.querySelectorAll(".menu-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    tipoSelecionado = btn.dataset.type;
    renderForm();
  });
});

document
  .getElementById("converterForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const t = tipoSelecionado;
    let url = "http://localhost:8080/api/";
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const value = document.getElementById("value").value;
    if (!from || !to || !value) {
      document.getElementById("result").textContent =
        "Preencha todos os campos!";
      return;
    }
    if (t === "moedas") url += `moedas?from=${from}&to=${to}&amount=${value}`;
    if (t === "temp") url += `temp?from=${from}&to=${to}&value=${value}`;
    if (t === "dist") url += `dist?from=${from}&to=${to}&value=${value}`;
    if (t === "peso") url += `peso?from=${from}&to=${to}&value=${value}`;
    document.getElementById("result").textContent = "Convertendo...";
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      let resultado;
      if (t === "moedas")
        resultado = `${data.amount} ${data.from} = ${data.resultado} ${data.to}`;
      else resultado = `Resultado: ${data.resultado} ${data.to}`;
      document.getElementById("result").textContent = resultado;
    } catch (err) {
      document.getElementById("result").textContent = "Erro: " + err.message;
    }
  });

// Inicial
renderForm();
