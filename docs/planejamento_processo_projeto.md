# Planejamento do Processo e Projeto

## 1. Definição do processo

Processo adotado: Kanban adaptado (Scrumban).

Justificativa:
- Equipe pequena (3 pessoas) e fluxo contínuo de trabalho favorecem Kanban pela flexibilidade e visualização do trabalho em andamento.
- Para cumprir cronogramas de entrega e produzir relatórios periódicos, adotamos práticas temporais de Scrumban (iterações curtas / entregas timeboxed) — isto permite combinar a fluidez do Kanban com metas e checkpoints típicos de sprints.

Como foi aplicado no projeto:
- Painel Kanban com colunas: Backlog → Não iniciado → Em processo → Em Revisão → Concluido.
- Itens do backlog priorizados e puxados pelo responsável conforme capacidade.
- Reuniões rápidas de acompanhamento e revisões de entrega ao final de cada entrega.
- Uso de Pull Requests e revisão de código antes de mover para concluido.
- Entregas: definimos entregas a cada ~2 semanas para documentação e demonstração (Sprint 1 e Sprint 2).

## 2. Planejamento Ágil

Duração total do projeto:
- Período planejado: 26/10/2025 → 25/11/2025 (aprox. 30 dias corridos).

Equipe e papéis:
- Diego Francisco — Backend (implementação da lógica do conversor, APIs e testes).
- Danilo Lopes — Frontend (interface web, usabilidade e integração com backend).
- Gladyson Rhuan — Relatório e Integração (documentação, coordenação, integração final e QA).

Backlog inicial (itens principais, priorizados):
1. Definir stack e ambiente de desenvolvimento (Node.js/Python, frameworks, testes).
2. Especificar requisitos funcionais (conversões suportadas, precisão, formatos).
3. Protótipo de interface e navegação.
4. Implementação do conversor core (cálculos e validações).
5. API para o frontend (endpoints básicos).
6. Integração frontend-backend.
7. Testes unitários e de integração.
8. Relatório técnico (processo, riscos, métricas).
9. Ajustes de usabilidade e correções identificadas em testes.
10. Deploy e instruções de uso.

Planejamento das iterações (adaptação Scrumban:
- Quantidade: 2 iterações principais entregas intermédias + fases de planejamento e finalização.
- Duração e metas:
  - Fase 1 — Definição e Planejamento: 26/10/2025 a 29/10/2025 (4 dias)
    - Entregáveis: Backlog inicial, cronograma, análise de risco.
  - Iteração 1 (Sprint 1): 30/10/2025 a 12/11/2025 (2 semanas)
    - Meta: Implementação do core do conversor + API mínima + protótipo de frontend.
  - Iteração 2 (Sprint 2): 13/11/2025 a 21/11/2025 (9 dias)
    - Meta: Integração completa, testes e melhorias de usabilidade.
  - Fase 4 — Finalização e Documentação: 22/11/2025 a 25/11/2025 (4 dias)
    - Entregáveis: Código final, relatório do processo, métricas e deploy.

> Observação: as iterações foram ajustadas para conciliar Kanban (puxar tarefas conforme capacidade) com as entregas.

## 3. Análise de Risco

Lista de riscos (probabilidade / impacto / mitigação / contingência):

1. Atraso no cumprimento do cronograma
   - Probabilidade: Alta
   - Impacto: Alto
   - Mitigação: Dividir tarefas em unidades menores, acompanhamento diário do progresso, priorização rígida do backlog.
   - Contingência: Replanejar entregas essenciais, reduzir escopo para MVP e solicitar extensão de prazo se necessário.

2. Software não cumprir requisitos técnicos (erros de cálculo ou imprecisão)
   - Probabilidade: Média
   - Impacto: Alto
   - Mitigação: Definir claramente requisitos numéricos (precisão, unidades), criar testes unitários e casos de validação desde o início.
   - Contingência: Implementar fallback com limites de precisão documentados e comunicar restrições ao avaliador.

3. Falha na integração frontend-backend
   - Probabilidade: Média
   - Impacto: Médio-Alto
   - Mitigação: Contratos de API definidos (ex: OpenAPI/JSON schema), endpoints estáveis, testes de integração automatizados.
   - Contingência: Fornecer versão mock do backend para demonstração do frontend ou usar dados estáticos até correção.

4. Entrega incompleta ou relatório com faltas de métricas
   - Probabilidade: Média
   - Impacto: Médio
   - Mitigação: Checklist do relatório, responsabilidades claras (Gladyson responsável pelo relatório), revisão antecipada do conteúdo.
   - Contingência: Preparar resumo executivo e anexos com métricas mínimas para avaliação, pedir extensão curta se necessário.

5. Recurso humano indisponível (doença/saída)
   - Probabilidade: Baixa-Média
   - Impacto: Alto (em equipe pequena)
   - Mitigação: Documentar progresso semanalmente, pares de revisão, dividir tarefas chaves em sub-tarefas para facilitar substituição.
   - Contingência: Repriorizar backlog para que tarefas críticas sejam cobertas pelos membros restantes; solicitar suporte externo se possível.

6. Interface web não intuitiva / problemas de usabilidade
   - Probabilidade: Média
   - Impacto: Médio
   - Mitigação: Revisões rápidas de UX, teste com 1–2 usuários, ajustes iterativos após feedback.
   - Contingência: Simplificar a interface para funcionalidades essenciais e documentar instruções de uso claras.

## 4. Cronograma

Cronograma planejado:
- 26/10/2025 — 29/10/2025: Planejamento e definição (Backlog, riscos, cronograma).
- 30/10/2025 — 12/11/2025: Sprint 1 (core e API).
- 13/11/2025 — 21/11/2025: Sprint 2 (integração, testes).
- 22/11/2025 — 25/11/2025: Finalização, documentação e entrega.

Cronograma real (status até 24/11/2025) — resumo com desvios identificados:
- Fase 1 (Planejamento)
  - Planejado: 26/10 → 29/10
  - Real: 26/10 → 29/10 (concluído, dentro do prazo)
  - Desvio: 0 dias
- Sprint 1
  - Planejado: 30/10 → 12/11
  - Real: 30/10 → 14/11 (concluído)
  - Desvio: +2 dias
  - Justificativa: requisitos de precisão do conversor exigiram testes adicionais e correções.
- Sprint 2
  - Planejado: 13/11 → 21/11
  - Real: 15/11 → em progresso (atraso de início: 2 dias; atrasado na conclusão estimada)
  - Desvio: início adiado e previsão de término ajustada para 24/11 (desvio esperado +3 dias)
  - Justificativa: dependência na entrega final do backend para integração completa; tempo gasto em correções trazidas na Sprint 1.
- Finalização
  - Planejado: 22/11 → 25/11
  - Real: previsão de 25/11 → 27/11 se houver atraso (a confirmar)
  - Desvio: possibilidade de até +2 dias dependendo da conclusão da integração e revisão do relatório.

Descrição e justificativa dos desvios:
- O principal atraso ocorreu devido a ajustes necessários no núcleo do conversor (correções de algoritmos e maior cobertura de testes) que consumiram parte do tempo previsto para Sprint 2.
- A equipe priorizou qualidade (testes e correções) em Sprint 1, o que gerou atraso em entregas subsequentes.
- Mitigação aplicada: re-priorização de backlog (foco nas funcionalidades essenciais), aumento temporário de revisões colaborativas para acelerar correções e redução de escopo não essencial para garantir entrega do MVP.
