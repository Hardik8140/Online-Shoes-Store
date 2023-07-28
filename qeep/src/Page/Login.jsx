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
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { isAuth, user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.get(`https://growfin.onrender.com/users`);
      let users = res.data;
      let userData = users.find(
        (user) => user.email === email && user.password === password
      );
      if (userData) {
        if (
          userData.email === "admin@gmail.com" &&
          userData.password === "admin"
        ) {
          // loginUsers();
          navigate("/admin");
        } else {
          login(userData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box backgroundColor="blackAlpha.200" p="50px">
      <Box w={{ base: "90%", sm: "90%", md: "55%", lg: "35%" }} m="auto">
        <form onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                required
                placeholder="Enter Your Password"
                mb={5}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
