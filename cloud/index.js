
// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'open weather app A web application that displays the weather forecast based on a search. Technologies used: HTML, CSS, Javascript(React.js, axios) Dashboard.js: 47  personal website Technologies: HTML, SCSS, JavaScript, React.js, Redux, Firebase first iteration of my personal website, powered by React.js';

const document = {
    content: text,
    type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client.analyzeEntities({ document: document })
    .then(results => {
        const entities = results[0].entities


        console.log(entities)
    }
    )
