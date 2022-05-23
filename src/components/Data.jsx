import React, { useState, useEffect } from "react";
import Loadings from "./Loadprof.gif";
import axios from "axios";
import Card from "./Card";
import {
  Image,
  Flex,
  Box,
  Heading,
 
} from "@chakra-ui/react";
export default function Data() {
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
      <Flex
        height="8vh"
        backgroundColor="gray.900"
        align="center" position="absolute" width='100vw' zIndex={2}
        justifyContent='center'
        
      >
       
        <Heading color="white">
          ProfileGram
        </Heading>
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
