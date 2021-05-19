import { Box, Text } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect } from 'react';
import { useLightDarkTheme } from '../../../contexts/LightDarkThemeContext';

interface PokemonProps {
  pokemonName: string;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonName }) => {
  const { theme, changeTheme } = useLightDarkTheme();

  return (
    <Box>
      <Text
        fontSize='2xl'
        fontWeight='600'
        color={theme === 'light' ? 'gray.900' : ''}
      >
        {pokemonName}
      </Text>
    </Box>
  );
};

export default Pokemon;
