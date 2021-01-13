import path from 'path';

import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import './database/connection';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';



const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
app.listen(process.env.PORT || 3333);   //isso garante que o heroku consiga inserir uma porta para iniciar a aplicação


//padrão MVC - MODEL VIEW CONTROLLERS
// REQ / RES
//localhost:3333


//rota = conjunto
//recurso =usuário

//métodos HTTP = GET,POST,PUT, DELETE
//onde GET = Busca uma informação
//POST= Criar uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//Parâmetros
//Query params: http://localhost:3333/users?search=diego serve para buscarmos usuários através de requests
//Route params: http://localhost:3333/users/1 serve para identificar um recurso, por exemplo na hora de deletar um usuário precisamos saber especificamente qual usuário iremos deletar
//Body: http://localhost:3333/users o body nos retorna tudo o que é necessário para criar um usuário

//Podemos utilizar 3 tipos de banco de dados na nossa aplicação:
//Driver nativo, Query builder e ORM, estaremos usando o ORM
//Driver nativo nos permite utilizar as funções do BD direto do node mas não possui nenhuma abstração
//O query builder nos permite utilizar as funções das tabelas utilizando o próprio JS
//ORM temos uma classe do JS que representa uma tabela no banco de dados
//OBS: Uma grande vantagem do Query builder e do ORM é que caso eu algum dia resolva trocar o banco de dados que estou utilizando eu não precisarei mexer em nada na aplicação (ex: trocar de sqlite para postgres)
