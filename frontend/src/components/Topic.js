import { Flex, Badge, Tag } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const Topic = (props) => {
    return (
        <Flex>
            <Tag
                bg="#5C4033"
                color="#ebceb7"
                fontSize='10px'
                padding={1.8}
                paddingRight={3}
                paddingLeft={3}
            >
                {props.topicName}
            </Tag>
        </Flex >

    );
}

const boxy = defineStyleConfig({
    color: 'brown',
})



export default Topic; 