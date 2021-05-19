import { Image } from '@chakra-ui/image';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiMoon, FiSun } from 'react-icons/fi';
import pokemonImg from './pokemon.svg';
import Header from '../../components/Header';
import { Button } from '@chakra-ui/button';
import { useLightDarkTheme } from '../../contexts/LightDarkThemeContext';

const Home: React.FC = () => {
  const { theme, changeTheme } = useLightDarkTheme();

  return (
    <Box>
      <Header
        title={'Hey guys! 👻'}
        subtitle={
          'This is a small project to study ReactJS and other related technologies.'
        }
      />
      <Box
        h='100vh'
        backgroundColor={theme === 'light' ? 'whiteAlpha.900' : ''}
      >
        <Flex pt='8' w='100%' alignItems='center' maxW={1480} mx='auto'>
          <Image m='5' h='12rem' src={pokemonImg} />
          <Flex flexDir='column'>
            <ChakraLink mb='8'>
              <Link to='/pokemon/pagination'>
                <Text
                  fontSize='2xl'
                  color={theme === 'light' ? 'gray.900' : ''}
                >
                  <Flex align='center'>
                    <FiChevronRight /> React pagination
                  </Flex>
                </Text>
              </Link>
            </ChakraLink>
            <ChakraLink>
              <Link to='/pokemon/performance'>
                <Text
                  fontSize='2xl'
                  color={theme === 'light' ? 'gray.900' : ''}
                >
                  <Flex align='center'>
                    <FiChevronRight /> React list performance
                  </Flex>
                </Text>
              </Link>
            </ChakraLink>
          </Flex>
          <Flex ml='20%' flexDir='column'>
            <Button
              fontSize='4xl'
              display='flex'
              flexDir='row'
              alignItems='center'
              background='none'
              _hover={{ background: 'none' }}
              onClick={changeTheme}
              color={theme === 'light' ? 'gray.900' : ''}
            >
              {theme === 'dark' ? (
                <>
                  <FiSun />
                  <Text ml='2'> Change to light mode</Text>
                </>
              ) : (
                <>
                  <FiMoon />
                  <Text ml='2'>Change to dark mode</Text>
                </>
              )}
            </Button>
            <Text
              color={theme === 'light' ? 'gray.900' : ''}
              fontSize='2xl'
              mt='5'
              w='30rem'
            >
              We are keeping the setted theme using contexts. There are better
              ways to do this, but here was just an example of using contexts...
              <br />
              When changing the theme here, this change will remain on the other
              pages.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
