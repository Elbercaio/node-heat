import "dotenv/config"
import express from "express";

const app = express(); // criar app 

app.get('/github', (request, response) => {
    response.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.
        GITHUB_CLIENT_ID}`)
})
app.get('/signin/callback', (request, response) => {
    const { code } = request.query; //desestruturar codigo de acesso
    
    return response.json(code);
})
app.listen(4000, () => console.log(
    '👌 Server is runnning on port 4000'))
