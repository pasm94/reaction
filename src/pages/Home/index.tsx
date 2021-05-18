import { Image } from '@chakra-ui/image';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import pokemonImg from './pokemon.svg';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <Box>
      <Header
        title={'Hey guys! 👻'}
        subtitle={
          'This is a small project to study ReactJS and other related technologies.'
        }
      />
      <Flex w='100%' align='center' maxW={1480} mx='auto'>
        <Image m='5' w='80' src={pokemonImg} />
        <Flex flexDir='column'>
          <ChakraLink mb='8'>
            <Link to='/pokemon/pagination'>
              <Text fontSize='2xl'>
                <Flex align='center'>
                  <FiChevronRight /> React pagination
                </Flex>
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink>
            <Link to='/pokemon/performance'>
              <Text fontSize='2xl'>
                <Flex align='center'>
                  <FiChevronRight /> React list performance
                </Flex>
              </Text>
            </Link>
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
