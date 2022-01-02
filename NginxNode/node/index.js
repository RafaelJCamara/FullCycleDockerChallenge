const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const config = {
    host: 'db', //docker container to connect with
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Rafael')`;
connection.query(sql);
connection.end();

app.get("/", (req,res)=>{
    res.send("<h1>Full Cycle!!!</h1>")
});

app.listen(port, ()=>{
    console.log(`Server listening in port ${port}`)
});