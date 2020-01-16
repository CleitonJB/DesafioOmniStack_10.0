const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-z6q71.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 

//Fazer com que todas as requisições(get, post, put, delete...) json de 'app' sejam reconhecidas.
app.use(express.json());
app.use(routes);

app.listen(3333);

// 01:15:58