# 🧠 Quiz API - Node.js + Express

Uma API robusta e escalável para geração de Quizzes traduzidos em tempo real. O projeto consome a base de dados da **Open Trivia Database** e utiliza um motor de tradução dinâmica para oferecer suporte a múltiplos idiomas.

Este projeto foi desenvolvido com foco em **Padrões de Projeto (Design Patterns)** e separação de responsabilidades, servindo como backend para aplicações web e mobile (Android/Java).

## 🚀 Tecnologias e Ferramentas
- **Node.js**: Ambiente de execução.
- **Express**: Framework web minimalista e flexível.
- **Consign**: Gerenciamento de auto-load e injeção de dependências.
- **google-translate-api-x**: Integração com a API de tradução.
- **Fetch API**: Comunicação assíncrona com serviços externos.

## 🏗️ Arquitetura do Projeto (Padrão MSC)
A estrutura foi organizada para garantir que a lógica de negócio seja independente da infraestrutura:

- **Models**: Contém a classe `Quest`, responsável pela estrutura do dado e pela "Fábrica de Objetos" que padroniza o JSON.
- **Services**: Camada isolada para a lógica de tradução, permitindo fácil substituição de bibliotecas.
- **Controllers**: Gerencia as requisições, orquestra os serviços e envia as respostas.
- **Routes**: Endpoints dinâmicos com suporte a parâmetros de rota (Route Params) e Regex.



## 🔗 Endpoints Disponíveis

| Rota | Descrição |
| :--- | :--- |
| `GET /quiz` | Retorna 10 perguntas aleatórias em Inglês. |
| `GET /quiz/:lang` | Retorna perguntas no idioma especificado (ex: `/quiz/pt`). |
| `GET /quiz/:lang/:category` | Filtra perguntas por categoria e idioma (ex: `/quiz/pt/18`). |
| `GET /quiz/categorias` | Lista todas as categorias oficiais e seus IDs. |
| `GET /quiz/idiomas` | Lista todos os códigos de idiomas suportados pela tradução. |

## 🛠️ Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/RafaelDesenvolvedor1/Api-AppQuiz.git](https://github.com/RafaelDesenvolvedor1/Api-AppQuiz.git)


2. **Instale as dependências:**
```bash
npm install

```
3. **Inicie o servidor (Modo Desenvolvimento):**
```bash
npm start
```

**Nota:** O servidor iniciará na porta 3000 por padrão. Acesse http://localhost:3000/quiz no seu navegador ou Postman para testar.

📝 Próximos Passos
- [ ] Implementação de Documentação interativa via Swagger/APIDoc.

- [ ] Middleware para validação de códigos de idioma via Regex.

- [ ] Sistema de Cache para otimização das chamadas de tradução.

Desenvolvido por Rafael Santos
