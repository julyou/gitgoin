import { Flex, Badge, Tag } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const Topic = (props) => {
    return (
        <Flex>
            <Tag
                bg="#edf2f8"
                color="gray"
                fontSize='10px'
                fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;'
                padding={1.8}
                paddingRight={3}
                paddingLeft={3}
            >   border: 1px

                {props.topicName}
            </Tag>
        </Flex >

    );
}

const boxy = defineStyleConfig({
    color: 'brown',
})



export default Topic; 