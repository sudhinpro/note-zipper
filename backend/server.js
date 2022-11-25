const express = require('express');
const app = express();
const notes = require('./data/notes')
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.send('aaa ');
})

app.get('/notes', (req, res) => {
    res.send(notes)
});


app.get('/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id == req.params.id)
    res.send(note)
});



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is started on PORT ${PORT}`))