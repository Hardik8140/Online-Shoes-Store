import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { logoNoBackground, AdobeStoc } from "../assets";

const Footer = () => {
  return (
    <Box>
      {/* <Box
        p="60px"
        
        display="flex"
        justifyContent="space-between"
      > */}
      {/* <> */}
      <SimpleGrid
        columns={{ base: "1", md: "3" }}
        backgroundColor="lightgray"
        p="60px"
        gap={9}
      >
        <SimpleGrid columns={{ base: "1", md: "1", lg: "1" }}>
          <Image src={logoNoBackground} w="60px" mb="20px" />
          <Text>
            Specializes in providing high-quality, stylish products <br /> for
            your wardrobe
          </Text>
        </SimpleGrid>

        <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} gap={10}>
          <Box>
            <Heading as="h6" size="md" mb="30px">
              SHOP
            </Heading>
            <Text>All collection</Text>
            <Text>Winter Edition</Text>
            <Text>Discount</Text>
          </Box>

          <Box>
            <Heading as="h6" size="md" mb="30px">
              COMPANY
            </Heading>
            <Text>
              <Link to="/about">About Us</Link>
            </Text>
            <Text>
              <Link to="/contact">Contact</Link>
            </Text>
            <Text>Affiliates</Text>
          </Box>

          <Box>
            <Heading as="h6" size="md" mb="30px">
              SUPPORT
            </Heading>
            <Text>FAQs</Text>
            <Text>Cookie Policy</Text>
            <Text>Terms of Use</Text>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading as="h6" size="md" mb="30px">
            PAYMENT METHODS
          </Heading>
          <Image src={AdobeStoc} w="180px" />
        </Box>
      </SimpleGrid>
      {/* </Box> */}

      <Divider color="whitesmoke" w="90%" />

      <Box backgroundColor="lightgray" textAlign="center" p={4}>
        Copyright 2022 Nostra. All right reserved
      </Box>
      {/* </> */}
    </Box>
  );
};

export default Footer;
