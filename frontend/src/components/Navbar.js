import { Box, Switch, Flex } from "@chakra-ui/react";

const Navbar = ({ setState }) => {
    return (
        <Flex justifyContent="flex-end" position="sticky" top="0">
            <Switch onChange={() => { setState(prev => !prev) }} size="lg" colorScheme="yellow" marginRight="1rem" marginTop="1rem" />
        </Flex>
    );
}

export default Navbar;