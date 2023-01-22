import { Flex, Badge } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const Topic = () => {
    return (
        <Flex>
            <Badge color='brown'>
                #TOPIC
            </Badge>
        </Flex >

    );
}

const boxy = defineStyleConfig({
    color: 'brown',
})



export default Topic; 