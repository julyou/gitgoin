import { React, useEffect } from 'react';

import { Flex, Button } from '@chakra-ui/react'

import axios from 'axios'

import { useState } from 'react'

const Dashboard = () => {

    const [token, setToken] = useState("")
    const [username, setUsername] = useState("")

    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        let token = params.get('token');
        setToken(token);
    }, [])

    const handleClick = () => {
        const requestAuthConfig = { headers: { "Authorization": `token ${token}` } };
        axios
            .get('https://api.github.com/user', requestAuthConfig)
            .then((res) => {
                setUsername(res.data.login);
                console.log(res);
                console.log(res.data.login);
                // res.login
                    axios
                    .get(`https://api.github.com/search/repositories\?q\=user:${username}`, requestAuthConfig)
                    .then((response) => {
                        console.log(response);
                    })
            })
    }

    return (
        <Flex>
            <Button onClick={handleClick}>
                Analyze
            </Button>
            {token}
        </Flex>


    );
}

export default Dashboard;