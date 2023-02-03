const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(cors());

const posts = require('./data/post.json')

app.get('/',(request, response) => {
    response.send('World App Server Running')
});

app.get('/posts', (request, response) => {
    response.send(posts)
})


app.listen(port, ()=>{
    console.log(`World app server running on port ${port}`)
})