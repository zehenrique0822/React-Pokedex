# API REST com Autenticação JWT
 
 `O projeto constite em uma api em que o usuário pode se cadastrar na aplicação informando seu
nome, email e senha e possa logar usando apenas email e senha.
O usuário logado poderá cadastrar produtos informando obrigatoriamente seu nome,
descrição e preço, ele também poderá listar e deletar estes produtos. Além disso, o
produto deverá ter no mínimo 1 imagem e no máximo 5. Ao cadastrar o produto o
usuário deve ser vinculado a ele.`
 
 ## 🚀 Começando
 Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
 
 ## 📋 Pré-requisitos
 - Conta criada na Amazon S3 que é utilizada para salvar as imagens.

## 💡 Tecnologias Utilizadas:
- NodeJS/Typescript
- Framework Express.js
- Jsonwebtoken - Para Autenticação JWT
- Bcryptjs  - Para criptografia e descriptografia
- Multer - Para Upload de Imagens
- Yup - Para validação de dados
- PostgreSQL - Banco de dados
- TypeORM - ORM
## Instalação & Configuração
 
#### 1 - É necessário clonar o repositório com o comando `git clone https://github.com/zehenrique0822/rest-api-nodejs-JWT.git`
#### 2 - Acessar o diretório do projeto e instalar as dependencias com o comando `yarn`
#### 3 - Adicione um .env copiando o arquivo .env.example ao diretório raiz ao clonar este projeto pela primeira vez para armazenar variáveis de ambiente, preenchendo `JWT` com SECRET e as informações de acesso da `AMAZON S3` (Seu bucket na AWS S3 deve estar publico para que tudo ocorra com sucesso)
#### 4 - No arquvivo ./src/database/index.ts você pode alterar os dados de acesso ao banco o padrão atual é: 
    `type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    database: "tsauth",
    password: "1234",`
 #### OBS: Typeorm passou por mudanças recentes e não consegui localizar ainda a forma correta de utilizar o .env neste arquivo.

## Para executar o projeto

Execute `yarn dev` e aguarde até a mensagem de sucesso ( Imagem abaixo ) para iniciar a API, a porta padrão é 3000, então para requisições será `http://localhost:3000/`

![image](https://user-images.githubusercontent.com/89668742/175925115-b5d00c6a-f0b4-4c6c-82b6-3aeb8548622e.png)


## Endpoints:

A seguir está um exemplo para requisições nos endpoints criados:

#### Criação de Usuário - POST: `http://localhost:3000/users`

Em caso de sucesso retorna todos os dados do usuário cadastrado.

```
{
    "name": "Jose", ( O nome precisa ter no mínimo 3 caracteres e no máximo 100 )
    "email": "jose@gmail.com", ( O email precisa ser válido e é unico )
    "password": "123456"  ( A senha precisa ter no mínimo 6 caracteres e no máximo 50 )
}
```

#### Autenticação de Usuário - POST: `http://localhost:3000/auth`

Em caso de sucesso retorna os dados do usuário cadastrado e o JWT Token para acesso aos demais endpoints ( Expiração do token é de 1 dia ). 

```
{
    "email": "jose@gmail.com", ( Email cadastrado anteriormente )
    "password": "123456" ( Senha cadastrada anteriormente )
}
```

#### Criação de Produto - POST: `http://localhost:3000/products`

Em caso de sucesso retorna os dados do produto cadastrado e o id do produto para ser feito o envio das suas imagens.

`Obrigatório enviar no header o token de autorização que é do tipo Bearer Token, este token é retonado na autenticação`

```
{
    "name": "produto 2", ( O nome precisa ter no mínimo 3 caracteres e no máximo 80 )
    "description": "descriçao teste 15", ( A descrição precisa ter no mínimo 10 caracteres e no máximo 100 )
    "price": "10.18"  ( Preço obrigatório )
}
```

#### Criação de Imagens do Produto (Uma por vez) - POST: `http://localhost:3000/products/images`

Em caso de sucesso retorna os dados da imagem do produto cadastrado, inclusive o link da imagem na AWS S3.

`Obrigatório enviar no header o token de autorização que é do tipo Bearer Token, este token é retonado na autenticação`

```
{
    "id_product": d1d98431-0d2a-4028-9083-fc987ab980d4,
    file: (Arquivo de imagem do produto)
}
```

#### Listagem do Produto - GET: `http://localhost:3000/products/{id_product-aqui}`

Em caso de sucesso retorna os dados do produto cadastrado, inclusive as imagens ( Um objeto com dados do produto e um array com dados de todas as imagens ).

`Obrigatório enviar no header o token de autorização que é do tipo Bearer Token, este token é retonado na autenticação`


#### Deletar Produto - DELETE: `http://localhost:3000/products/{id_product-aqui}`

Em caso de sucesso retorna a seguinte mensagem `"status": "Produto excluído."`

`Obrigatório enviar no header o token de autorização que é do tipo Bearer Token, este token é retonado na autenticação`

## Testes:

Foram totalmente realizados no ambiente automatizado do Postman, onde foi criado uma collection com 6 testes, comprovando o sucesso de cada funcionalidade. Os testes que foram feitos nesse caso podem ser vistos na figura abaixo, logo na aba a esquerda. O Postman é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST.

![image](https://user-images.githubusercontent.com/89668742/175929630-8f972a3d-01a2-4996-bdd9-0c6c98cdfa31.png)
