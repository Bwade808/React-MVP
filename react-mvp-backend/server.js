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
});

app.get('/api/done/:id', (req, res) => {
    client.query('SELECT * FROM chores WHERE ')
})

app.get('/api/notdone/:id', (req, res) => {
    client.query('SELECT * FROM chores WHERE ')
})





app.listen(PORT, () => {
    console.log('React-mvp back-end listening on port: ', PORT);
})