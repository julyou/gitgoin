const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const path = require("path");
const app = express()
const port = 3004;
dotenv.config();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "public", "index.html"));
});


app.get("/auth", (req, res) => {
    // Store parameters in an object
    const params = {
        scope: "read:user",
        client_id: process.env.CLIENT_ID,
    };

    // Convert parameters to a URL-encoded string
    const urlEncodedParams = new URLSearchParams(params).toString();
    res.redirect(`https://github.com/login/oauth/authorize?${urlEncodedParams}`);
});

app.get("/github-callback", (req, res) => {
    const { code } = req.query;

    const body = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
    };

    let accessToken;
    const options = { headers: { accept: "application/json" } };

    axios
        .post("https://github.com/login/oauth/access_token", body, options)
        .then((response) => response.data.access_token)
        .then((token) => {
            accessToken = token;
            res.redirect(`/?token=${token}`);
        })
        .catch((err) => res.status(500).json({ err: err.message }));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

