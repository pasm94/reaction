import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { theme } from './styles/theme';

export function App() {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
