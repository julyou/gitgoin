import { React, useEffect } from 'react';

import { Flex, Button, Spinner, Text, Box } from '@chakra-ui/react'

import axios from 'axios'

import { useState } from 'react'
import Poster from '../components/Poster';

// const language = require('@google-cloud/language');

// const getEntities = require("../../../cloud/index.js");

const Dashboard = () => {

    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(true)
    const [done, setDone] = useState(false)
    const [repoList, setRepoList] = useState({})
    const [goodIssues, setGoodIssues] = useState({})

    const styles = {
        background: {
            height: 1356,
            backgroundImage: `url(${"https://static.nationalgeographic.co.uk/files/styles/image_3200/public/mgattoni_cowboys_002_0z6a3316_def.jpg?w=1900&h=1267"})`
        }
    };


    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        let token = params.get('token');
        setToken(token);
    }, [])

    const getStuff = async (text) => {
        const result = await axios.get('http://localhost:3005/', {
            headers: { "input": text }
        })

        console.log(result);
    }


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
                    // console.log(window.atob(readme.data.content))
                    readmes.push(window.atob(readme.data.content))
                } catch (err) {
                    console.log("Error: ", err);
                }
            }
        }
        setLoading(prev => !prev)
        console.log(desc)
        const gfiSearch = await axios.get(`https://api.github.com/search/issues?q=python+label:good-first-issue`, requestAuthConfig);
        console.log(gfiSearch);
        let gfiArray = []; // array of objects { name: name, url: url }
        let topicArray = []; // array of topics 
        for (let i = 0; i < gfiSearch.data.items.length && i < 3; i++) {
            // get repo data 
            const repo = await axios.get(gfiSearch.data.items[i].repository_url, requestAuthConfig);
            console.log(repo);
            // get repo name
            const repoName = repo.data.full_name;
            const owner = repo.data.owner.login;
            const name = repo.data.name;
            const issueReadMe = await axios.get(`https://api.github.com/repos/${owner}/${name}/readme`, requestAuthConfig);
            console.log(window.atob(issueReadMe.data.content));
            // console.log(repoName);
            // get repo topics 
            const topics = repo.data.topics;
            // console.log(topics);
            topicArray.push(topics);
            gfiArray.push({
                name: repoName,
                url: gfiSearch.data.items[i].html_url,
                title: gfiSearch.data.items[i].title,
                topics: topics
            });
        }

        setGoodIssues({
            issues: gfiArray,
            topics: topicArray

        });
        const string = readmes[1].replaceAll('\n', "");
        await getStuff(string);
        setDone(true);

    }

    return (
        <Flex h="100vh" align="center" direction="column" py="25px">
            <Button onClick={handleClick} p="20px">
                {loading ? <Text> Analyze </Text> :
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='md'
                    />
                }
            </Button>
            {done ?
                < Flex border="1px" direction="column" p="0px" gap="10px" >
                    {goodIssues.issues.map((item) => {
                        return (<Poster key={item.url} repoName={item.name} topics={item.topics} repoUrl={item.url} title={item.title} />);
                    })}
                    {/* <Poster repoName={goodIssues.issues[0].name} topics={goodIssues.topics[0]} repoUrl={goodIssues.issues[0].url} title={goodIssues.issues[0].title} />
                        <Poster repoName={goodIssues.issues[1].name} topics={goodIssues.topics[1]} repoUrl={goodIssues.issues[1].url} title={goodIssues.issues[1].title} />
                        <Poster repoName={goodIssues.issues[2].name} topics={goodIssues.topics[2]} repoUrl={goodIssues.issues[2].url} title={goodIssues.issues[2].title} /> */}
                </Flex>
                : null}
        </Flex >
    );

}

export default Dashboard;
// DO NOT REMOVE, THANKS
/*
{goodIssues.issues.map((item) => {
    <Poster repoName={item.name} topics={item.topics} repoUrl={item.url} title={item.title}/>
})}
*/