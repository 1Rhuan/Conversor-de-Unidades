# Trabalho Final (Estrutura de Software)
  
**Prazo final 25/11/2025**

### Nosso tema:

**Conversor de Unidades (Múltiplo)**

Aplicação que converte valores entre diferentes unidades em pelo menos três
categorias (ex: Temperatura: Celsius/Fahrenheit; Distância: Km/Milhas; Peso: Kg/Libras). ​

Funcionalidades Mínimas: 
- Seleção da categoria de conversão. ​
- Entrada de valor e unidade de origem.​
- Exibição do resultado na unidade de destino.

## Stack

- **HTML5** — Estrutura das páginas
- **CSS3** — Estilização e responsividade
- **JavaScript (ES6+)** — Lógica do frontend e do backend
- **Fetch API** — Comunicação do frontend com o backend  
- **Node.js** — Ambiente de execução do backend  
- **npm** — Gerenciador de pacotes e scripts
- **Express** — Framework HTTP para o backend 
- **cors** — Middleware para habilitar CORS nas rotas do Express  
- **Jest** — Framework de testes
- **Mocha** — Framework de testes
- **Chai** — Biblioteca de asserções
- **Sinon** — Spies, stubs e mocks para testes isolados  
- **Supertest** — Ferramenta para testes de integração HTTP contra o servidor Express

---

## Estrutura de Pastas

```
.
├── .github/                                 # Configs do GitHub (workflows, templates, etc.)
├── .gitignore
├── README.md                                # Documentação principal do repositório
├── Relatorio-de-Processo-Qualidade.md       # Relatório de processo/qualidade
├── frontend/                                # Interface cliente
│   ├── README.md                            # Documentação específica do frontend
│   ├── index.html                           # Página principal do conversor
│   ├── script.js                            # Lógica/interação do frontend
│   └── style.css                            # Estilos da aplicação
└── backend/                                 # Servidor / API
    ├── .gitignore
    ├── controllers/                         # (diretório) controladores da API
    ├── documentacao.md                      # Documentação do backend / API
    ├── index.js                             # Entrada do servidor (Node)
    ├── node_modules/                        # Dependências instaladas
    ├── package-lock.json
    ├── package.json                         # Dependências e scripts (npm)
    ├── public/                              # Arquivos públicos servidos
    ├── readme.md                            # Documentação do backend
    ├── routes/                              # (diretório) rotas da aplicação
    └── test/                                # (diretório) testes

```

## Como Abrir o Projeto

### 1: Diretamente pelo Navegador

1. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou arraste para o navegador)
2. **Nota:** Esse projeto requer que o backend esteja rodando em `http://localhost:8080`

### 2: Iniciando Backend

```bash
# Na pasta backend/
npm install
node index.js
```

Acesse `http://localhost:8080` no navegador.

## Páginas Disponíveis

| Página | Arquivo | Finalidade |
|--------|---------|------------|
| Conversor Principal | `/index.html` | Página única da aplicação com todas as funcionalidades de conversão |

---

## Tipos de Conversão Disponíveis

| Tipo | Botão no Menu | Unidades Suportadas |
|------|---------------|---------------------|
| Monetário | "Monetário" | BRL, USD, EUR |
| Temperatura | "Temperatura" | C (Celsius), F (Fahrenheit) |
| Distância | "Distância" | km (quilômetros), mi (milhas) |
| Peso | "Peso" | kg (quilogramas), lb (libras) |

---

## Comunicação com o Backend

O frontend faz requisições HTTP GET para a API do backend:

| Tipo | Endpoint | Parâmetros |
|------|----------|------------|
| Moedas | `/api/moeda` | `from`, `to`, `amount` |
| Temperatura | `/api/temp` | `from`, `to`, `value` |
| Distância | `/api/dist` | `from`, `to`, `value` |
| Peso | `/api/peso` | `from`, `to`, `value` |

**Base URL:** `http://localhost:8080`

---

## Como Editar e Adicionar Componentes

### Adicionar Nova Unidade em um Tipo Existente

1. Abra `script.js`
2. Localize o objeto `tipos` no início do arquivo
3. Adicione a nova unidade nos arrays `from` e `to` do tipo desejado:

```javascript
const tipos = {
  peso: { 
    title: "CONVERSOR DE PESO", 
    from: ["kg", "lb", "oz"],  // Adicione nova unidade aqui
    to: ["kg", "lb", "oz"]     // E aqui
  },
  // ...
};
```

4. Certifique-se que o backend também suporta a nova unidade

### Adicionar Novo Tipo de Conversão

