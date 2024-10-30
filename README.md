# GitHub API

### licença e tecnologias utilizadas

<img src="https://img.shields.io/github/license/henrygoncalvess/github_api?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a>

consumindo a API do GitHub para listar os projetos de um usuário ou organização.  
conteúdo que a api retorna:

- [x] Nome do repositório
- [x] Descrição
- [x] Quantidade de Stars
- [x] Quantidade de Forks
- [x] Número de commits do repositório
  
<details open="open">
<summary>Tabela de Conteúdos</summary>

- [Instrução de uso](#instrução-de-uso)
  - [GitHub Pages](#github-pages)
  - [Clonando Repositório](#clonando-repositório)
  - [Etapas](#etapas)
- [Endpoints](#endpoints)
- [Instrução de instalação - se falhar a primeira opção](#erro)

</details>

<br>

_sei o básico de front-end, a estrutura de pastas não está muito organizada_
``` mermaid
---
    title: Estrutura de pastas
---
flowchart LR
    gith("📁 _github_api_")@{ shape: processes }
    gith --o src("📁 _src_")@{ shape: processes }
    src --o images("📁 _images_")@{ shape: processes }
    images --- gitlogo("📁 _GitHub_Logo.png_")@{ shape: card }
    src --o user("📁 _user_view_")@{ shape: processes }
    user --- usIndex("📁 _user.html_")@{ shape: card }
    user --- usStyle("📁 _userStyle.html_")@{ shape: card }
    user --- usJs("📁 _userScript.html_")@{ shape: card }
    src --- index("📁 _index.html_")@{ shape: card }
    src --- css("📁 _style.css_")@{ shape: card }
    src --- js("📁 _script.js_")@{ shape: card }

    %%CLASSES
    classDef default fill:#191919,color:white;
    
    classDef pasta fill:#403211,stroke:#c99e34,stroke-width:2px,color:#fff1cc;

    %%aplicação de classes
    class gith,src,images,user pasta



    %%LINKS
    
    %%pastas
    linkStyle 0,1,3 stroke:#f2c04b

    %%arquivos
    linkStyle default stroke-width:2px;

    click src "https://github.com/henrygoncalvess/github_api/tree/main/src"
    click images "https://github.com/henrygoncalvess/github_api/tree/main/src/images"
    click user "https://github.com/henrygoncalvess/github_api/tree/main/src/user_view"
    click index "https://github.com/henrygoncalvess/github_api/tree/main/src/index.html"
    click css "https://github.com/henrygoncalvess/github_api/tree/main/src/style.css"
    click js "https://github.com/henrygoncalvess/github_api/tree/main/src/script.js"
    click gitlogo "https://github.com/henrygoncalvess/github_api/tree/main/src/images/GitHub_Logo.png"
    click usIndex "https://github.com/henrygoncalvess/github_api/tree/main/src/user_view/user.html"
    click usStyle "https://github.com/henrygoncalvess/github_api/tree/main/src/user_view/userStyle.css"
    click usJs "https://github.com/henrygoncalvess/github_api/tree/main/src/user_view/userScript.js"
```

<br>

## Instrução de uso

### GitHub Pages

link indisponível no momento

<br>

### Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

```repositorios\clonados```
``` bash
git clone https://github.com/henrygoncalvess/github_api.git
```

<br>

### Etapas

#### 1. Abra o Visual Studio Code e instale a seguinte extenção:

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)  
![image](https://github.com/user-attachments/assets/fa54bfd8-1c6b-4590-babc-5e2909e29ad8)

#### 2. na pasta do repositório clonado  
execute o arquivo "index.html" utilizando o **Live Server**:  

![image](https://github.com/user-attachments/assets/bb455c04-d225-4e0b-a9c0-08dc8334a753)


#### 3. na página principal do projeto, digite seu mesmo nome de usuário do GitHub


https://github.com/user-attachments/assets/c06c6020-cfdf-4236-96eb-c6c8b6867dcc



<br>

## Endpoints

Mesmo com a existência do front-end para vizualizar as respostas das requisições,  
No Postman *ou na linha de comando*, você pode testar os **endpoints**  
abaixo e ver o json por si mesmo.

> [!tip]
> acesse este link, caso não saiba utilizar o Postman para fazer requisições [Postman](https://learning.postman.com/docs/introduction/overview/)  
> acesse este link, caso não saiba fazer requisições pela linha de comando [Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api)

Rota | Descrição
--- | :---:
***GET*** ` https://api.github.com/users/OWNER ` | Lista todas as informações do usuário - [ver JSON](#get1)
***GET*** ` https://api.github.com/users/OWNER/repos ` | Lista todas as informações dos repositórios do usuário - [ver JSON](#get2)
***GET*** ` https://api.github.com/repos/OWNER/REPO/commits?per_page=100 ` | Lista todas as informações de commits do usuário - [ver JSON](#get3)

<br>

### <a name="get1">GET - ***Response***</a>

`OBS: mostrando apenas as principais infos`  
`OWNER: octocat`  
`REPO: octocat`  
``` json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "url": "https://api.github.com/users/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "name": "monalisa octocat",
  "public_repos": 2,
  "followers": 20,
  "following": 0,
}
```

<br>

### <a name="get2">GET - ***Response***</a>

`OBS: mostrando apenas as principais infos`  
`OWNER: octocat`  
`REPO: Hello-World`  
``` json
{
  "name": "Hello-World",
  "owner": {
    "login": "octocat",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "url": "https://api.github.com/users/octocat",
    "repos_url": "https://api.github.com/users/octocat/repos",
  },
  "description": "This your first repo!",
  "commits_url": "https://api.github.com/repos/octocat/Hello-World/commits{/sha}",
  "forks_url": "https://api.github.com/repos/octocat/Hello-World/forks",
  "stargazers_url": "https://api.github.com/repos/octocat/Hello-World/stargazers",
  "forks_count": 9,
  "stargazers_count": 80,
  "watchers_count": 80,
  "default_branch": "master",
}
```

<br>

### <a name="get3">GET - ***Response***</a>

`OBS: mostrando apenas as principais infos`  
`OWNER: octocat`  
`REPO: Hello-World`  
``` json
{
  "url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
  "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e",
  "commit": {
    "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "author": {
      "name": "Monalisa Octocat",
      "date": "2011-04-14T16:00:49Z"
    },
    "committer": {
      "name": "Monalisa Octocat",
      "date": "2011-04-14T16:00:49Z"
    },
    "message": "Fix all the bugs",
    "tree": {
      "url": "https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e",
      "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
    },
    "comment_count": 0,
    "verification": {
      "verified": false,
      "reason": "unsigned",
      "signature": null,
      "payload": null
    }
  }
}
```

<br>

## <a name="erro">Instrução de instalação - se falhar a primeira opção</a>

[Tutorial de uso - Vídeo](https://youtu.be/OvfLavRD1Os?si=Huv09VYBQ4Z505bx)
