import React,{useState} from "react";

import {

  HStack,
  Flex,
  Box,
  Image,
  
 
  Avatar,

} from "@chakra-ui/react";
import { Text} from "@chakra-ui/react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";


export default function Card(props) {
 const def=props.age
 const dis=props.reAge
  const [color,setColor]=useState('white')
  const [color2,setColor2]=useState('white')
  const [count,setCount]=useState(def)
  const [dislike,setDislike]=useState(dis)
  const toggle=()=>{
    if(color==='white')
    {
      setColor('red')
      setCount(count=>count+1)
      if(color2==='red')
      {
        setColor2('white')
        setDislike(count=>count-1)
      }
    }
    else{
      if(color==='red' && color2==='red')
      {
        setColor2('white')
        setDislike(count=>count-1)
      }
      setColor('white')
      setCount(count=>count-1)
    }
  
  }
  const toggle2=()=>{
    if(color2==='white')
    {
      setColor2('red')
      setDislike(count=>count+1)
      if(color==='red')
      {
        setColor('white')
        setCount(count=>count-1)
      }
    }
    else{
      if(color2==='red' && color==='red')
      {
        setColor('white')
        setCount(count=>count-1)
      
      }
     
       setColor2('white')
      setDislike(count=>count-1)
      setCount(count=>count+1)
      
    }
  }

  return (
    <Flex backgroundColor='gray.800' height={["72vh","97vh" ]}width="100vw" justify="center">
      
      <Box
      boxShadow='dark-lg'
        border="black"
        backgroundColor='gray.900'
        borderWidth="2"
        borderRadius="10"
        overflow="hidden"
        borderColor="black"
        mt='8'
        pl='2'
        pr='2'
      >
        <HStack ml='4' pt='2'  width="100%" direction="column" align="center">
          <Avatar size='md' src={props.profImg}></Avatar>
          <Text fontSize='35' color='white' pb="3">
            {props.profName}
          </Text>
          </HStack>
          <Image
          borderRadius='10'
            boxSize={["50vh","70vh"]}
            objectFit="cover"
            src={props.profImg}
            alt={"jackson"}
          ></Image>
        
        <HStack ml='5' mt="5" mb='1' spacing="4">
          <Box>
            <AiFillLike size="35" color={color} onClick={toggle}/>
            <Text align='center' color='white'>{count}</Text>
          </Box>
          
          <Box>
            <AiFillDislike size="35" color={color2} onClick={toggle2}/>
            <Text align='center' color='white'>{dislike}</Text>
          </Box>
        </HStack>
        
      </Box>
    </Flex>
  );
}
