import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';
import Header from '../../components/Header';
import Pokemon from '../../components/Pokemon/Performance/pokemon';

type Pokemon = {
  name: string;
};

const Performance: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // https://pokeapi.co/api/v2/pokemon?limit=2000
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=3000').then(response => {
      const pokemonListAlphabeticalOrder = response.data.results
        .map((pokemon: Pokemon) => {
          return {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          };
        })
        .sort((a: Pokemon, b: Pokemon) => {
          return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        });
      setPokemons(pokemonListAlphabeticalOrder);
    });
  }, []);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <Pokemon pokemonName={`👾 ${pokemons[index].name}`} />
      </div>
    );
  };

  return (
    <Box>
      <Header
        title={'ReactJS list performance 📜'}
        subtitle={`Big list of pokémons. (${pokemons.length} items)`}
      />
      <Flex m='5'>
        <List
          height={300}
          rowHeight={30}
          width={600}
          overscanRowCount={5}
          rowCount={pokemons.length}
          rowRenderer={rowRenderer}
        />
        <Text ml='5' w='30rem' fontSize='3xl'>
          If you inspect the list, you will see that of the {pokemons.length}{' '}
          pokémons, only those that fit the list + 5 are being rendered in html,
          improving the performance of the application. This is possible using
          the react-virtualized!
        </Text>
      </Flex>
    </Box>
  );
};

export default Performance;
