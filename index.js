// const http= require('http');
// var randomWords = require('random-words');
// console.log(randomWords());

// const hostname = 'localhost';
// const port = 80;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   }); 

const express = require('express');
var cors = require('cors')
const app =  express();
const port = 80;
app.use(express.json());
app.use(cors(  ))

app.get('/getlist',(req, res) => {
    res.send({sensor_suhu: [{suhu:25, waktu: "2023-01-01 11:00"},{suhu:28, waktu: "2023-01-02 11:00"},{suhu:27,waktu: "2023-01-03 11:00"}]});
});
app.post('/sensorpost',(req, res) => {
    var d = req.body.suhu
    res.send("data yang terkirim adalah" + req.body.suhu)
});

app.get('/sensor2',(req, res) => {
    res.send('ini halaman home ')
});

app.get('/sensor3',(req, res) => {
    res.send({ sensor3 : 100} )
});


app.listen(port,() => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}/`)
})