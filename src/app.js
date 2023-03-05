const express = require("express");
// const morgan = require("morgan");
const users = require('./data/users.json');
const app = express();

app.use(express.static("public"))

app.get('/greeting', (req, res, next) => {
    const greeting = "Hello World!";
    res.json(greeting);
  });

app.get("/about", (req, res, next) => {
    res.status(200).send("<h1>About Code the Dream!</h1>");
});

app.get('/users', (req, res, next) => {
    res.send(users); // send all users data
});

app.get('/users/:id', (req, res, next) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    res.send(user);
  });

const logRequest = (req, res, next) => {
    console.log("A request is being made!");
    next();
};

app.use(logRequest);
// app.use(morgan("dev"));


app.use((req, res, next) => {
    res.status(404).send("<h1>404: Page not found</h1>");
});



module.exports = app;
