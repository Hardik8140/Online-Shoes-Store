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
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://growfin.onrender.com/users`, formData)
      .then((response) => {
        console.log("User registered successfully!", response.data);
        const user = response.data;
        login(user); // Update the user in the AuthContext
        navigate("/");
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    <Box backgroundColor="blackAlpha.200" p="50px">
      <Box w="35%" m="auto">
        <form onSubmit={handleSubmit}>
          <Heading m={3} textDecoration="underline">
            Create Your Account
          </Heading>
          <FormControl isRequired>
            <Card p={9} borderRadius="15px">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                mb={5}
                onChange={handleChange}
              />
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                mb={5}
                onChange={handleChange}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                required
                placeholder="Enter Your Password"
                mb={5}
                onChange={handleChange}
              />
              <Input
                type="submit"
                value="Register"
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

export default Register;
