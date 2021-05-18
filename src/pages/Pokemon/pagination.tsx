import { Box, Flex, Text } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect } from 'react';
import Header from '../../components/Header';
import PokemonsList from '../../components/Pokemon/Pagination/pokemonsList';

const Pagination: React.FC = () => {
  return (
    <Box>
      <Header
        title={'ReactJS pagination 📖'}
        subtitle={'Pagination with pokémons.'}
      />
      <Flex m='5'>
        <PokemonsList />
        <Text ml='20' w='30rem' fontSize='3xl'>
          We keep the request parameters in the state of the component, and
          change them by clicking on the arrows.
        </Text>
      </Flex>
    </Box>
  );
};

export default Pagination;
