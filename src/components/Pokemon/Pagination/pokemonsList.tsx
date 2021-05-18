import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

type Pokemon = {
  name: string;
};

const PokemonsList: React.FC = () => {
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
          mr='10'
          color={'whiteAlpha.800'}
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
            <Text fontSize='2xl' fontWeight='600' color={'whiteAlpha.800'}>
              {pokemon.name}
            </Text>
          ))}
        </Flex>
        <Text
          fontSize='7xl'
          ml='10'
          color={'whiteAlpha.800'}
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