1. Em `script.js`, adicione o novo tipo no objeto `tipos`:

```javascript
const tipos = {
  // ... tipos existentes
  novoTipo: {
    title: "CONVERSOR DE NOVO TIPO",
    from: ["unidade1", "unidade2"],
    to: ["unidade1", "unidade2"]
  }
};
```

2. Em `index.html`, adicione um botão no menu:

```html
<button class="menu-btn" data-type="novoTipo">Novo Tipo</button>
```

3. Em `script.js`, adicione a lógica de URL no evento submit:

```javascript
if (t === "novoTipo") url += `novoTipo?from=${from}&to=${to}&value=${value}`;
```

### Alterar Estilos

1. Abra `style.css`
2. Os principais seletores são:
   - `.container` — Container principal
   - `aside` — Menu lateral
   - `main` — Área do formulário
   - `.menu-btn` — Botões do menu
   - `#converterForm` — Formulário de conversão
   - `#result` — Área de resultado

---

## Adicionar suporte a uma nova unidade (em um tipo existente)

Passos gerais:

1. Identifique onde estão as tabelas/mapeamentos de unidades. Procure por objetos que descrevem `peso`, `temperatura`, `comprimento` etc.

2. Atualize o mapeamento com a nova unidade. Exemplo de estrutura comum:

```js
// backend/controllers/conversaoController.js
const unidades = {
  peso: {
    kg: 1,
    lb: 0.453592,
    oz: 0.0283495,
    // Adicione aqui:
    g: 0.001
  },
  // ...
};
```

3. Atualize a lógica de conversão se necessário (por exemplo, conversão direta via fator base ou funções especiais para temperaturas).

4. Atualize `backend/documentacao.md` com a nova unidade.

---

## Adicionar um novo tipo de conversão

Exemplo: adicionar `velocidade`.

1. Criar ou atualizar controlador:
```js
// backend/controllers/conversaoController.js
const unidades = {
  // existentes...
  velocidade: {
    mps: 1,         // metro por segundo como base
    kmh: 0.2777778, // km/h -> m/s
    mph: 0.44704
  }
};

function convert(tipo, from, to, value) {
  if (!unidades[tipo]) throw new Error('Tipo não suportado');
  const map = unidades[tipo];
  if (!map[from] || !map[to]) throw new Error('Unidade não suportada');
  const valueInBase = value * map[from]; // to base
  return valueInBase / map[to];
}

module.exports = { convert };
```

2. Adicionar rota:
```js
// backend/routes/conversaoRoutes.js
const express = require('express');
const router = express.Router();
const { convert } = require('../controllers/conversions');

router.get('/:tipo', (req, res) => {
  const { tipo } = req.params;
  const { from, to, value } = req.query;
  try {
    const result = convert(tipo, from, to, Number(value));
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
```

3. Monte/registre a rota em `index.js`:
```js
// backend/index.js
const express = require('express');
const app = express();
const conversionsRouter = require('./routes/conversions');

app.use('/convert', conversionsRouter);
```

4. Documente o novo tipo em `backend/documentacao.md`.

---

## Boas práticas para controladores e rotas

- Separe responsabilidades: controllers apenas executam lógica; routes fazem validação e chamam controllers.
- Valide entrada: verifique `from`, `to` e `value` antes de converter (tipos, NaN, limites).
- Trate erros com mensagens claras e códigos HTTP apropriados (400 para input, 500 para falhas internas).

---

## Testes (Mocha / Chai / Sinon / Supertest)

1. Instale libs (se ainda não estiverem):
```bash
npm install
```

2. Exemplo de teste de integração com Supertest + Mocha + Chai:
```js
// backend/test/conversions.integration.test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('../index'); // exporte app em index.js sem chamar listen()

describe('GET /convert/:tipo', () => {
  it('converte kg para g', async () => {
    const res = await request(app)
      .get('/convert/peso')
      .query({ from: 'kg', to: 'g', value: 2 });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('result');
    expect(res.body.result).to.equal(2000); // exemplo, depende da implementação
  });
});
```

3. Rodar testes:
```bash
npm test
```

---

## Atualizar documentação e README

- Atualize `backend/documentacao.md` com:
  - Endpoints e exemplos de uso
  - Tipos e unidades suportadas
  - Parâmetros esperados e erros possíveis
- Se adicionar scripts de teste, documente como rodar (`npm test`)

---

## Checklist antes de abrir PR

- [ ] Cobrir a mudança com pelo menos um teste unitário / integração
- [ ] Atualizar `backend/documentacao.md`
- [ ] Validar entradas e tratar erros
