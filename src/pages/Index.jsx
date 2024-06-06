import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        padding="1.5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
            MyApp
          </Link>
        </Heading>
        <Box>
          <Link as={RouterLink} to="/" margin="0 1rem" color="white" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin="0 1rem" color="white" _hover={{ textDecoration: "none" }}>
            About
          </Link>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading>Welcome to MyApp</Heading>
          <Text fontSize="xl">This is a basic structure of a React application with Chakra UI.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;