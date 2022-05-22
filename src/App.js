import {ChakraProvider} from '@chakra-ui/react'
import Card from './components/Card'
import Data from './components/Data';
function App() {
  return (
    <ChakraProvider>
    <Data/>
    </ChakraProvider>
  )
}

export default App;
