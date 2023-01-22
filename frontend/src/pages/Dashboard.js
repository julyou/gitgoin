import { React, useEffect } from 'react';
import './Dashboard.css'
import { Flex, Button, Spinner, Text, Box, Image } from '@chakra-ui/react'

import axios from 'axios'

import { useState } from 'react'
import Poster from '../components/Poster';
import Navbar from '../components/Navbar';

// const language = require('@google-cloud/language');

// const getEntities = require("../../../cloud/index.js");

const Dashboard = () => {

    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(true)
    const [done, setDone] = useState(false)
    const [repoList, setRepoList] = useState({})
    const [goodIssues, setGoodIssues] = useState({})
    const [userData, setUser] = useState({})
    const [lang, setLang] = useState("")

    const [style, setStyle] = useState(true)

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

        return result;

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

        let langs = repos.map(item => item.language);
        langs = langs.filter(item => item);
        console.log("LANGS: ", langs);
        const popLang = langs.sort((a, b) => langs.filter(v => v === a).length - langs.filter(v => v === b).length).pop();
        console.log("POPLANG: ", popLang);

        setUser(user);

        setLang(popLang);
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

        console.log(desc)
        // const gfiSearch = await axios.get(`https://api.github.com/search/issues?q=python+label:good-first-issue`, requestAuthConfig);
        // console.log(gfiSearch);
        let gfiArray = []; // array of objects { name: name, url: url }
        let topicArray = []; // array of topics 
        // for (let i = 0; i < gfiSearch.data.items.length && i < 3; i++) {
        //     // get repo data 
        //     const repo = await axios.get(gfiSearch.data.items[i].repository_url, requestAuthConfig);
        //     console.log(repo);
        //     // get repo name
        //     const repoName = repo.data.full_name;
        //     const owner = repo.data.owner.login;
        //     const name = repo.data.name;
        //     const issueReadMe = await axios.get(`https://api.github.com/repos/${owner}/${name}/readme`, requestAuthConfig);
        //     console.log(window.atob(issueReadMe.data.content));
        //     // console.log(repoName);
        //     // get repo topics 
        //     const topics = repo.data.topics;
        //     // console.log(topics);
        //     topicArray.push(topics);
        //     gfiArray.push({
        //         name: repoName,
        //         url: gfiSearch.data.items[i].html_url,
        //         title: gfiSearch.data.items[i].title,
        //         topics: topics
        //     });
        // }

        // setGoodIssues({
        //     issues: gfiArray,
        //     topics: topicArray

        // });

        const selectedReadmes = [];
        while (selectedReadmes.length < 3) {
            let random = readmes[Math.floor(Math.random() * readmes.length)];
            if (random != "") {
                if (random.length > 500) {
                    random = random.substr(0, 500);
                };
                selectedReadmes.push(random);
            }
        }
        const string = selectedReadmes.join().replaceAll("\n", "");
        const nlp = await getStuff(string);
        // console.log(nlp);
        const words = nlp.data[0].entities.map((item) => item.name);

        for (let i = 0; i < words.length && i < 5; i++) {
            if (gfiArray.length >= 3) {
                break;
            }
            const w = words[i].replaceAll("\s", "");
            let gfiSearch2;
            try {
                gfiSearch2 = await axios.get(`https://api.github.com/search/issues?q=${w}+label:good-first-issue`, requestAuthConfig);
            } catch (err) {
                continue;
            }

            for (let i = 0; i < gfiSearch2.data.items.length && i < 6; i++) {
                // get repo data 
                const repo = await axios.get(gfiSearch2.data.items[i].repository_url, requestAuthConfig);
                console.log(repo);
                // get repo name
                const repoName = repo.data.full_name;
                const owner = repo.data.owner.login;
                const name = repo.data.name;
                const issueReadMe = await axios.get(`https://api.github.com/repos/${owner}/${name}/readme`, requestAuthConfig);
                console.log(window.atob(issueReadMe.data.content));
                // console.log(repoName);
                // get repo topics 
                let topics = repo.data.topics;
                gfiArray.push({
                    name: repoName,
                    url: gfiSearch2.data.items[i].html_url,
                    title: gfiSearch2.data.items[i].title,
                    score: gfiSearch2.data.items[i].score,
                    topics: topics
                });
            }
        }

        setGoodIssues({
            issues: gfiArray,
            topics: topicArray
        });

        setLoading(prev => !prev)
        setDone(true);
    }
    return (
        <Box className={style ? "" : "cowboy"}>
            <Navbar setState={setStyle} />
            <Flex align="center" direction="column" py="25px" gap="15px ">
                <Image className="buggy-no-bkg-2" src="https://i.ibb.co/28VcpKz/git-goin-2.png" />
                {done ? <Button onClick={handleClick} p="20px" >
                    {loading ? <Text> Re-Analyze </Text> :
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='md'
                        />
                    }
                </Button> :
                    <Button onClick={handleClick} p="20px">
                        {loading ? <Text> Analyze My Profile </Text> :
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='md'
                            />
                        }

                    </Button>
                }
                <Flex justifyContent="center">
                    <Text className={lang ? "typewriter remove-cursor" : "typewriter"}>Hey! Welcome to GitGoin'</Text>


                </Flex>
                <Flex justifyContent="center">
                    {Object.keys(userData).length != 0 ?
                        <Text className="typewriter">{lang}, eh?</Text>
                        : null}
                </Flex>

                {done ?
                    <>
                        <Flex>
                            <Text className="typewriter-long">These issues were recommended based on your profile:</Text>
                        </Flex>
                        < Flex className={style ? "" : "grid"} direction="column" p="0px" gap="10px" >
                            {goodIssues.issues.map((item, i) => {
                                const duration = 3500; // ms
                                const delay = 550; // ms
                                const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * i}ms backwards`;
                                return (<Poster key={item.url} animation={animStr(i)} western={style} repoName={item.name} topics={style ? item.topics : item.topics.slice(0, 7)} repoUrl={item.url} title={item.title} score={item.score} />);

                            })}
                            {/* <Poster repoName={goodIssues.issues[0].name} topics={goodIssues.topics[0]} repoUrl={goodIssues.issues[0].url} title={goodIssues.issues[0].title} />
                            <Poster repoName={goodIssues.issues[1].name} topics={goodIssues.topics[1]} repoUrl={goodIssues.issues[1].url} title={goodIssues.issues[1].title} />
                            <Poster repoName={goodIssues.issues[2].name} topics={goodIssues.topics[2]} repoUrl={goodIssues.issues[2].url} title={goodIssues.issues[2].title} /> */}
                        </Flex>
                    </>
                    : null}
            </Flex >
        </Box>
    );

}

export default Dashboard;
// DO NOT REMOVE, THANKS
/*
{goodIssues.issues.map((item) => {
    <Poster repoName={item.name} topics={item.topics} repoUrl={item.url} title={item.title}/>
})}
*/