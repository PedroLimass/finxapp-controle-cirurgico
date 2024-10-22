
<div align="center">
<p style="display: flex; justify-content: center;">
    <img src='https://i.ibb.co/wSB2h9v/logo-Fixapp.png' width="fit-content" height="auto">
</p>
</div>

# Sistema de Solicitações cirúrgicas

Este projeto é um sistema de gerenciamento de solicitações cirúrgicas, desenvolvido utilizando **Vue.js 2** com **Vite** e **TypeScript**. O sistema permite a listagem de solicitações cirúrgicas com filtros por médico ou paciente, além de funcionalidades como paginação, ordenação por data e integração com uma API mockada usando **json-server**.

## Funcionalidades

- **Listagem de solicitações cirúrgicas**: Exibe uma lista de solicitações cirúrgicas com informações de médicos e pacientes.
- **Filtros**: Filtro por médico ou paciente para refinar os resultados da listagem.
- **Paginação**: Exibe a listagem de maneira paginada.
- **Ordenação**: Ordena a listagem com base nas datas das solicitações.
- **Mock de API**: Uso de `json-server` para mockar o contrato da API.
- **Chamadas HTTP**: Feitas com `axios` utilizando uma configuração base.

## Tecnologias Utilizadas

- **Vue.js 2**: Framework JavaScript utilizado para a construção da interface do usuário.
- **TypeScript**: Superset de JavaScript utilizado para fornecer tipagem estática ao código.
- **Vite**: Ferramenta de build rápida e moderna.
- **SCSS**: Utilizado para estilização avançada e modular com definições globais de cores e reset de estilo.
- **json-server**: Ferramenta para simular uma API RESTful.
- **axios**: Biblioteca para realizar requisições HTTP.
- **Conventional Commits**: Segue boas práticas para a padronização de commits.


# Como Contribuir
- Faça um fork deste repositório.
- Crie uma branch para a sua feature (git checkout -b feature/nova-feature).
- Faça commit das suas alterações (git commit -m 'Adiciona nova feature').
- Envie sua branch (git push origin feature/nova-feature).
Abra um Pull Request.

# Executar o projeto 💻

Primeiramente é necessário clonar o projeto e entrar na pasta raiz.

```
https://github.com/PedroLimass/finxapp-controle-cirurgico.git
```

Para rodar o projeto na primeira vez é necessário o comando abaixo.
```sh
npm install ou yarn
```

Para rodar outras vezes basta rodar o comando abaixo

```sh
npm run dev ou yarn dev
```

Após rodar os comandos o projeto estará disponível ao acesso pelo navegador na porta 5173

```
http://localhost:5173/
```


Ocorrendo tudo certo deve ser possivel visível a seguinte tela.
<p align='center'>
    <img src='https://i.ibb.co/5knDT72/fixapp-Github.png' width="90%" height="auto">
</p>