### 1. Resumo

Realizamos a coleta e análise inicial das métricas do repositório Conversor-de-Unidades. Principais pontos:

- Medimos LOC e complexidade para os principais módulos JavaScript do projeto.
- Resultado (foco: código-fonte, excluindo lockfiles e node_modules):
  - JavaScript: 6 arquivos, 301 linhas de código.
  - Funções detectadas: 35.
  - Média de Complexidade Ciclomática (CCN): 1.9.
- PONTOS CRÍTICOS:
  - Uma função anônima no frontend possui CCN = 11 (maior risco de manutenção).
  - Três funções de conversão no backend (temperatura, distância, peso) com CCN = 8 (moderada complexidade).

### 2. Dados coletados

Fontes
- cloc (contagem de linhas) — executado com exclusão de node_modules.
- lizard (análise de complexidade ciclomática) — relatório por função.
- grep heurístico para contagem aproximada de funções.

Resumo numérico
- Total bruto do repositório (todas as linguagens, sem filtro): 6.704 linhas — porém esse total é inflacionado por `backend/package-lock.json` (5.575 linhas).
- Código-fonte relevante:
  - JavaScript: 6 arquivos — 301 LOC
  - CSS: 1 arquivo — 190 LOC
  - HTML: 2 arquivos — 165 LOC
  - Markdown (docs): 6 arquivos — 420 linhas
- Detalhe por arquivo (.js):
  - backend/controllers/conversaoController.js — 104 LOC
  - frontend/script.js — 66 LOC
  - backend/test/conversao.test.js — 76 LOC
  - backend/test/integracao.test.js — 29 LOC
  - backend/index.js — 18 LOC
  - backend/routes/conversaoRoutes.js — 8 LOC
- Lizard (complexidade por arquivo / funções):
  - Total funções encontradas: 35
  - Média CCN (todas as funções): 1.9
  - Funções de maior CCN:
    - frontend/script.js — função anônima (linhas ~39–68): NLOC 30 — CCN = 11
    - backend/controllers/conversaoController.js:
      - converterTemperatura: NLOC 22 — CCN = 8
      - converterDistancia: NLOC 22 — CCN = 8
      - converterPeso: NLOC 22 — CCN = 8

---
