# Relatório de Processo e Qualidade

Sumário
- 1. Planejamento do Processo e Projeto
- 2. Testes de Software
- 3. Métricas de Software
- 4. Análise de Conformidade com Normas de Qualidade
- Anexos / Evidências

---

### 1. Planejamento do Processo e Projeto

#### 1.1. Definição do Processo
- Processo adotado: Kanban adaptado (Scrumban).
- Justificativa:
  - Equipe pequena (3 pessoas), fluxo contínuo e necessidade de flexibilidade → Kanban.
  - Para cumprir entregas e relatórios periódicos combinamos práticas temporais (iterações/timeboxes) do Scrumban.
- Como foi aplicado:
  - Painel Kanban com colunas: Backlog → Não iniciado → Em processo → Em Revisão → Concluído.
  - Uso de Pull Requests e revisão de código antes de mover tarefas para "Concluído".
  - Entregas/timeboxes aproximadas a cada ~2 semanas (Sprint 1 e Sprint 2).

#### 1.2. Planejamento Ágil
- Duração do projeto (planejado): 26/10/2025 → 25/11/2025 (~30 dias).
- Equipe e papéis:
  - Diego Francisco — Backend (implementação do core e testes).
  - Danilo Lopes — Frontend (interface, integração).
  - Gladyson Rhuan — Relatório, integração e QA.
- Backlog inicial (resumo priorizado):
  1. Definir stack e ambiente.
  2. Especificar requisitos funcionais.
  3. Protótipo da interface.
  4. Implementação do core (cálculos).
  5. API para frontend.
  6. Integração frontend-backend.
  7. Testes unitários e de integração.
  8. Relatório técnico e métricas.
  9. Ajustes de usabilidade.
  10. Deploy e instruções de uso.
- Planejamento de iterações (Scrumban):

| Fase / Iteração                         | Início       | Término      | Principais atividades                                   |
|-----------------------------------------|--------------|--------------|--------------------------------------------------------|
| Fase 1 — Planejamento                   | 26/10/2025   | 29/10/2025   | Backlog, cronograma, análise de risco                  |
| Iteração 1 (Sprint 1)                   | 30/10/2025   | 12/11/2025   | Implementação do core, API mínima, protótipo frontend  |
| Iteração 2 (Sprint 2)                   | 13/11/2025   | 21/11/2025   | Integração frontend-backend, testes, melhorias         |
| Finalização                             | 22/11/2025   | 25/11/2025   | Documentação final e entrega                           |

#### 1.3. Análise de Risco
Para cada risco: Probabilidade / Impacto / Mitigação / Contingência

1) Atraso no cronograma  
- Probabilidade: Alta / Impacto: Alto  
- Mitigação: Dividir tarefas, acompanhamento diário, priorização rígida do backlog.  
- Contingência: Reduzir escopo para MVP, replanejar entregas ou solicitar extensão.

2) Erros de cálculo / imprecisão no conversor  
- Probabilidade: Média / Impacto: Alto  
- Mitigação: Definir requisitos numéricos claros, criar testes unitários e casos de validação desde o início.  
- Contingência: Documentar limites de precisão e fornecer exemplos de uso; fallback documentado.

3) Falha na integração frontend-backend  
- Probabilidade: Média / Impacto: Médio-Alto  
- Mitigação: Contratos de API (JSON schema), testes de integração automatizados, mocks.  
- Contingência: Fornecer backend mock ou dados estáticos para demonstração.

4) Entrega incompleta / relatório com métricas faltantes  
- Probabilidade: Média / Impacto: Médio  
- Mitigação: Checklist do relatório, responsabilidades claras (Gladyson responsável), revisões antecipadas.  
- Contingência: Preparar resumo executivo mínimo e anexos com métricas essenciais.

5) Recurso humano indisponível  
- Probabilidade: Baixa-Média / Impacto: Alto  
- Mitigação: Documentar progresso, pares de revisão, tarefas divididas.  
- Contingência: Repriorizar backlog e redistribuir tarefas.

