import { Box, Flex, Text } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect } from 'react';
import Header from '../../components/Header';
import PokemonsList from '../../components/Pokemon/Pagination/pokemonsList';
import { useLightDarkTheme } from '../../contexts/LightDarkThemeContext';

const Pagination: React.FC = () => {
  const { theme, changeTheme } = useLightDarkTheme();

  return (
    <Box h='100vh' backgroundColor={theme === 'light' ? 'whiteAlpha.900' : ''}>
      <Header
        title={'ReactJS pagination 📖'}
        subtitle={'Pagination with pokémons.'}
      />
      <Flex m='5'>
        <PokemonsList />
        <Text
          ml='20'
          w='30rem'
          fontSize='3xl'
          color={theme === 'light' ? 'gray.900' : ''}
        >
          We keep the request parameters in the state of the component, and
          change them by clicking on the arrows.
        </Text>
      </Flex>
    </Box>
  );
};

export default Pagination;
