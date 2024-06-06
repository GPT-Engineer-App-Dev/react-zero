import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>About MyApp</Heading>
        <Text fontSize="xl">MyApp is a simple React application with a basic structure and styling.</Text>
      </VStack>
    </Container>
  );
};

export default About;