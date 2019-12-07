import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import {env} from './backend/config/env';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';
// import models from './backend/models';

// import createUserController from './backend/controllers/user';
// import createPostController from './backend/controllers/posts';

// const UserController = createUserController(models);
// const PostController = createPostController(models);

// models.sequelize.sync();

const app = express();

app.use(bodyParser.json({type: '*/*' }));
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/api/v1', UserController);
// app.use('/api/v1', PostController);

//Serve any static files built by React
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'))
});


http.createServer(app).listen(4000);
console.log("Running a http server on port ", 4000);



