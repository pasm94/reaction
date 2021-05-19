import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LightDarkThemeProvider } from './contexts/LightDarkThemeContext';
import Routes from './routes';
import { theme } from './styles/theme';

export function App() {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <LightDarkThemeProvider>
            <Routes />
          </LightDarkThemeProvider>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
