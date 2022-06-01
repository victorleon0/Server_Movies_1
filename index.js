const express = require('express');
const indexRouter = require("./routes/indexRouter.js")
const db = require('./db.js')

db.connect();

const PORT = 3000;

const app = express();
app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log("Servidor funcionando")
});