6) Problemas de usabilidade na interface  
- Probabilidade: Média / Impacto: Médio  
- Mitigação: Revisões rápidas de UX, teste com 1–2 usuários, ajustes iterativos.  
- Contingência: Simplificar interface e documentar instruções de uso.

#### 1.4. Cronograma
- Cronograma planejado:
  - 26/10–29/10: Planejamento
  - 30/10–12/11: Sprint 1
  - 13/11–21/11: Sprint 2
  - 22/11–25/11: Finalização
- Cronograma real:
``` mermaid
gantt
  title Cronograma — Planejado vs Real (Scrumban)
  dateFormat  YYYY-MM-DD
  axisFormat  %d/%m

  section Fase 1 — Planejamento
    Planejado :plan1, 2025-10-26, 2025-10-29
    Real      :real1,  2025-10-26, 2025-10-29

  section Iteração 1 — Sprint 1
    Planejado :plan2, 2025-10-30, 2025-11-12
    Real      :real2,  2025-10-30, 2025-11-14

  section Iteração 2 — Sprint 2
    Planejado :plan3, 2025-11-13, 2025-11-21
    Real      :real3,  2025-11-15, 2025-11-24

  section Finalização
    Planejado :plan4, 2025-11-22, 2025-11-25
    Real (previsão de atraso) :real4, 2025-11-25, 2025-11-27
```
- Análise dos desvios:
  - Prioridade na qualidade (correções e testes) provocou atraso sequencial.
  - Ações tomadas: re-priorização do backlog, aumento de revisões colaborativas e redução de escopo não essencial.

---

### 2. Testes de Software

#### 2.1. Estratégia de Teste
- Abordagem adotada: TDD adaptado — testes escritos simultaneamente ao desenvolvimento de funcionalidades quando possível.
- Ferramentas principais:
  - Mocha (framework de testes), Chai (asserções), Sinon (mocks/stubs), Supertest (integração HTTP), NYC/Istanbul (cobertura).
- Princípios:
  - Testes automatizados executáveis via npm test.
  - Isolamento por meio de mocks para dependências externas.
  - Cobertura de cenários de sucesso e erro.
  - Integração contínua prevista para execução a cada commit/PR. CI para testes.

#### 2.2. Tipos de Teste e Evidências
- Teste de Unidade:
  - Arquivo: backend/test/conversao.test.js
  - Cobertura: funções de conversão testadas (temperatura, distância, peso).
    
<img width="1239" height="522" alt="Captura de imagem_20251125_162046" src="https://github.com/user-attachments/assets/b76a3a40-15aa-424e-a1ed-f0a775eb2564" />
  
- Teste de Integração:
  - Arquivo: backend/test/integracao.test.js
  - Uso de Supertest e Sinon (mock de axios) para simular APIs externas de câmbio.
  - 
<img width="1239" height="141" alt="image" src="https://github.com/user-attachments/assets/5767ed86-fafd-4d4f-a9f6-c7750ee858d1" />

- Teste de Sistema/Funcional (End-to-end / Validação):
  - Casos de erro e entrada inválida testados (ex.: moeda inválida, unidade inválida).

<img width="1487" height="965" alt="image" src="https://github.com/user-attachments/assets/ca300490-c6a3-43c6-923c-45d816cc9c70" />

#### 2.3. Métricas de Teste
- Cobertura de Código (NYC/Istanbul):
  - Total: Statements 86.41% | Branches 81.81% | Functions 83.33% | Lines 89.04%
  - Arquivos notáveis:
    - backend/index.js — 93.33% statements, Branches 50%, Functions 50%
    - backend/controllers/conversaoController.js — 82.75% statements, detalhes de linhas não cobertas: 55-57,65-68,85,121
    - backend/routes/conversaoRoutes.js — 100% cobertura
