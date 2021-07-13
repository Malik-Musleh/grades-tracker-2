const express = require("express")
const db = require("./db")
const app = express();

let port = 3000;

app.listen(port, () => console.log(`grade tracker 2 is listening at ${port}`))