import { Box, Text } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect } from 'react';

interface PokemonProps {
  pokemonName: string;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonName }) => {
  return (
    <Box>
      <Text fontSize='2xl' fontWeight='600' color={'whiteAlpha.800'}>
        {pokemonName}
      </Text>
    </Box>
  );
};

export default Pokemon;
