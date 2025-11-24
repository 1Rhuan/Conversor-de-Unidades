# Análise de Conformidade com MPS.BR — Avaliação - Esboço

Objetivo
- Avaliar o projeto Conversor-de-Unidades em relação ao modelo MPS.BR e registrar evidências para três processos selecionados.

Modelo e Nível Avaliado
- Modelo: MPS.BR
- Nível avaliado (sugestão inicial): F (Gerenciado)
  - Ajuste para G, E etc. conforme sua avaliação.

Processos escolhidos
- Gerência de Requisitos
- Garantia da Qualidade (Testes)
- Gerência de Configuração

Instruções de uso
- Substitua todos os campos entre << >> por referências reais do repositório (arquivos, issues, PRs, commits, caminhos).
- Para cada prática: marque Avaliação = Atende / Parcial / Não atende e adicione uma justificativa curta.
- Anexe arquivos em docs/evidencias/ ou cole links para issues/PRs/commits na coluna Evidências.

1) Gerência de Requisitos
- APs / práticas resumidas para nível F:
  - Identificar e registrar requisitos.
  - Manter rastreabilidade e controlar mudanças.
  - Priorizar requisitos quando aplicável.

Avaliação por prática
- Identificar e registrar requisitos
  - Avaliação: Parcial
  - Justificativa: Funcionalidades listadas em README / issues, mas sem documento formal único de requisitos.
  - Evidências: <<README.md (seção "Funcionalidades")>>, <<issues #10, #12>>
- Rastreabilidade e controle de mudanças
  - Avaliação: Parcial
  - Justificativa: Mudanças visíveis via commits/PRs; não há matriz de rastreabilidade entre requisito → commit/PR.
  - Evidências: <<PR #5>>, <<commit abcdef1>>
- Priorização
  - Avaliação: Não atende
  - Justificativa: Não há backlog priorizado ou critérios de priorização documentados.
  - Evidências: <<(nenhuma) ou indicar arquivo/issue se existir>>

2) Garantia da Qualidade / Testes
- APs / práticas resumidas para nível F:
  - Planejamento básico de verificação/validação.
  - Execução de testes e registro de resultados.
  - Registro e tratamento de defeitos.

Avaliação por prática
- Planejamento de testes
  - Avaliação: Parcial
  - Justificativa: Existe pasta de testes e CI, porém falta plano de testes formal.
  - Evidências: <<tests/>>, <<.github/workflows/ci.yml>>, <<docs/evidencias/plano_de_testes.md (se houver)>>
- Execução e registro de resultados
  - Avaliação: Parcial
  - Justificativa: Testes automáticos executados pelo CI; não há relatórios consolidados por release.
  - Evidências: <<badge do CI no README>>, <<logs do workflow (link)>>
- Registro e tratamento de defeitos
  - Avaliação: Não atende
  - Justificativa: Issues de bug existem, mas sem processo documentado de triagem/fechamento.
  - Evidências: <<issues label:bug, ex.: #15>>

3) Gerência de Configuração
- APs / práticas resumidas para nível F:
  - Uso de controle de versão.
  - Gestão de releases e registros de mudança.
  - Identificação e proteção de configurações (tags/branches/branch protection).

Avaliação por prática
- Controle de versão
  - Avaliação: Atende
  - Justificativa: Uso de git com histórico e PRs.
  - Evidências: <<commits: abcdef1, 0123456>>, <<PRs: #7, #9>>
- Gestão de releases e registros de mudança
  - Avaliação: Parcial
  - Justificativa: CHANGELOG ou tags podem existir; processo de release informal.
  - Evidências: <<CHANGELOG.md (se existir)>>, <<tags: v0.1.0>>
- Identificação de configurações
  - Avaliação: Parcial
  - Justificativa: Branches e PRs usados; falta política documentada (contributing/branching).
  - Evidências: <<PRs>>, <<ausência de CONTRIBUTING.md>>

Tabela resumida (preencha os campos << >>)
| Processo escolhido         | Nível MPS.BR avaliado | Práticas (resumo)                             | Avaliação (Atende/Parcial/Não) | Justificativa / Evidências (referências) |
|---------------------------|----------------------:|-----------------------------------------------|-------------------------------|------------------------------------------|
| Gerência de Requisitos    | F                     | Identificar; Rastreabilidade; Priorizar       | Parcial / Parcial / Não       | <<README.md; issues #10,#12; PR #5; falta rastreabilidade formal>> |
| Garantia da Qualidade     | F                     | Plano de testes; Execução/registro; Defeitos  | Parcial / Parcial / Não       | <<tests/; CI workflow; issues label:bug>> |
| Gerência de Configuração  | F                     | Controle de versão; Releases; Identificação   | Atende / Parcial / Parcial    | <<commits; CHANGELOG.md; PRs; ausência de política documentada>> |

