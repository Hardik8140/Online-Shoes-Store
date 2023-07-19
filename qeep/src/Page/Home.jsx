import {
  Box,
  Card,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Alarm,
  Converse,
  Headphone,
  Lotto,
  Nike,
  OnitsukaTiger,
  Sperry,
  Ugg,
  buds,
  drone,
  mainShoes,
} from "../assets";

import { ArrowDownIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Box>
      {/* Main Section of the Landing Page */}

      <SimpleGrid columns={2} w="90%" m="auto" gap={10} p={6}>
        <Box display="flex" flexDirection="column" alignItems="center" p={10}>
          <Heading fontSize="7xl">Rayanzi: soft coal run</Heading>
          <Text>
            The game become increasingly high speed, stay ahead! Shoes will
            architecture will revolution the world of sports
          </Text>
        </Box>

        <Box p={2}>
          <Image src={mainShoes} rotate="50px" />
        </Box>
      </SimpleGrid>

      {/* Brand Logo */}

      <Box>
        <Heading ml="90px">Brands</Heading>
        <Box display="flex" w="90%" m="auto" justifyContent="space-between">
          <Image src={Sperry} w="10%" aspectRatio="4/3" objectFit="contain" />
          <Image src={Nike} w="10%" aspectRatio="4/3" objectFit="contain" />
          <Image src={Converse} w="10%" aspectRatio="4/3" objectFit="contain" />
          <Image src={Lotto} w="10%" aspectRatio="4/3" objectFit="contain" />
          <Image
            src={OnitsukaTiger}
            w="10%"
            aspectRatio="4/3"
            objectFit="contain"
          />
          <Image src={Ugg} w="10%" aspectRatio="4/3" objectFit="contain" />
        </Box>
      </Box>

      {/* Tech */}

      <SimpleGrid columns={2} w="90%" m="auto" gap="100px" mt="100px" mb={10}>
        <Box>
          <Box p="20px" mb={8} pt={10} pb={10}>
            <Heading fontSize="80px">Tech</Heading>
            <Text>1540 products</Text>
          </Box>

          <Card p={6}>
            <Box display="flex" justifyContent="space-between">
              <Heading>N&L</Heading>
              <Text textAlign="right">
                Ultra sensitive sensors <br /> that monitor the strength <br />{" "}
                of the music waves
              </Text>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="20px">
                Enhance your music <br /> listening experience <br /> with the
                next generation
              </Text>
              <ArrowDownIcon boxSize={9} mt={10} />
            </Box>
            <Image src={Headphone} w="20em" m="auto" transform="scale(0.9)" />
          </Card>

          <Card boxShadow="base" mt={10} p={6}>
            <Box display="flex" justifyContent="space-between">
              <Heading>mint</Heading>
              <Text textAlign="right">
                Drone delivers are <br /> quick convenient and <br />{" "}
                eco-friendly
              </Text>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="20px">
                Drone Deliveries <br /> Using DJI Drones
              </Text>
              <ArrowDownIcon boxSize={9} mt={10} />
            </Box>
            <Image src={drone} w="20em" m="auto" transform="scale(0.9)" />
          </Card>
        </Box>

        <Box>
          <Card p={6}>
            <Box display="flex" justifyContent="space-between">
              <Heading>mint</Heading>
              <Text textAlign="right">
                Establish interaction <br /> with oneself
              </Text>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="20px">
                Innovative compact biorhythm <br /> tracker with 100% accuracy
              </Text>
              <ArrowDownIcon boxSize={9} mt={10} />
            </Box>
            <Image src={buds} w="20em" m="auto" transform="scale(0.9)" />
          </Card>

          <Card p={6} mt={10}>
            <Box display="flex" justifyContent="space-between">
              <Heading>tik</Heading>
              <Text textAlign="right">
                Sleep phase tracking <br /> perfect awakening
              </Text>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="20px">
                Alarm clock with which it is <br /> pleasant to wake up
              </Text>
              <ArrowDownIcon boxSize={9} mt={10} />
            </Box>
            <Image src={Alarm} w="20em" m="auto" transform="scale(0.9)" />
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
