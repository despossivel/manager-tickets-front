# Ticket Management Frontend

Este é o frontend da aplicação de gerenciamento de tickets, desenvolvido em React com Tailwind CSS.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Docker (opcional)

## Instalando Dependências

Antes de iniciar o projeto, é necessário instalar as dependências. No diretório raiz do projeto, execute:

```bash
npm install
```
ou
```bash
yarn install
```

## Executando o Projeto

### Sem Docker

Para rodar o projeto localmente, execute o comando:

```bash
npm dev
```
ou
```bash
yarn dev
```

Isso irá iniciar o servidor de desenvolvimento e você poderá acessar a aplicação em [http://localhost:3000](http://localhost:3000).

### Com Docker

1. **Construir e rodar a imagem Docker**

   Execute o seguinte comando na raiz do projeto:

   ```bash
   docker compose up -d --build
   ```
 
Agora, você pode acessar a aplicação em [http://localhost:3000](http://localhost:3000).

## Acessando a Documentação

A documentação da API pode ser acessada através de [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (ajuste a URL conforme necessário, dependendo da sua configuração).

## Estilização

Este projeto utiliza [Tailwind CSS](https://tailwindcss.com/) para estilização. Para mais informações sobre como personalizar estilos, consulte a [documentação do Tailwind CSS](https://tailwindcss.com/docs).