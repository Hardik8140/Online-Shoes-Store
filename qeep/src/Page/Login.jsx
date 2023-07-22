import {
  Box,
  Card,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Box backgroundColor="blackAlpha.200" p="50px">
      <Box w="35%" m="auto">
        <form action="">
          <Heading m={3} textDecoration="underline">
            Welcome back...
          </Heading>
          <FormControl isRequired>
            <Card p={9} borderRadius="15px">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                required
                placeholder="Enter Your Email"
                mb={5}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                required
                placeholder="Enter Your Password"
                mb={5}
              />
              <Input
                type="submit"
                mt={2}
                _hover={{ backgroundColor: "black", color: "white" }}
                borderRadius={8}
              />
            </Card>
          </FormControl>
        </form>
      </Box>
      {/* </SimpleGrid> */}
    </Box>
  );
};

export default Login;
