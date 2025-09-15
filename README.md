# swagLabs

Este projeto utiliza a stack moderna de desenvolvimento com foco em automação de testes end-to-end.

## Stack Utilizada

- **VS Code**: Ambiente de desenvolvimento recomendado para produtividade, depuração e integração com extensões.
- **JavaScript (JS)**: Linguagem principal para scripts de automação e testes.
- **Playwright**: Framework robusto para automação de testes de aplicações web, suportando múltiplos navegadores.

## Estrutura do Projeto

- `pages/`: Páginas de objetos para facilitar a manutenção dos testes.
- `tests/`: Scripts de testes automatizados.
- `test-results/`: Resultados gerados após a execução dos testes.
- `package.json`: Gerenciamento de dependências e scripts do projeto.

## Como Executar

1. **Instale as dependências:**
   ```sh
   npm install
   ```
2. **Execute os testes:**
   ```sh
   npx playwright test
   ```
3. **Visualize os resultados:**
   - Os resultados estarão disponíveis na pasta `test-results/`.

## Requisitos

- Node.js instalado
- VS Code instalado (recomendado)

## Recomendações

- Utilize a extensão Playwright Test para VS Code para melhor experiência de desenvolvimento.
- Mantenha as dependências atualizadas executando `npm update` regularmente.

---

Desenvolvido com foco em qualidade, automação e produtividade.