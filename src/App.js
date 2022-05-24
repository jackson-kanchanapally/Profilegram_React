import {ChakraProvider} from '@chakra-ui/react'
import {ColorModeScript} from '@chakra-ui/react';
import Data from './components/Data';
function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='dark'/>
    <Data/>
    </ChakraProvider>
  )
}

export default App;
