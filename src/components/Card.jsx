import React,{useState} from "react";

import {

  HStack,
  Flex,
  Box,
  Image,
  Avatar,
  Text,
} from "@chakra-ui/react";

import { AiFillLike, AiFillDislike } from "react-icons/ai";
import {MdBookmark} from "react-icons/md";
import { BiHeartCircle} from "react-icons/bi";


export default function Card(props) {
 const def=props.age
 const dis=props.reAge
  const [color,setColor]=useState('white')
  const [color2,setColor2]=useState('white')
  const [saveColor,setSaveColor]=useState('white')
  const [count,setCount]=useState(def)
  const [dislike,setDislike]=useState(dis)
  const toggle=()=>{
    if(color==='white')
    {
      setColor('#48BB78')
      setCount(count=>count+1)
      if(color2==='#F56565')
      {
        setColor2('white')
        setDislike(count=>count-1)
      }
    }
    else{
      if(color==='#48BB78' && color2==='#F56565')
      {
        setColor2('white')
        setDislike(count=>count-1)
      }
      setColor('white')
      setCount(count=>count-1)
    }
  
  }
  const toggleSave=()=>{
    if(saveColor==='white')
    {
      setSaveColor('#4FD1C5')
    }
    else{
      setSaveColor('white')
  
  }
}
  const toggle2=()=>{
    if(color2==='white')
    {
      setColor2('#F56565')
      setDislike(count=>count+1)
      if(color==='#48BB78')
      {
        setColor('white')
        setCount(count=>count-1)
      }
    }
    else{
      if(color2==='#F56565' && color==='#48BB78')
      {
        setColor('white')
        setCount(count=>count-1)
      
      }
       setColor2('white')
      setDislike(count=>count-1)
    }
  }

  return (
    <Flex backgroundColor='gray.800' height={["72vh","97vh" ]}width="100vw" justify="center" pt='12'>
      
      <Box
      boxShadow='dark-lg'
        border="black"
        backgroundColor='gray.900'
        borderWidth="2"
        borderRadius="10"
        overflow="hidden"
        borderColor="black"
        mt='9'
        pl='2'
        pr='2'
        mb={['-16','-14']}
        
      >
        <HStack mt='2' ml='4' pt='2'pb='3' width="100%" direction="column" align="center">
          <Avatar size='md' src={props.profImg}></Avatar>
          <Text fontSize='25' color='white'>
            {`@${props.profName}`}
          </Text>
          </HStack>
          <Image
          borderRadius='10'
            boxSize={["50vh","70vh"]}
            objectFit="cover"
            src={props.profImg}
            alt={"jackson"}
          ></Image>
        
        <HStack ml={['3','-2']} mt="5"  spacing="4" justifyContent='center'>
          <Box pr='3'>
            <AiFillLike size="35" color={color} onClick={toggle}/>
            <Text align='center' color='white'>{count}</Text>
          </Box>
          
            <Box>
            <AiFillDislike size="35" color={color2} onClick={toggle2}/>
            <Text align='center' color='gray.100'>{dislike}</Text>
          </Box> 
          <HStack pl={['48%','53%']}>
          <Box >
          {count>=45 && dislike<=17?<HStack><BiHeartCircle color='white' size='29'/></HStack>:<Text></Text>}
          </Box>
          <Box>
            <MdBookmark color={saveColor} size='35' onClick={toggleSave}/>
          </Box>
          </HStack>
        </HStack>
        
      </Box>
    </Flex>
  );
}
