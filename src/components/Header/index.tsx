import { Flex, Heading, Text } from '@chakra-ui/layout';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <Flex w='100%' maxW={1480} mx='auto' bgColor={'pink.500'} p='7'>
    <Heading size='3xl'>
      <Text mb='5'>{title}</Text>
      <Text fontSize='2xl'>{subtitle}</Text>
    </Heading>
  </Flex>
);

export default Header;