- Número total de testes:
  - Unitários: 10
  - Integração: 2
  - Funcionais/Validação: 4
  - Total: 16 (16 passing)
- Taxa de sucesso dos testes: 100% (16/16)
- Tempo de execução total: ~45ms
---

### 3. Métricas de Software

#### 3.1. Métricas de Produto
- Contagem de linhas (filtros excluíram node_modules e lockfiles para medidas relevantes):
  - JavaScript: 6 arquivos — 301 LOC.
  - CSS: 1 arquivo — 190 LOC.
  - HTML: 2 arquivos — 165 LOC.
  - Markdown (docs): 6 arquivos — 420 linhas.
- Detalhe por arquivo .js:
  - backend/controllers/conversaoController.js — 104 LOC
  - frontend/script.js — 66 LOC
  - backend/test/conversao.test.js — 76 LOC
  - backend/test/integracao.test.js — 29 LOC
  - backend/index.js — 18 LOC
  - backend/routes/conversaoRoutes.js — 8 LOC
- Complexidade ciclomática (Lizard):
  - Total funções encontradas: 35
  - Média CCN: 1.9
  - Funções de maior risco:
    - frontend/script.js — função anônima: NLOC 30 — CCN = 11 (alto risco de manutenção)
    - backend/controllers/conversaoController.js — converterTemperatura / converterDistancia / converterPeso: NLOC 22 — CCN = 8 cada (moderada complexidade)

#### 3.2. Métricas de Processo (coletadas / estimadas)
- Velocity: não formalmente mensurada; dados qualitativos indicam entregas parciais e desvios (Sprint 1 +2 dias, Sprint 2 atraso inicial).
- Tempo médio de resolução de defeitos: não formalizado — recomenda-se medir por issue/PR (timestamp abertura → fechamento).
- Produtividade / pontos de função: não estimado formalmente no projeto; recomenda-se estimar tamanho por story points nas próximas iterações para medir velocity.

#### 3.3. Análise e Ação
- Análise:
  - Código base enxuto; principais riscos concentrados em poucas funções com CCN elevada.
  - Cobertura de testes boa, mas ainda existem branches e linhas sem cobertura.
  - Processo ágil adotado (Scrumban) atende às necessidades da equipe, mas faltam alguns artefatos formais (CHANGELOG, CONTRIBUTING, matriz de rastreabilidade).
- Ações corretivas / preventivas:
  - Refatorar funções com CCN alta (dividir lógica, extrair funções).
  - Cobrir condicionalidades não testadas (index.js, branches do controller).
  - Implementar métricas de processo (story points, velocity) e registrar tempo de resolução de issues.
  - Estabelecer release process formal (CHANGELOG, tags e política de release).

---

### 4. Análise de Conformidade com Normas de Qualidade (autoavaliação)

Modelo usado para avaliação: MPS.BR — Nível avaliado informado no projeto: F (Gerenciado).  
Foram selecionados 3 processos-chave: Gerência de Requisitos, Garantia da Qualidade (Testes) e Gerência de Configuração.

