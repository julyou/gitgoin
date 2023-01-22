
// Imports the Google Cloud client library
const language = require('@google-cloud/language')
const express = require('express');

const app = express();
const port = 3005;

var cors = require('cors')

app.use(cors())

const getEntities = (text) => {
    const client = new language.LanguageServiceClient();

    // The text to analyze
    // const text = 'open weather app A web application that displays the weather forecast based on a search. Technologies used: HTML, CSS, Javascript(React.js, axios) Dashboard.js: 47  personal website Technologies: HTML, SCSS, JavaScript, React.js, Redux, Firebase first iteration of my personal website, powered by React.js';

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the text
    return client.analyzeEntities({ document: document });
};

app.get("/", async (req, res) => {
    const headerInput = req.get("input");
    console.log(req);
    console.log(headerInput);
    try {
        const result = await getEntities(headerInput);
        console.log(result);
        res.json(result);
    } catch (err) {
        console.log(err);
    }
    // const result = await getEntities(headerInput);
    // res.json(result);
    // const txt = req... 
    // getEntities(txt).then((result) => {
    //     res.json(result);
    // })
    // res.send()
})

app.listen(port, () => {
    console.log(`Cloud Backend listening on port ${port}`);
})
// Instantiates a client


