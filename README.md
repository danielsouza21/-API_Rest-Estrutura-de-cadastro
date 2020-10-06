# [API] Estrutura de cadastro em banco de dados MongoDB (com Node.js e Express)
Usando NodeJS, Express e Mongo


<img src="https://badgen.net/badge/node.js/12.18/blue"/> <img src="https://badgen.net/badge/Framework/Express/black"/> <img src="https://badgen.net/badge/Postman/App/orange"/> <img src="https://badgen.net/badge/Mongo/DB/green"/>

Status: Desenvolvimento :warning:

# Funcionalidade:
Aplicando conceitos do NodeJS + Express, criamos uma estrutura de pastas, conectamos ao MongoDB através do model, controller e rota para cadastro de usuário com senha criptografada. 
 
 # Utilizando o Postman App
 Criar um novo request e acessar o dominio em questão (http://localhost:3000/auth/register). Após, definimos o método de request (POST). Para inserirmos um novo usuario no BD, devemos acessar o body e definir o dado para 'raw', para entao criarmos o JSON com "name", "email" e "password". 
 Não é permitido mais de um usuario com o mesmo email e a senha é criptografada para o formato hash.
  
# Terminal:
Pre-sets:
>npm init -y

>npm install express

>npm install body-parser

-- Instalar mongoDB na maquina
>npm install mongoose

>npm install bcrypt

Run:
>node src/index.js
