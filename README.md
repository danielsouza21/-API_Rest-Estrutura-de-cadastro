# [API] Estrutura de cadastro em banco de dados MongoDB (com Node.js e Express)
Usando NodeJS, Express e Mongo


<img src="https://badgen.net/badge/node.js/12.18/blue"/> <img src="https://badgen.net/badge/Framework/Express/black"/> <img src="https://badgen.net/badge/Postman/App/orange"/> <img src="https://badgen.net/badge/Mongo/DB/green"/>

Status: Desenvolvimento :warning:

# Funcionalidade:
Aplicando conceitos do NodeJS + Express, criamos uma estrutura de pastas, conectamos ao MongoDB através do model, controller e rota para cadastro de usuário com senha criptografada. 
 
 # Utilizando o Postman App
 O Postman é uma plataforma auxiliar de desenvolvimento de API's, capaz de realizar diversas requests a um endereço especifico.
 Ao abrir o aplicativo, podemos criar um novo request e acessar o dominio em questão (http://localhost:3030/produtos). Após, definimos o método de request (GET, POST e/ou PUT). Em ambos os casos, podemos também acessar um ID especifico. Para inserirmos um novo produto no BD, devemos acessar o body e definir o dado para 'x-www-form-urlencoded', para entao criarmos o JSON (parametro em KEY e valor em VALUE).
  
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
