# Frontend — Conversor de Unidades

Documentação do frontend do Conversor de Unidades. Este documento descreve a estrutura, funcionamento e como editar o frontend.

## Stack

- **HTML5** — Estrutura das páginas
- **CSS3** — Estilização e responsividade
- **JavaScript (ES6+)** — Lógica de interação e consumo da API
- **Fetch API** — Comunicação com o backend

---

## Estrutura de Pastas

```
frontend/
├── index.html      # Página principal do conversor
├── script.js       # Lógica de interação e chamadas à API
├── style.css       # Estilos globais da aplicação
└── README.md       # Este documento
```

---

## Arquivos e Seus Propósitos

### `index.html`

Página principal da aplicação. Contém:
- Menu lateral com botões para selecionar o tipo de conversão (Temperatura, Distância, Peso, Monetário)
- Formulário de conversão com campos DE, PARA e VALOR
- Área de exibição do resultado

### `script.js`

Script principal da aplicação. Responsável por:
- Configuração dos tipos de conversão disponíveis (moedas, temperatura, distância, peso)
- Renderização dinâmica do formulário conforme o tipo selecionado
- Comunicação com a API do backend via Fetch
- Tratamento de erros e exibição de resultados

**Funções principais:**
| Função | Descrição |
|--------|-----------|
| `renderForm()` | Atualiza o formulário conforme o tipo de conversão selecionado |
| Evento `submit` do form | Envia requisição para a API e exibe o resultado |

### `style.css`

Estilos globais da aplicação. Inclui:
- Reset CSS básico
- Layout responsivo (flexbox)
- Estilização do menu lateral
- Estilização do formulário e botões
- Cores e tipografia
- Media queries para dispositivos móveis (< 700px)

---

## Como Abrir o Projeto

### Opção 1: Diretamente pelo Navegador

1. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou arraste para o navegador)
2. **Nota:** Essa opção requer que o backend esteja rodando em `http://localhost:8080`

### Opção 2: Usando o Backend (Recomendado)

O backend serve os arquivos do frontend automaticamente:

```bash
# Na pasta backend/
npm install
npm start
```

Acesse `http://localhost:8080` no navegador.

### Opção 3: Servidor HTTP Simples

Se preferir usar um servidor local para o frontend:

```bash
# Usando Python 3
cd frontend
python -m http.server 3000

# Ou usando Node.js (npx)
npx http-server . -p 3000
```

Acesse `http://localhost:3000` no navegador.

---

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
| Moedas | `/api/moedas` | `from`, `to`, `amount` |
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

## Recursos

### Fontes
A aplicação usa a fonte padrão do sistema: `'Segoe UI', Arial, sans-serif`

### Imagens
Atualmente não há imagens na aplicação.

### Cores Principais
| Cor | Uso |
|-----|-----|
| `#0547B7` | Fundo do menu lateral (gradiente) |
| `#8878ef` | Título do formulário |
| `#18e03b` | Botão de converter |
| `#f6f6f8` | Fundo da área principal |

---

## Protótipo de Tela

![Protótipo do Conversor de Unidades](https://github.com/user-attachments/assets/ec1b3de4-e8d5-42bd-9d4d-52ca31dae2a8)