Tabela resumida de autoavaliação
| Processo escolhido | Modelo de Maturidade | Nível avaliado | Avaliação por prática (Atende/Parcial/Não) | Evidências (artefatos/referências) |
|--------------------|----------------------|----------------|--------------------------------------------|------------------------------------|
| Gerência de Requisitos | MPS.BR | F (Gerenciado) | Identificar e registrar: Parcial. Rastreabilidade: Parcial. Priorização: Não. | README.md (/backend e /frontend), issues #10, #12, commits 8da119a, 729259a |
| Garantia da Qualidade (Testes) | MPS.BR | F (Gerenciado) | Planejamento de testes: Parcial. Execução/registro: Não. Registro/triagem de defeitos: Não. | backend/src/tests/ (pasta de testes), logs de execução (16 passing), ausência de plano formal e CI para testes |
| Gerência de Configuração | MPS.BR | F (Gerenciado) | Controle de versão: Atende. Gestão de releases: Não. Identificação de configurações: Parcial. | Uso de git e PRs; ausência de CHANGELOG.md e CONTRIBUTING.md; PRs (ex.: #7, #9) |

#### 4.1. Gerência de Requisitos — avaliação detalhada
- Práticas exigidas (nível F): identificar e registrar requisitos; manter rastreabilidade; controlar mudanças; priorizar requisitos.
- Observações:
  - Identificação/registro: funcionalidades documentadas em README e issues, porém não existe um Documento único formal de Requisitos ou backlog com versão controlada → avaliação Parcial.
  - Rastreabilidade: histórico de commits/PRs existe, mas não há matriz que cruza requisito → commit/PR → teste → evidência → Parcial.
  - Priorização: não existe backlog formal priorizado com critérios documentados → Não atende.
- Evidências:
  - README.md (descrição de funcionalidades), issues no repositório (ex.: #10, #12), commits históricos (ex.: 8da119a, 729259a).

#### 4.2. Garantia da Qualidade (Testes)
- Práticas exigidas (nível F): planejamento básico de verificação/validação; execução e registro; registro e tratamento de defeitos.
- Observações:
  - Planejamento de testes: existem testes e estrutura de test/ (unit/integration), mas falta um Plano de Testes formalizado → Parcial.
  - Execução e registro: testes automatizados existem e são executáveis localmente (npm test), mas não há evidência de CI que registre resultados de forma centralizada → Não atende.
  - Registro/triagem de defeitos: existem issues de bug, mas sem processo documentado para triagem e fechamento → Não atende.
- Evidências:
  - backend/test/*, relatórios de execução (saída mocha e cobertura), ausência de documento plano_de_testes.md e ausência de histórico de triagem formal.

#### 4.3. Gerência de Configuração
- Práticas exigidas (nível F): uso de controle de versão; gestão de releases e registros de mudança; identificação e proteção de configurações.
- Observações:
  - Controle de versão: Atende — uso de git, histórico, PRs e commits.
  - Gestão de releases: Não atende — não há CHANGELOG.md, tags formais ou processo de release documentado.
  - Identificação/proteção: Parcial — branches e PRs são usados, mas falta política documentada (CONTRIBUTING.md, proteção de branch, tags).
- Evidências:
  - Histórico de commits e PRs (ex.: PR #7, #9), ausência de arquivos: CHANGELOG.md, CONTRIBUTING.md, política de branch protection.

#### 4.4. Recomendações de conformidade (ações para subir nível)
- Gerência de Requisitos:
  - Criar Documento de Requisitos / backlog formal (arquivo único).
  - Implementar matriz de rastreabilidade requisito → commit/PR → teste.
  - Definir critérios de priorização (ex.: MoSCoW ou pontuação).
- Garantia da Qualidade:
  - Redigir um Plano de Testes formal.
  - Integrar testes no CI (ex.: GitHub Actions) e gravar relatórios de execução.
  - Definir processo de triagem e fechamento de defeitos (issues labels, templates).
- Gerência de Configuração:
  - Adotar tags semânticas para releases e manter CHANGELOG.md.
  - Criar CONTRIBUTING.md e definir política de branch protection.
  - Automatizar builds e releases (GitHub Actions / semantic-release).

---

Anexos / Evidências (referências)
- Estrutura do projeto:
  - backend/controllers/conversaoController.js
  - backend/routes/conversaoRoutes.js
  - backend/test/conversao.test.js
  - backend/test/integracao.test.js
  - frontend/script.js
  - README.md (raiz, backend, frontend)
- Saída de testes (trecho):
  - "16 passing (55ms)"
- Cobertura de código (NYC):
  - Total: Statements 86.41% | Branches 81.81% | Functions 83.33% | Lines 89.04%
  - Detalhes em: npm run test:coverage → tabela de cobertura
- Issues e PRs (exemplos mencionados no projeto): issues #10, #12; PRs #4, #5, #7, #9
