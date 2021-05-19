import { Box, Flex, Text, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useLightDarkTheme } from '../../../contexts/LightDarkThemeContext';

type Pokemon = {
  name: string;
};

const PokemonsList: React.FC = () => {
  const { theme, changeTheme } = useLightDarkTheme();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsOffset, setPokemonsOffset] = useState(0);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${pokemonsOffset}`)
      .then(response => {
        const pokemonsList = response.data.results.map((pokemon: Pokemon) => {
          return {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          };
        });

        setPokemons(pokemonsList);
      });
  }, [pokemonsOffset]);

  return (
    <Box>
      <Flex align='center'>
        <Text
          fontSize='7xl'
          color={theme === 'light' ? 'gray.900' : 'whiteAlpha.800'}
          _hover={{
            cursor: pokemonsOffset >= 10 ? 'pointer' : 'no-drop',
            transition: '300ms',
            color: 'pink.500',
          }}
          onClick={() => {
            pokemonsOffset >= 10 && setPokemonsOffset(pokemonsOffset - 10);
          }}
        >
          <FiChevronLeft />
        </Text>
        <Flex flexDir='column'>
          {pokemons.map(pokemon => (
            <Text
              key={pokemon.name}
              fontSize='2xl'
              fontWeight='600'
              color={theme === 'light' ? 'gray.900' : 'whiteAlpha.800'}
              ml='10'
              mr='10'
            >
              {pokemon.name}
            </Text>
          ))}
        </Flex>
        <Text
          fontSize='7xl'
          color={theme === 'light' ? 'gray.900' : 'whiteAlpha.800'}
          _hover={{
            cursor: 'pointer',
            transition: '300ms',
            color: 'pink.500',
          }}
          onClick={() => {
            setPokemonsOffset(pokemonsOffset + 10);
          }}
        >
          <FiChevronRight />
        </Text>
      </Flex>
    </Box>
  );
};

export default PokemonsList;
