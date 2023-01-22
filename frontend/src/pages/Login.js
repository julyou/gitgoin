import React from 'react';
import { Flex, Box, Button, Text, Image } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'


const Login = () => {

    const getAuth = () => {
        window.location.replace("http://localhost:3004/auth");
    }

    return (
        <Flex justify="center" align="center" h="100vh">
            <Box h="500px" w="350px">
                <Flex justify="center" align="center" border="1px" borderRadius="24px" direction="column" p="25px" gap="25px">
                    {/* <Flex fontSize="24px">
                        Log In
                    </Flex> */}
                    <Image className="buggy-no-bkg" src="https://i.ibb.co/28VcpKz/git-goin-2.png" />
                    <Button onClick={getAuth} >
                        <Flex gap="15px" justify="center" align="center">
                            <FaGithub size={20} />
                            <Text> Login with Github </Text>
                        </Flex>
                    </Button>
                </Flex>
            </Box>
        </Flex>

    );
}

export default Login;