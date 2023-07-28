import React, { forwardRef, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoNoBackground, shopping, heart } from "../assets";
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
  Tag,
  Tooltip,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const { isAuth, user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      const searchParams = new URLSearchParams();
      searchParams.append("search", searchInput.trim());
      navigate(`/products?${searchParams.toString()}`);
    }
  };
  return (
    <Box
      boxShadow="base"
      display="flex"
      flexDirection={{ base: "row", md: "row" }}
      justifyContent={{
        base: "space-around",
        sm: "space-around",
        md: "space-around",
        lg: "space-around",
        xl: "space-around",
      }}
      p="10px"
      m={{ base: "auto", sm: "auto", md: "auto" }}
      alignItems="center"
    >
      {/* Logo */}

      <Box mb={{ base: "10px", md: "0" }}>
        <Link to="/">
          <Image w="40px" src={logoNoBackground} alt="logo" />
        </Link>
      </Box>

      {/* Links */}

      <Box
        display={{ base: "none", md: "flex", lg: "flex" }}
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "space-between",
          xl: "space-between",
        }}
        w={{ base: "100%", md: "240px" }}
        mb={{ base: "10px", md: "0" }}
      >
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </Box>

      {/* Search */}

      <Box
        display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
        justifyContent={{ xl: "space-between" }}
        mr={{ lg: "20px" }}
        w={{ md: "25em", lg: "30em", xl: "40em" }}
      >
        <Input
          placeholder="Search Qeep's Product's"
          w={{ lg: "40em", xl: "40em" }}
          h="2.5em"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          backgroundColor={"black"}
          color="white"
          _hover={{ backgroundColor: "blackAlpha", color: "white" }}
        >
          Search
        </Button>
      </Box>

      {/* Cart, Wishlist, Menu */}

      <Box
        w={{ base: "100%", md: "200px" }}
        display="flex"
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
      >
        <Box
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "flex",
          }}
          justifyContent="space-between"
          w="100px"
          mr={2}
        >
          <Tooltip label="Cart">
            <Link to="/cart">
              <Image
                src={shopping}
                w="44px"
                backgroundColor="#d6ccbe"
                borderRadius="50%"
                _hover={{ backgroundColor: "#e3caa8" }}
                p={3}
              />
            </Link>
          </Tooltip>
          <Tooltip label="Wishlist">
            <Link to="/wishlist">
              <Image
                src={heart}
                w="44px"
                backgroundColor="#d6ccbe"
                borderRadius="50%"
                _hover={{ backgroundColor: "#e3caa8" }}
                p={3}
              />
            </Link>
          </Tooltip>
        </Box>

        {isAuth && user ? (
          <>
            <Avatar name={user.name} src="" />
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Box display={{ base: "none", md: "flex" }} alignItems="center">
            <Menu>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Menu
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Tooltip label="Cart">
                      <Link to="/cart">
                        Cart
                        {/* <Image
                          src={shopping}
                          w="44px"
                          backgroundColor="#d6ccbe"
                          borderRadius="50%"
                          _hover={{ backgroundColor: "#e3caa8" }}
                          p={3}
                        /> */}
                      </Link>
                    </Tooltip>
                  </MenuItem>
                  <MenuItem>
                    <Tooltip label="Wishlist">
                      <Link to="/wishlist">
                        Wishlist
                        {/* <Image
                          src={heart}
                          w="44px"
                          backgroundColor="#d6ccbe"
                          borderRadius="50%"
                          _hover={{ backgroundColor: "#e3caa8" }}
                          p={3}
                        /> */}
                      </Link>
                    </Tooltip>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/register">SignUp</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Menu>
          </Box>
        )}

        {/* Hamburger Menu */}

        <Box display={{ base: "flex", md: "none" }} alignItems="center">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/products">Products</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about">About Us</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact">Contact</Link>
              </MenuItem>
              {!user && (
                <>
                  <MenuItem>
                    <Link to="/register">SignUp</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>
                </>
              )}
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
