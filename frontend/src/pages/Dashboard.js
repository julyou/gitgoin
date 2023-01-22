import { React, useEffect } from 'react';

import { Flex, Button, Spinner, Text } from '@chakra-ui/react'

import axios from 'axios'

import { useState } from 'react'
import Poster from '../components/Poster';

// const language = require('@google-cloud/language');

const Dashboard = () => {

    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(true)
    const [done, setDone] = useState(false)
    const [repoList, setRepoList] = useState({})
    const [goodIssues, setGoodIssues] = useState({})


    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        let token = params.get('token');
        setToken(token);
    }, [])

    const handleClick = async () => {
        setLoading(prev => !prev)
        const requestAuthConfig = { headers: { "Authorization": `token ${token}` } };
        const userReq = await axios.get('https://api.github.com/user', requestAuthConfig);
        const repoReq = await axios.get(`https://api.github.com/user/repos`, requestAuthConfig);

        const user = userReq.data;
        const repos = repoReq.data;

        console.log(user);
        console.log(repos);

        const desc = repos.map((item) => item.description ? item.description : "");
        const readmes = [];
        for (let i = 0; i < repos.length; ++i) {
            if (repos[i].owner.login != user.login) {
                continue;
            } else {
                try {
                    const readme = await axios.get(`https://api.github.com/repos/${repos[i].owner.login}/${repos[i].name}/readme`, requestAuthConfig);
                    console.log(window.atob(readme.data.content))
                    readmes.push(window.atob(readme.data.content))
                } catch (err) {
                    console.log("Error: ", err);
                }
            }
        }
        setLoading(prev => !prev)
        console.log(desc)
        const gfiSearch = await axios.get(`https://api.github.com/search/issues?q=maze+label:good-first-issue`, requestAuthConfig);
        console.log(gfiSearch);
        let gfiArray = [];
        for (let i = 0; i < 3; ++i) {
            const firstRepo = await axios.get(gfiSearch.data.items[i].repository_url, requestAuthConfig);
            // console.log(labels[i].url);
            const repoName = firstRepo.data.full_name;
            // const labels = firstRepo.data.items[i].labels;
            // console.log(labels[0].url);
            //     console.log(repoName);
            gfiArray.push(repoName);
        }
        // const labels = await axios.get(gfiSearch.data.items[0].labels, requestAuthConfig);

        setGoodIssues({
            issues: gfiArray
        });
        setDone(true);
        // const projectId = 'YOUR_PROJECT_ID';

        // const {Storage} = require('@google-cloud/storage');

        // async function authenticateImplicitWithAdc() {
        //   // This snippet demonstrates how to list buckets.
        //   // NOTE: Replace the client created below with the client required for your application.
        //   // Note that the credentials are not specified when constructing the client.
        //   // The client library finds your credentials using ADC.
        //   const storage = new Storage({
        //     projectId,
        //   });
        //   const [buckets] = await storage.getBuckets();
        //   console.log('Buckets:');

        //   for (const bucket of buckets) {
        //     console.log(`- ${bucket.name}`);
        //   }

        //   console.log('Listed all storage buckets.');
        // }

        // authenticateImplicitWithAdc();
        // const language = require('@google-cloud/language');

        // // Instantiates a client
        // const client = new language.LanguageServiceClient();

        // // The text to analyze
        // const text = 'Hello, world!';

        // const document = {
        //   content: text,
        //   type: 'PLAIN_TEXT',
        // };

        // // Detects the sentiment of the text
        // const [result] = await client.analyzeSentiment({document: document});
        // const sentiment = result.documentSentiment;

        // console.log(`Text: ${text}`);
        // console.log(`Sentiment score: ${sentiment.score}`);
        // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    }


    return (
        <Flex h="100vh" justify="center" align="center">
            <Button onClick={handleClick} display="flex" gap="15px">
                {loading ? <Text> Analyze </Text> :
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='md'
                    />
                }
                {done ?
                    <div>
                        <Poster repoName={goodIssues.issues[0]} />
                        <Poster repoName={goodIssues.issues[1]} />
                        <Poster repoName={goodIssues.issues[2]} />
                    </div>
                    : null}
            </Button>


        </Flex>



    );

}

export default Dashboard;