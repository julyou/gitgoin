import { React, useEffect } from 'react';

import { Flex, Button, Spinner, Text } from '@chakra-ui/react'

import axios from 'axios'

import { useState } from 'react'

const Dashboard = () => {

    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(true)


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
        // setTimeout(2500) // REMOVE THIS LATER
        setLoading(prev => !prev)
        console.log(desc)
        // axios
        //     .get('https://api.github.com/user', requestAuthConfig)
        //     .then((res) => {
        //         setUsername(res.data.login);
        //         console.log(res);
        //         // res.login
        //             axios
        //             .get(`https://api.github.com/search/repositories\?q\=user:${res.data.login}`, requestAuthConfig)
        //             .then((response) => {
        //                 console.log(response);
        //             })
        //     })
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
            </Button>
        </Flex>


    );
}

export default Dashboard;