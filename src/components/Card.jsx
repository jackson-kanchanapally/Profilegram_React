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
  const like=props.like
 const def=props.age
 const dis=props.reAge
  const [color,setColor]=useState(like)
  const [color2,setColor2]=useState(like)
  const [saveColor,setSaveColor]=useState(like)
  const [count,setCount]=useState(def)
  const [dislike,setDislike]=useState(dis)
  const toggle=()=>{
    if(color===like)
    {
      setColor('#48BB78')
      
      setCount(count=>count+1)
      if(color2==='#F56565')
      {
        setColor2(like)
        setDislike(count=>count-1)
      }
    }
    else{
      if(color==='#48BB78' && color2==='#F56565')
      {
        setColor2(like)
        setDislike(count=>count-1)
      }
      setColor(like)
      setCount(count=>count-1)
    }
  
  }
  const toggleSave=()=>{
    if(saveColor===like)
    {
      setSaveColor('#4FD1C5')
    }
    else{
      setSaveColor(like)
  
  }
}
  const toggle2=()=>{
    if(color2===like)
    {
      setColor2('#F56565')
      setDislike(count=>count+1)
      if(color==='#48BB78')
      {
        setColor(like)
        setCount(count=>count-1)
      }
    }
    else{
      if(color2==='#F56565' && color==='#48BB78')
      {
        setColor(like)
        setCount(count=>count-1)
      
      }
       setColor2(like)
      setDislike(count=>count-1)
    }
  }

  return (
    <Flex backgroundColor={props.formBackground} color={props.formText} height={["72vh","97vh" ]}width="100vw" justify="center" pt='12'>
      
      <Box
      color={props.formText}
      boxShadow='dark-lg'
        border="black"
        width={["98vw","auto"]}
        backgroundColor={props.boxBg}
        borderWidth="2"
        borderRadius="10"
        overflow="hidden"
        borderColor="black"
        mt={['12','9']}
        pl='2'
        pr='2'
        mb={['-16','-14']}
        position='absolute'
        
      >
        <HStack mt='2' ml='4' pt='2'pb='3' width="100%" direction="column" align="center">
          <Avatar size='md' src={props.profImg}></Avatar>
          <Text fontSize='25'>
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
        
        <HStack pl='3%'pb='3%' mt="5"  spacing="4">
          <Box pr='3'>
            <AiFillLike size="35" color={color} onClick={toggle}/>
            <Text align='center' color={props.formText}>{count}</Text>
          </Box>
          
            <Box>
            <AiFillDislike size="35" color={color2} onClick={toggle2}/>
            <Text color={props.formText} align='center'>{dislike}</Text>
          </Box> 
          <HStack position='relative' left={['50%','55%']}>
          <Box>
          {count>=47 && dislike<=17?<HStack><BiHeartCircle color={props.formText} size='29'/></HStack>:<Text></Text>}
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
