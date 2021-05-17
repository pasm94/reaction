import { Box } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect } from 'react';
import Header from '../../components/Header';

const Pagination: React.FC = () => {
  return (
    <Box>
      <Header
        title={'ReactJS pagination with pokémons'}
        subtitle={
          'This is a small project to study ReactJS and other related technologies.'
        }
      />
    </Box>
  );
};

export default Pagination;
