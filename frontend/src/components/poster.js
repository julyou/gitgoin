import "./Poster.css"
import Topic from "./Topic.js"
import { Flex, Link, Text, Box, Image, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import bug from "../images/cowboy_bug.png"



const Poster = ({ topics, repoName, repoUrl, title, score, style }) => {
    const clickHandler = () => {
        window.location.href = repoUrl;
    }


    return (
        <Box>
            {style ?
                <Flex direction="row" border="1px" borderRadius="30px" w="800px" m="25px" p="27px" align="center">
                    {/* {image == null ? null : <Flex w="300px" justify="center" align="center" paddingBottom={["25px", "25px", "0px", "0px"]}>
                        <Image w="auto" maxHeight="200px" borderRadius="30px" src={image} />
                    </Flex>} */}

                    <Flex direction="column" w="100%">
                        <Text> Match: {score} </Text>
                        <Text fontSize="21px" fontWeight="bold"> {repoName} <Link href={repoUrl} isExternal> <ExternalLinkIcon paddingBottom="5px" w={7} h={7} /> </Link> </Text>
                        <Text fontSize="16px" lineHeight="25px" paddingTop="15px" fontWeight="medium"> {title} </Text>
                        <Flex justify="row" paddingTop="10px" flexWrap="wrap"> {topics.map((item) => (<Flex key={item} fontSize="16px" fontWeight="medium" border="2px" borderRadius="12px" p="5px" marginRight="10px" marginTop="5px" marginBottom="5px"> {item} </Flex>))} </Flex>

                    </Flex>
                </Flex>
                :


                <Flex transform="scale(0.7)" onClick={clickHandler}>
                    <div className="poster">
                        <div className="emblem">
                            <div className="hr-line1"></div>
                            <div className="icon">
                                <FaGithub />
                            </div>
                            <div className="hr-line1"></div>
                        </div>

                        <h1 className="header-wanted">WANTED</h1>
                        <div className="hr-line2"></div>
                        <div className="repo" role="img" aria-label="repo-img"></div>
                        <p className="name">{title.toUpperCase()}</p>
                        <Image className="buggy" src="https://i.ibb.co/S6RjyXv/cowboy-bug.png" />
                        <em className="repoName">{repoName.toUpperCase()}</em>
                        <p>Match: {score * 100}%</p>
                        <div className="topics">
                            {topics.map((item) => <Topic key={item} topicName={item} />)}    </div>
                    </div>

                </Flex >
            }
        </Box >
    )
}

{/* <Flex direction="row" border="1px" borderRadius="30px" w="800px" m="25px" p="27px" align="center">

<Flex direction="column" w="100%">
    <Text fontSize="21px" fontWeight="bold"> {title} <Link href={repoUrl} isExternal> <ExternalLinkIcon paddingBottom="5px" w={7} h={7}/> </Link> </Text>
    <Text fontSize="16px" lineHeight="25px" paddingTop="15px" fontWeight="medium"> {repoName} </Text>
    <Flex justify="row" paddingTop="10px" flexWrap="wrap"> {topics.map((elem) => (<Flex fontSize="16px" fontWeight="medium" border="2px" color={textColor} borderColor={borderTech} bg={tech} borderRadius="12px" p="5px" marginRight="10px" marginTop="5px" marginBottom="5px"> {item} </Flex>))} </Flex>

</Flex>
</Flex> */}


export default Poster; 