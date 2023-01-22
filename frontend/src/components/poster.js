import "./Poster.css"
import Topic from "./Topic.js"
import { Flex, Link, Text, Box, Image, Button, Avatar, Checkbox, CheckboxGroup, Progress } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import bug from "../images/cowboy_bug.png"

import { useEffect, useState } from 'react'



const Poster = ({ topics, repoName, repoUrl, title, score, western, animation, proportion, lang}) => {
    const clickHandler = () => {
        window.location.href = repoUrl;
    }

    const [hidden, setHidden ] = useState(false)
    const [fade, setFade ] = useState(false)

    useEffect(() => {
    }, [])

    const colourMappings = { 
        "Mercury": "#ff2b2b", 
        "TypeScript": "#2b7489", 
        "PureBasic": "#5a6986", 
        "Objective-C++": "#6866fb", 
        "Self": "#0579aa", 
        "edn": "#db5855", 
        "NewLisp": "#87AED7", 
        "Jupyter Notebook": "#DA5B0B", 
        "Rebol": "#358a5b", 
        "Frege": "#00cafe", 
        "Dart": "#00B4AB", 
        "AspectJ": "#a957b0", 
        "Shell": "#89e051", 
        "Web Ontology Language": "#9cc9dd", 
        "xBase": "#403a40", 
        "Eiffel": "#946d57", 
        "Nix": "#7e7eff", 
        "RAML": "#77d9fb", 
        "MTML": "#b7e1f4", 
        "Racket": "#22228f", 
        "Elixir": "#6e4a7e", 
        "SAS": "#B34936", 
        "Agda": "#315665", 
        "wisp": "#7582D1", 
        "D": "#ba595e", 
        "Kotlin": "#F18E33", 
        "Opal": "#f7ede0", 
        "Crystal": "#776791", 
        "Objective-C": "#438eff", 
        "ColdFusion CFC": "#ed2cd6", 
        "Oz": "#fab738", 
        "Mirah": "#c7a938", 
        "Objective-J": "#ff0c5a", 
        "Gosu": "#82937f", 
        "FreeMarker": "#0050b2", 
        "Ruby": "#701516", 
        "Component Pascal": "#b0ce4e", 
        "Arc": "#aa2afe", 
        "Brainfuck": "#2F2530", 
        "Nit": "#009917", 
        "APL": "#5A8164", 
        "Go": "#375eab", 
        "Visual Basic": "#945db7", 
        "PHP": "#4F5D95", 
        "Cirru": "#ccccff", 
        "SQF": "#3F3F3F", 
        "Glyph": "#e4cc98", 
        "Java": "#b07219", 
        "MAXScript": "#00a6a6", 
        "Scala": "#DC322F", 
        "Makefile": "#427819", 
        "ColdFusion": "#ed2cd6", 
        "Perl": "#0298c3", 
        "Lua": "#000080", 
        "Vue": "#2c3e50", 
        "Verilog": "#b2b7f8", 
        "Factor": "#636746", 
        "Haxe": "#df7900", 
        "Pure Data": "#91de79", 
        "Forth": "#341708", 
        "Red": "#ee0000", 
        "Hy": "#7790B2", 
        "Volt": "#1F1F1F", 
        "LSL": "#3d9970", 
        "eC": "#913960", 
        "CoffeeScript": "#244776", 
        "HTML": "#e44b23", 
        "Lex": "#DBCA00", 
        "API Blueprint": "#2ACCA8", 
        "Swift": "#ffac45", 
        "C": "#555555", 
        "AutoHotkey": "#6594b9", 
        "Isabelle": "#FEFE00", 
        "Metal": "#8f14e9", 
        "Clarion": "#db901e", 
        "JSONiq": "#40d47e", 
        "Boo": "#d4bec1", 
        "AutoIt": "#1C3552", 
        "Clojure": "#db5855", 
        "Rust": "#dea584", 
        "Prolog": "#74283c", 
        "SourcePawn": "#5c7611", 
        "AMPL": "#E6EFBB", 
        "FORTRAN": "#4d41b1", 
        "ANTLR": "#9DC3FF", 
        "Harbour": "#0e60e3", 
        "Tcl": "#e4cc98", 
        "BlitzMax": "#cd6400", 
        "PigLatin": "#fcd7de", 
        "Lasso": "#999999", 
        "ECL": "#8a1267", 
        "VHDL": "#adb2cb", 
        "Elm": "#60B5CC", 
        "Propeller Spin": "#7fa2a7", 
        "X10": "#4B6BEF", 
        "IDL": "#a3522f", 
        "ATS": "#1ac620", 
        "Ada": "#02f88c", 
        "Unity3D Asset": "#ab69a1", 
        "Nu": "#c9df40", 
        "LFE": "#004200", 
        "SuperCollider": "#46390b", 
        "Oxygene": "#cdd0e3", 
        "ASP": "#6a40fd", 
        "Assembly": "#6E4C13", 
        "Gnuplot": "#f0a9f0", 
        "JFlex": "#DBCA00", 
        "NetLinx": "#0aa0ff", 
        "Turing": "#45f715", 
        "Vala": "#fbe5cd", 
        "Processing": "#0096D8", 
        "Arduino": "#bd79d1", 
        "FLUX": "#88ccff", 
        "NetLogo": "#ff6375", 
        "C Sharp": "#178600", 
        "CSS": "#563d7c", 
        "Emacs Lisp": "#c065db", 
        "Stan": "#b2011d", 
        "SaltStack": "#646464", 
        "QML": "#44a51c", 
        "Pike": "#005390", 
        "LOLCODE": "#cc9900", 
        "ooc": "#b0b77e", 
        "Handlebars": "#01a9d6", 
        "J": "#9EEDFF", 
        "Mask": "#f97732", 
        "EmberScript": "#FFF4F3", 
        "TeX": "#3D6117", 
        "Nemerle": "#3d3c6e", 
        "KRL": "#28431f", 
        "Ren'Py": "#ff7f7f", 
        "Unified Parallel C": "#4e3617", 
        "Golo": "#88562A", 
        "Fancy": "#7b9db4", 
        "OCaml": "#3be133", 
        "Shen": "#120F14", 
        "Pascal": "#b0ce4e", 
        "F#": "#b845fc", 
        "Puppet": "#302B6D", 
        "ActionScript": "#882B0F", 
        "Diff": "#88dddd", 
        "Ragel in Ruby Host": "#9d5200", 
        "Fantom": "#dbded5", 
        "Zephir": "#118f9e", 
        "Click": "#E4E6F3", 
        "Smalltalk": "#596706", 
        "DM": "#447265", 
        "Ioke": "#078193", 
        "PogoScript": "#d80074", 
        "LiveScript": "#499886", 
        "JavaScript": "#f1e05a", 
        "VimL": "#199f4b", 
        "PureScript": "#1D222D", 
        "ABAP": "#E8274B", 
        "Matlab": "#bb92ac", 
        "Slash": "#007eff", 
        "R": "#198ce7", 
        "Erlang": "#B83998", 
        "Pan": "#cc0000", 
        "LookML": "#652B81", 
        "Eagle": "#814C05", 
        "Scheme": "#1e4aec", 
        "PLSQL": "#dad8d8", 
        "Python": "#3572A5", 
        "Max": "#c4a79c", 
        "Common Lisp": "#3fb68b", 
        "Latte": "#A8FF97", 
        "XQuery": "#5232e7", 
        "Omgrofl": "#cabbff", 
        "XC": "#99DA07", 
        "Nimrod": "#37775b", 
        "SystemVerilog": "#DAE1C2", 
        "Chapel": "#8dc63f", 
        "Groovy": "#e69f56", 
        "Dylan": "#6c616e", 
        "E": "#ccce35", 
        "Parrot": "#f3ca0a", 
        "Grammatical Framework": "#79aa7a", 
        "Game Maker Language": "#8fb200", 
        "Papyrus": "#6600cc", 
        "NetLinx+ERB": "#747faa", 
        "Clean": "#3F85AF", 
        "Alloy": "#64C800", 
        "Squirrel": "#800000", 
        "PAWN": "#dbb284", 
        "UnrealScript": "#a54c4d", 
        "Standard ML": "#dc566d", 
        "Slim": "#ff8f77", 
        "Perl6": "#0000fb", 
        "Julia": "#a270ba", 
        "Haskell": "#29b544", 
        "NCL": "#28431f", 
        "Io": "#a9188d", 
        "Rouge": "#cc0088", 
        "cpp": "#f34b7d", 
        "AGS Script": "#B9D9FF", 
        "Dogescript": "#cca760", 
        "nesC": "#94B0C7"
    };


    return (
        <Box className={(hidden ? "hidden" : "") + (fade ? " fadeOut" : "")} margin="25px">
            {western ?
                <div className="box" style={{ animation }} >
                    <Flex direction="row" borderRadius="30px" w="800px" p="27px" align="center" border="1px"  >
                        {/* {image == null ? null : <Flex w="300px" justify="center" align="center" paddingBottom={["25px", "25px", "0px", "0px"]}>
                        <Image w="auto" maxHeight="200px" borderRadius="30px" src={image} />
                    </Flex>} */}

                        <Flex direction="column" w="100%">{/*  */}
                            <Text fontSize="21px" fontWeight="bold" className="typewriter-text"> {repoName} <Link href={repoUrl} isExternal> <ExternalLinkIcon paddingBottom="5px" w={7} h={7} /> </Link> </Text>
                            <Text fontSize="16px" lineHeight="25px" paddingTop="15px" fontWeight="medium" className="typewriter-text"> {title} </Text>
                            {/* <Text> Match: {score * 100} </Text> */}
                            <Flex justify="row" paddingTop="10px" flexWrap="wrap">
                                {topics.map((item) => (<Flex key={item} fontSize="16px" fontWeight="medium" border="2px"
                                    borderRadius="12px" p="5px" marginRight="10px" marginTop="5px"
                                    marginBottom="10px" bg="#e0e0e0">{item}
                                </Flex>))}
                            </Flex>
                            <Flex h="8px" marginTop="8px">
                                <span style={{ width: `${proportion * 100}%`, backgroundColor: (colourMappings[lang] ? colourMappings[lang] : "green"), borderTopLeftRadius:"6px", borderBottomLeftRadius: "6px"}}>
                                    <span style={{ fontSize:"0.75rem", marginTop: "0.5rem"}}>{lang} | {Math.floor(proportion*100)}%</span>
                                </span>
                                <span style={{ width: `${(1-proportion) * 100}%`, backgroundColor: "#cccaca", borderTopRightRadius: "6px", borderBottomRightRadius: "6px"}}></span>
                            </Flex>
                        </Flex>
                        <Checkbox alignSelf="flex-start" size="lg" onChange={() => {
                            setFade(true);
                            setTimeout(() => setHidden(true), 500)
                        }}></Checkbox>
                    </Flex>
                </div>

                :
                <Flex transform="scale(0.7)" onClick={clickHandler} >
                    <Box className="poster" >
                        <div className="emblem">
                            <div className="hr-line1"></div>
                            <div className="icon">
                                <FaGithub />
                            </div>
                            <div className="hr-line1"></div>
                        </div>

                        <h1 className="header-wanted">WANTED</h1>
                        {/* <Avatar name={score * 100} src='https://bit.ly/broken-link' /> */}
                        <div className="hr-line2"></div>
                        <div className="repo" role="img" aria-label="repo-img"></div>
                        <p className="name">{title.toUpperCase()}</p>
                        <Image className="buggy" src="https://i.ibb.co/S6RjyXv/cowboy-bug.png" />
                        <em className="repoName">{repoName}</em>
                        <div className="topics">
                            {topics.map((item) => <Topic key={item} topicName={item} />)}
                        </div>
                    </Box>

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