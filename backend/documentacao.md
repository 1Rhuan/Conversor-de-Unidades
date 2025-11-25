# **Documentação da API de Conversões**

Esta é uma API RESTful que fornece várias funcionalidades de conversão, incluindo moedas, temperatura, distância e peso.

## **Base URL**

A base URL da API é:

```
http://localhost:8080/api
```

## **Rotas Disponíveis**

### 1. **Conversão de Moeda**

#### **GET /moedas**

Esta rota converte um valor de uma moeda para outra.

#### **Parâmetros da Query:**

* `from` (obrigatório): A moeda de origem (por exemplo, `USD`, `BRL`, `EUR`).
* `to` (obrigatório): A moeda de destino (por exemplo, `USD`, `BRL`, `EUR`).
* `amount` (obrigatório): O valor a ser convertido.

#### **Exemplo de Requisição:**

```http
GET http://localhost:8080/api/moedas?from=USD&to=BRL&amount=10
```

#### **Resposta:**

```json
{
    "from": "USD",
    "to": "BRL",
    "amount": "10",
    "resultado": 52.5
}
```

#### **Erros Comuns:**

* `400 Bad Request`: Se algum dos parâmetros obrigatórios estiver faltando.

  * Exemplo: `Parâmetros faltando. Use: /convert?from=USD&to=BRL&amount=10`.

---

### 2. **Conversão de Temperatura**

#### **GET /temp**

Esta rota converte temperaturas entre Celsius e Fahrenheit.

#### **Parâmetros da Query:**

* `from` (obrigatório): A unidade de temperatura de origem (`C` para Celsius, `F` para Fahrenheit).
* `to` (obrigatório): A unidade de temperatura de destino (`C` para Celsius, `F` para Fahrenheit).
* `value` (obrigatório): O valor a ser convertido.

#### **Exemplo de Requisição:**

```http
GET http://localhost:8080/api/temp?from=C&to=F&value=30
```

#### **Resposta:**

```json
{
    "tipo": "temperatura",
    "from": "C",
    "to": "F",
    "valor": 30,
    "resultado": 86
}
```

#### **Erros Comuns:**

* `400 Bad Request`: Se algum dos parâmetros obrigatórios estiver faltando ou for inválido.

  * Exemplo: `Conversão inválida. Use C↔F.`

---

### 3. **Conversão de Distância**

#### **GET /dist**

Esta rota converte distâncias entre quilômetros (km) e milhas (mi).

#### **Parâmetros da Query:**

* `from` (obrigatório): A unidade de origem (`km` para quilômetros, `mi` para milhas).
* `to` (obrigatório): A unidade de destino (`km` para quilômetros, `mi` para milhas).
* `value` (obrigatório): O valor a ser convertido.

#### **Exemplo de Requisição:**

```http
GET http://localhost:8080/api/dist?from=km&to=mi&value=10
```

#### **Resposta:**

```json
{
    "tipo": "distância",
    "from": "km",
    "to": "mi",
    "valor": 10,
    "resultado": 6.21371
}
```

#### **Erros Comuns:**

* `400 Bad Request`: Se algum dos parâmetros obrigatórios estiver faltando ou for inválido.

  * Exemplo: `Conversão inválida. Use km↔mi.`

---

### 4. **Conversão de Peso**

#### **GET /peso**

Esta rota converte pesos entre quilogramas (kg) e libras (lb).

#### **Parâmetros da Query:**

* `from` (obrigatório): A unidade de origem (`kg` para quilogramas, `lb` para libras).
* `to` (obrigatório): A unidade de destino (`kg` para quilogramas, `lb` para libras).
* `value` (obrigatório): O valor a ser convertido.

#### **Exemplo de Requisição:**

```http
GET http://localhost:8080/api/peso?from=kg&to=lb&value=50
```

#### **Resposta:**

```json
{
    "tipo": "peso",
    "from": "kg",
    "to": "lb",
    "valor": 50,
    "resultado": 110.231
}
```

#### **Erros Comuns:**

* `400 Bad Request`: Se algum dos parâmetros obrigatórios estiver faltando ou for inválido.

  * Exemplo: `Conversão inválida. Use kg↔lb.`

---

## **Códigos de Status HTTP**

* **200 OK**: A requisição foi bem-sucedida e a resposta foi retornada corretamente.
* **400 Bad Request**: Parâmetros obrigatórios estão faltando ou inválidos. Verifique a documentação da rota para os parâmetros corretos.
* **500 Internal Server Error**: Ocorreu um erro no servidor ao processar a requisição.

---

## **Exemplo de Fluxo**

### **Conversão de moeda**

1. Faça uma requisição para a API de conversão de moedas:

   ```http
   GET http://localhost:8080/api/moedas?from=USD&to=BRL&amount=10
   ```
2. A API retorna o valor convertido:

   ```json
   {
       "from": "USD",
       "to": "BRL",
       "amount": "10",
       "resultado": 52.5
   }
   ```

### **Conversão de temperatura**

1. Faça uma requisição para converter 30°C para Fahrenheit:

   ```http
   GET http://localhost:8080/api/temp?from=C&to=F&value=30
   ```
2. A API retorna o valor convertido:

   ```json
   {
       "tipo": "temperatura",
       "from": "C",
       "to": "F",
       "valor": 30,
       "resultado": 86
   }
   ```

---

## **Conclusão**

Essa API de conversão oferece uma maneira simples de realizar conversões entre várias unidades, como moedas, temperatura, distância e peso. Basta enviar os parâmetros corretos na URL, e a API retornará o resultado desejado. Se algum parâmetro estiver faltando ou incorreto, você receberá uma resposta de erro explicativa.


