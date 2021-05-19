import { Flex, Heading, Text, Button, Link } from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

interface AboutMeProps {
  title?: string;
  subtitle?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ title, subtitle }) => (
  <Flex flexDir='column'>
    <Link
      fontSize='1.5rem'
      target='_blank'
      href='https://github.com/pasm94'
      isExternal
      display='flex'
      alignItems='center'
    >
      <FiGithub />
      <Text ml='5'>pasm94</Text>
    </Link>
    <Link
      fontSize='1.5rem'
      target='_blank'
      href='https://www.linkedin.com/in/paulo-alberto-stein-m%C3%BCller/'
      isExternal
      display='flex'
      alignItems='center'
    >
      <FiLinkedin />
      <Text ml='5'>Paulo A. S. Müller</Text>
    </Link>
    <Text
      display='flex'
      justifyContent='center'
      fontSize='1.5rem'
      justify='center'
      alignItems='center'
    >
      <FiMail />
      <Text ml='5'>paulomuller94@gmail.com</Text>
    </Text>
  </Flex>
);

export default AboutMe;
