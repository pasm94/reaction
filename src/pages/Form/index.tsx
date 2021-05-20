import { Box, Flex, Text, Input, Spinner } from '@chakra-ui/react';
import { FiUser, FiGithub, FiArrowRight } from 'react-icons/fi';
import Header from '../../components/Header';
import { Button } from '@chakra-ui/button';
import { api } from '../../services/api';
import React, { FormEvent, useEffect, useState } from 'react';

interface User {
  name: string;
  github: string;
}

const Form: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  async function handleAddUser(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    if (!name || !github) {
      setIsLoading(false);
      return;
    }

    await api.post('/users', {
      name,
      github,
    });

    setUsers([...users, { name, github }]);

    setName('');
    setGithub('');
    setIsLoading(false);
  }

  return (
    <Box>
      <Header
        title={'ReactJS form 📋'}
        subtitle={'Form with ReactJS and fake api.'}
      />
      <Box display='flex'>
        <Box p='8' w='50rem'>
          <Flex flexDir='column'>
            {users.length > 0 ? (
              users.map(user => (
                <Text
                  display='flex'
                  alignItems='center'
                  fontSize='4xl'
                  key={user.github}
                >
                  <FiUser />
                  <Text ml='4' mr='6'>
                    {user.name}
                  </Text>
                  <FiArrowRight />
                  <Box ml='4'>
                    <FiGithub />
                  </Box>
                  <Text ml='4'>{user.github}</Text>
                </Text>
              ))
            ) : (
              <Text display='flex' ml='40%' mt='20'>
                <Spinner style={{ width: '5rem', height: '5rem' }} />
              </Text>
            )}
          </Flex>
        </Box>
        <Box w='20rem' ml='20' p='8'>
          <Flex
            as='form'
            width='100%'
            maxWidth={360}
            bg='gray.800'
            p='8'
            borderRadius={8}
            flexDir='column'
            onSubmit={handleAddUser}
          >
            <Input
              name='name'
              value={name}
              onChange={event => setName(event.target.value)}
              type='text'
              placeholder='Nome'
              mb='4'
              minLength={3}
            />

            <Input
              name='github'
              value={github}
              onChange={event => setGithub(event.target.value)}
              type='text'
              placeholder='Github'
              minLength={1}
            />

            <Button type='submit' mt='6' colorScheme='pink' size='lg'>
              {isLoading ? <Spinner /> : 'Cadastrar'}
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
