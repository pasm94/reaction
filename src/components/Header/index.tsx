import { Flex, Heading, Text, Button, Box } from '@chakra-ui/react';
import AboutMe from '../AboutMe';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <Flex w='100vw' mx='auto' justify='space-between' bgColor={'pink.500'} p='8'>
    <Heading size='3xl'>
      <Text mb='5'>{title}</Text>
      <Text fontSize='2xl'>{subtitle}</Text>
    </Heading>
    <Box mr='16'>
      <AboutMe />
    </Box>
  </Flex>
);

export default Header;
