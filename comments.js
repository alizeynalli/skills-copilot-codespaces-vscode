// Create web server
// Run the server on port 3000
// Create a route for GET /comments
// Respond with a JSON object of comments
// Create a route for POST /comments
// Respond with a JSON object of comments
// Create a route for PUT /comments
// Respond with a JSON object of comments
// Create a route for DELETE /comments
// Respond with a JSON object of comments

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(comments);
});

app.put('/comments', (req, res) => {
    const index = req.body.index;
    comments[index] = req.body.comment;
    res.json(comments);
});

app.delete('/comments', (req, res) => {
    const index = req.body.index;
    comments.splice(index, 1);
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});