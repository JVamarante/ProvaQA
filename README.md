# Projeto: Calculadora de IMC com Testes Unitários

Este é um projeto simples que implementa uma calculadora de Índice de Massa Corporal (IMC) em JavaScript, acompanhada de uma suíte de testes unitários robusta utilizando o framework Jest para garantir a qualidade e a correção das regras de negócio.

## Regras de Negócio Testadas

A função `calcularIMC` foi testada para garantir as seguintes regras:

1.  **Cálculo Correto:** Valida se a fórmula `IMC = peso / (altura * altura)` é aplicada corretamente, com o resultado arredondado para duas casas decimais.
2.  **Validação de Entradas:** Garante que os valores de `peso` e `altura` são do tipo `number` e são positivos (maiores que zero).
3.  **Classificação Correta:** Assegura que o valor de IMC calculado retorne a classificação correta, conforme as faixas padrão da OMS:
    -   `Abaixo do peso` (< 18.5)
    -   `Peso normal` (18.5 - 24.9)
    -   `Sobrepeso` (25.0 - 29.9)
    -   `Obesidade Grau I` (30.0 - 34.9)
    -   `Obesidade Grau II` (35.0 - 39.9)
    -   `Obesidade Grau III` (>= 40.0)

## Pré-requisitos

-   Node.js (versão 16 ou superior)
-   npm (geralmente instalado com o Node.js)

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/JVamarante/ProvaQA.git](https://github.com/JVamarante/ProvaQA.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd ProvaQA
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```

## Como Executar os Testes

Para rodar a suíte de testes e gerar o relatório de cobertura no terminal, execute o seguinte comando:

```bash
npm test
```
## Resultado Teste
<img width="609" height="589" alt="ResultadoTest" src="https://github.com/user-attachments/assets/09a98c7b-b80a-418a-8c66-dd94016caa98" />
