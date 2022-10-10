require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// mongoose banco de dados
mongoose.connect(process.env.CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const session = require('express-session'); // cookie do navegador do usuario
const MongoStore = require('connect-mongo'); // salvar sessão base de dados
const flash = require('connect-flash'); // mensagens de erro e coisas que apagam rapido
const routes = require('./routes'); // rota das paginas
const path = require('path'); // caminhos
const helmet = require('helmet'); // segurança
const csrf = require('csurf'); // tokken para os forumarios
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'texto que ninguem vai ver',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONURL }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
