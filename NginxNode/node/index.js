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

app.get("/", (req,res)=>{
    const connection = mysql.createConnection(config);
    const {name} = req.params;
    const sql = "SELECT * FROM people";
    connection.query(sql, function(err, result, fields){
        if (err) throw err;
        var names = "";
        result.forEach(element => {
            names+=`<li>${element.name}</li>`;
        });
        connection.end();
        res.send(`<h1>Full Cycle Rocks!</h1><br><h3>Names saved in the database:</h3> <ul>${names}</ul>`);
    });

});

app.get("/:name", (req,res)=>{
    const connection = mysql.createConnection(config);
    const {name} = req.params;
    const sql = `INSERT INTO people(name) values('${name}')`;
    connection.query(sql);
    connection.end();
    res.send(`<p>Name ${name} added to the database!</p>`)
});

app.listen(port, ()=>{
    console.log(`Server listening in port ${port}`)
});