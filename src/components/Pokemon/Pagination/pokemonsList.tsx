import { Box, Flex, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useLightDarkTheme } from '../../../contexts/LightDarkThemeContext';

type Pokemon = {
  name: string;
};

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

const PokemonsList: React.FC = () => {
  const { theme } = useLightDarkTheme();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pagesArray, setPagesArray] = useState<number[]>([]);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${actualPage - 1}`)
      .then(response => {
        const pokemonsList = response.data.results.map((pokemon: Pokemon) => {
          return {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          };
        });

        setPokemons(pokemonsList);
      });

    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=8100000`)
      .then(response => {
        const pokes = response.data.results.map((pokemon: Pokemon) => {
          return pokemon;
        });

        console.log(pokes.length);

        const pagesArr = generatePagesArray(0, Math.ceil(pokes.length));
        setPagesArray(pagesArr);
      });
  }, [actualPage]);

  function changePage(page: number) {
    setActualPage(page);
  }

  return (
    <Box>
      <Flex align='center'>
        <Text
          fontSize='7xl'
          color={theme === 'light' ? 'gray.900' : 'whiteAlpha.800'}
          _hover={{
            cursor: actualPage >= 1 ? 'pointer' : 'no-drop',
            transition: '300ms',
            color: 'pink.500',
          }}
          onClick={() => {
            actualPage > 1 && changePage(actualPage - 1);
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
            changePage(actualPage + 1);
          }}
        >
          <FiChevronRight />
        </Text>
      </Flex>
      <Flex ml='10' mt='5'>
        {pagesArray.map(number => {
          if (
            number <= 2 ||
            number + 1 >= pagesArray.length ||
            (number + 1 >= actualPage && number < actualPage + 1) ||
            (number >= actualPage && actualPage + 1 >= number)
          ) {
            return (
              <Button
                mr='2'
                ml='2'
                w='2rem'
                fontSize='small'
                background={number === actualPage ? 'pink.500' : 'none'}
                _hover={{ background: 'none' }}
                color={theme === 'light' ? 'gray.900' : ''}
                border={
                  theme === 'light' ? '1px solid black' : '1px solid white'
                }
                onClick={() => changePage(number)}
              >
                {number}
              </Button>
            );
          } else if (
            number + 3 === pagesArray.length ||
            (actualPage > 4 && number === 3) ||
            (pagesArray.length < 2 + number && actualPage !== pagesArray.length)
          ) {
            return (
              <Text
                fontWeight='bold'
                color={theme === 'light' ? 'gray.900' : ''}
                fontSize='3xl'
                mt='-3'
              >
                ...
              </Text>
            );
          }
          return <></>;
        })}
      </Flex>
    </Box>
  );
};

export default PokemonsList;
