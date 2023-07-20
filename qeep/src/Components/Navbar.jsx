import React from "react";
import { Link } from "react-router-dom";
import { logoNoBackground, shopping, notification } from "../assets";
import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      boxShadow="base"
      display="flex"
      justifyContent="space-between"
      p="10px"
      alignItems="center"
    >
      <Box>
        <Link to="/">
          <Image w="40px" src={logoNoBackground} alt="logo" />
        </Link>
      </Box>
      <Box display="flex" justifyContent="space-between" w="240px">
        <Link>
          <Menu isLazy isHoverable>
            <MenuButton>Category</MenuButton>
            <MenuList>
              <MenuItem as="a" href="#">
                Shoes
              </MenuItem>
              <MenuItem as="a" href="#">
                Tech
              </MenuItem>
            </MenuList>
          </Menu>
        </Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </Box>
      <Input placeholder="Search Qeep's Product's" w="40em" h="2.5em" />

      <Box
        w="300px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={shopping}
          w="44px"
          backgroundColor="#d6ccbe"
          borderRadius="50%"
          _hover={{ backgroundColor: "#e3caa8" }}
          p={3}
        />
        <Image
          src={notification}
          w="44px"
          backgroundColor="#d6ccbe"
          borderRadius="50%"
          _hover={{ backgroundColor: "#e3caa8" }}
          p={3}
        />
        <Avatar name="Oshigaki Kisame" src="" />
        <Button>
          <Link to="/register">Login/SignUp</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
