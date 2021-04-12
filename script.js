const express = require('express'); //Import express
const  Joi = require('joi'); //Import Joi
const  app = express(); //Create Express application on the top variable
app.use(express.json()); //used the jason file

//port environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port $(port)..'));