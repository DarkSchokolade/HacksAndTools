const express = require('express');
const bodyParser = require('body-parser');

const mysqlConnection = require('./connection')

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })   // body parser middleware

app.set('view engine', 'ejs');

app.get('/todolist', urlencodedParser, (req, res) => {
    showAllTasks(res);
});

app.post('/todolist', urlencodedParser, (req, res) => {
    console.log(req.body.task);
    let value =req.body.task;
    let sql = "INSERT INTO todolist(task) VALUES (?)"
    
    mysqlConnection.query(sql,[value], (err, result, fields) => {
        // res.render('todolist', { data: result }); this way doesn't work
        // console.log(err);
        // res.send(result);
        showAllTasks(res);
    })
});

function showAllTasks(res) {
    mysqlConnection.query("SELECT * FROM todolist", (err, result, fields) => {
        res.render('todolist', { data: result });
        // res.send(result[1].task)
    });
}
app.listen(3000);