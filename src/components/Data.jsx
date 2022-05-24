import React, { useState, useEffect } from "react";
import Loadings from "./Loadprof.gif";
import axios from "axios";
import Card from "./Card";
import {
  Image,
  Flex,
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
  Link,
  IconButton,
} from "@chakra-ui/react";
import {FaSun,FaMoon} from 'react-icons/fa'
import {GoMarkGithub} from 'react-icons/go'
export default function Data(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue( "gray.700","gray.100");
  const navBackground = useColorModeValue( "gray.900","gray.600");
  const likeColor = useColorModeValue( "gray.900","gray.600");
  const formText = useColorModeValue("gray.100","gray.600");
  const boxBg = useColorModeValue("gray.900","gray.100");
  const [Loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const url = "https://api.randomuser.me/?results=100";

  useEffect(() => {
    axios.get(url).then((res) => {
      setProfile(res.data.results);
      console.log(res.data.results);
    });
    setLoading(false);
  }, []);

  return (
    <>
    
  
      <Flex pt='3' pb='3'
        height="10vh"
        backgroundColor={navBackground}
        align="center" position="absolute" width='100vw' zIndex={2}
        justifyContent='center'
        
      >
       
        <Heading ml={['-12vw','']} fontSize={['40','7vh']} color="white">
          ProfileGram
        </Heading>

        <Link  position='relative' left={['19%','25%']}  href="https://github.com/kanchanapallyjackson"  isExternal><IconButton mr={5} isRound='true' icon={<GoMarkGithub/>} size='md'>
          </IconButton> </Link>

            <IconButton size='md'
          icon={navBackground==='gray.900'?<FaSun/>:<FaMoon/>}
            borderRadius="full"
            colorScheme="green"
            onClick={toggleColorMode}
            position='relative' left={['19%','25%']}  mr='5'
          >
          </IconButton>
      </Flex>
      <Flex
        justifyContent="center"
        align="center"
        backgroundColor="gray.800"
        width="100vw"
      >
        <Flex backgroundColor="gray.800" height='90vh'>
          {Loading || !profile ? (
            <Box justifyContent="center">
              <Image mt='30vh' ml={["10","10"]}
                align="center"
                justifyContent="center"
                boxSize="200"
                objectFit="cover"
                src={Loadings}
                alt="Loading......."
              ></Image>
            </Box>
          ) : (
            <div>
              {profile.map((per) => (
                <div>
                  <Card
                    reAge={per.registered.age}
                    age={per.dob.age}
                    profName={per.login.username}
                    profImg={per.picture.large}
                    toggleColorMode={toggleColorMode}
                    colorMode={colorMode}
                    formBackground={formBackground}
                    formText={formText}
                    boxBg={boxBg}
                    likeColor={likeColor}
                  />
                </div>
              ))}
            </div>
          )}
        </Flex>
      </Flex>
    </>
  );
}
