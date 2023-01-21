import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react'

const Login = () => {

    const getAuth = () => {
        window.location.replace("http://localhost:3004/auth");
    }

    return (
        <Flex justify="center" align="center" h="100vh">
            <Box h="500px" w="350px">
                <Flex justify="center" align="center" border="1px" borderRadius="24px" direction="column" p="25px" gap="25px">
                    <Flex fontSize="24px">
                        Log In
                    </Flex>
                    <Button onClick={getAuth}>
                        Login with Github
                    </Button>
                </Flex>
            </Box>
        </Flex>

    );
}

export default Login;