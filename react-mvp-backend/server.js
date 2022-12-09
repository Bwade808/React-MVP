const express = require('express');
const app = express();
const cors = require('cors');
const { Client } = require('pg');
const config = require('./config.js')[process.env.NODE_ENV || 'dev'];
const PORT = config.port;
const client = new Client ({
    connectionString: config.connectionString,
});
client.connect();
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
    client.query('SELECT * FROM chores')
    .then(result => {
        res.send(result.rows)
    })
    .catch(err => {
        console.log(err);
    })
});

app.post('/api/add', (req, res) => {
    const chore = req.body;
    console.log('post route: ', chore);
    client.query('INSERT INTO chores (chore, descript, allowance, isdone, freq, pers_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
    [chore.chore, chore.descript, chore.allowance, chore.isdone, chore.freq, chore.pers_id])
    .then(result => {
        res.send(result.rows)
    })
    .catch(err => {
        console.log(err);
    })
});

app.put('/api/update/:id', (req, res) => {
    const choreId = req.params.id;
    const chore = req.body;
    console.log('patch info: ', chore)
    client.query("UPDATE chores SET chore=$1, descript=$2, allowance=$3, isdone = false, freq=$4, pers_id=1 WHERE id = $5", 
        [chore.name, chore.description, chore.allowance, chore.freq, choreId])
    .then(() => {
        res.send({message: 'You have successfully updated this chore'}).status(201);
    })
    .catch(err => {
        console.error(err);
    })
});

app.delete('/api/delete/:id', (req, res) => {
    const chore = req.params.id;
    console.log(chore)
    client.query('DELETE FROM chores WHERE id=$1 RETURNING *', [chore])
    .then(result => {
        res.send(result.rows)
    })
    .catch(err => {
        console.log(err);
    })
})





app.listen(PORT, () => {
    console.log('React-mvp back-end listening on port: ', PORT);
})