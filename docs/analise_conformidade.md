# Análise de Conformidade com MPS.BR — Avaliação - Esboço

Objetivo
- Avaliar o projeto Conversor-de-Unidades em relação ao modelo MPS.BR e registrar evidências para três processos selecionados.

Modelo e Nível Avaliado
- Modelo: MPS.BR
- Nível avaliado: F (Gerenciado)
 
Processos escolhidos
- Gerência de Requisitos
- Garantia da Qualidade (Testes)
- Gerência de Configuração

1) Gerência de Requisitos
- APs / práticas resumidas para nível F:
  - Identificar e registrar requisitos.
  - Manter rastreabilidade e controlar mudanças.
  - Priorizar requisitos quando aplicável.

Avaliação por prática
- Identificar e registrar requisitos
  - Avaliação: Parcial
  - Justificativa: Funcionalidades listadas em README / issues, mas sem documento formal único de requisitos.
  - Evidências: README.md (/backend e /frontend), commits 8da119a, 729259a, issues #10, #12
- Rastreabilidade e controle de mudanças
  - Avaliação: Parcial
  - Justificativa: Mudanças visíveis via commits/PRs; não há matriz de rastreabilidade entre requisito → commit/PR.
  - Evidências: PR #5, PR #4
- Priorização
  - Avaliação: Não atende
  - Justificativa: Não há backlog priorizado ou critérios de priorização documentados.

2) Garantia da Qualidade / Testes
- APs / práticas resumidas para nível F:
  - Planejamento básico de verificação/validação.
  - Execução de testes e registro de resultados.
  - Registro e tratamento de defeitos.

Avaliação por prática
- Planejamento de testes
  - Avaliação: Parcial
  - Justificativa: Existe pasta de testes, porém falta plano de testes formal.
  - Evidências: backend/src/tests/
- Execução e registro de resultados
  - Avaliação: Não Atendida
  - Justificativa: Testes automáticos executados pelo CI; não há um CI para testes.
  - Evidências:
- Registro e tratamento de defeitos
  - Avaliação: Não atende
  - Justificativa: Issues de bug existem, mas sem processo documentado de triagem/fechamento.
  - Evidências: 

3) Gerência de Configuração
- APs / práticas resumidas para nível F:
  - Uso de controle de versão.
  - Gestão de releases e registros de mudança.
  - Identificação e proteção de configurações (tags/branches/branch protection).

Avaliação por prática
- Controle de versão
  - Avaliação: Atende
  - Justificativa: Uso de git com histórico e PRs.
  - Evidências: commits: abcdef1, 0123456, PRs: #7, #9
- Gestão de releases e registros de mudança
  - Avaliação: Não atende
  - Justificativa: CHANGELOG ou tags não existentes; processo de release informal.
  - Evidências: 
- Identificação de configurações
  - Avaliação: Parcial
  - Justificativa: Branches e PRs usados; falta política documentada (contributing/branching).
  - Evidências: PRs, ausência de CONTRIBUTING.md

Tabela
| Processo escolhido         | Nível MPS.BR avaliado | Práticas (resumo)                             | Avaliação (Atende/Parcial/Não) | Justificativa / Evidências (referências) |
|---------------------------|----------------------:|-----------------------------------------------|-------------------------------|------------------------------------------|
| Gerência de Requisitos    | F                     | Identificar; Rastreabilidade; Priorizar       | Parcial / Parcial / Não       | README.md (/backend e /frontend), commits 8da119a, 729259a, issues #10, #12 |
| Garantia da Qualidade     | F                     | Plano de testes; Execução/registro; Defeitos  | Parcial / Não / Não       | backend/src/tests/; issues label:bug
| Gerência de Configuração  | F                     | Controle de versão; Releases; Identificação   | Atende / Não / Parcial    | commits; CHANGELOG.md; PRs; ausência de política documentada |

