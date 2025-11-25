# Especificação do Serviço de Conversões

## Descrição
Backend que fornece tipos de medida e unidades disponíveis, e executa conversões entre unidades compatíveis.

Fluxo:
1. Listar tipos de medida (ex.: Peso, Moeda, Temperatura).
2. Obter unidades válidas para um tipo.
3. Solicitar conversão entre duas unidades daquele tipo.

## Stack
- Node.js
- NestJS
- Axios

## Endpoints

### Conversor de Moedas
GET /api/moeda

Exemplo de resposta
```
{
  "from": "USD",
  "to": "BRL",
  "amount": "10",
  "resultado": 55.20
}
```
### Conversor de Temperatura
GET /temp?from=C&to=F&value=30

Exemplo de Resposta
```
{
  "tipo": "temperatura",
  "from": "C",
  "to": "F",
  "valor": 30,
  "resultado": 86
}
```
### Conversor de Distancia
GET /dist?from=km&to=mi&value=10

Exemplo de resposta
```
{
  "tipo": "distância",
  "from": "km",
  "to": "mi",
  "valor": 10,
  "resultado": 6.21371
}

```
### Conversor de Peso 
GET /peso?from=kg&to=lb&value=50

Exemplo de Resposta
```
{
  "tipo": "peso",
  "from": "kg",
  "to": "lb",
  "valor": 50,
  "resultado": 110.231
}

```
## Boas práticas sugeridas
- Validar parâmetros (tipo e unidades) no backend para evitar conversões incompatíveis.
- Tratar unidades e tipos de forma case-insensitive.
- Para moedas: buscar taxas externas e aplicar cache (TTL) para reduzir chamadas e melhorar latência.
- Padronizar respostas de erro com mensagens claras e HTTP status apropriados (400 para parâmetros inválidos, 404 para tipo/unidade não encontrado, 500 para erros internos).
- Adicionar testes unitários para funções de conversão (especialmente para temperatura e pesos).
- Documentar unidades suportadas e limitações (por exemplo, precisão/rounding).
