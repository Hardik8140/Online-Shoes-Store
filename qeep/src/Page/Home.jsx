import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Input,
  Center,
} from "@chakra-ui/react";
import React from "react";
import {
  Alarm,
  Converse,
  Headphone,
  Lotto,
  Nike,
  OnitsukaTiger,
  Product,
  Satisfaction,
  Sperry,
  Ugg,
  buds,
  drone,
  fast,
  just,
  mainShoes,
  mens,
  tech,
  womens,
} from "../assets";

import { ArrowDownIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Box>
      {/* Main Section of the Landing Page */}

      <SimpleGrid
        columns={{ base: "1", md: "2" }}
        w="90%"
        m="auto"
        gap={10}
        p={6}
      >
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

      <Box boxShadow="md" w="90%" m="auto" borderRadius="20px">
        <Heading as="h2" size="lg" ml="60px">
          Brands
        </Heading>
        <SimpleGrid columns={{ base: "3", md: "6" }} gap={9} p={4}>
          {/* <Box display="flex" w="90%" m="auto" justifyContent="space-between"> */}
          <Image src={Sperry} aspectRatio="4/3" />
          <Image src={Nike} aspectRatio="4/3" />
          <Image src={Converse} aspectRatio="4/3" />
          <Image src={Lotto} aspectRatio="4/3" />
          <Image src={OnitsukaTiger} aspectRatio="4/3" />
          <Image src={Ugg} aspectRatio="4/3" />
        </SimpleGrid>
        {/* </Box> */}
      </Box>

      {/* Customer Service  */}

      <Box w="90%" m="auto" mt="100px" boxShadow="md" borderRadius="20px" p={6}>
        <Heading as="h4" size="lg" mb={10}>
          We provide best <br /> customer experience
        </Heading>

        <SimpleGrid columns={{ base: "2", md: "4" }} gap={7}>
          <Box>
            <Image
              p={2}
              src={Product}
              w="50px"
              backgroundColor="lightgray"
              borderRadius={7}
              mb={8}
            />
            <Heading as="h3" size="lg" mb="5">
              Original Product
            </Heading>
            <Text color="darkgray">
              We provide money back guarantee if the product are not original
            </Text>
          </Box>
          <Box>
            <Image
              p={2}
              src={Satisfaction}
              w="50px"
              backgroundColor="lightgray"
              borderRadius={7}
              mb={8}
            />
            <Heading as="h3" size="lg" mb="5">
              Original Product
            </Heading>
            <Text color="darkgray">
              We provide money back guarantee if the product are not original
            </Text>
          </Box>
          <Box>
            <Image
              p={2}
              src={just}
              w="50px"
              backgroundColor="lightgray"
              borderRadius={7}
              mb={8}
            />
            <Heading as="h3" size="lg" mb="5">
              Original Product
            </Heading>
            <Text color="darkgray">
              We provide money back guarantee if the product are not original
            </Text>
          </Box>
          <Box>
            <Image
              p={2}
              src={fast}
              w="50px"
              backgroundColor="lightgray"
              borderRadius={7}
              mb={8}
            />
            <Heading as="h3" size="lg" mb="5">
              Original Product
            </Heading>
            <Text color="darkgray">
              We provide money back guarantee if the product are not original
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Current Picks */}

      <Box w="90%" m="auto" mt="100px">
        <Heading as="h4" size="lg" mb={10} pl={7}>
          Current Picks
        </Heading>

        <SimpleGrid columns={{ base: "1", md: "3" }} gap={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src={mens} w="90%" aspectRatio="4/3" objectFit="contain" />
            <Button m="4">Men's Fashion</Button>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src={womens} w="90%" aspectRatio="4/3" objectFit="contain" />
            <Button m="4">Women's Fashion</Button>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src={tech} w="90%" aspectRatio="4/3" objectFit="contain" />
            <Button m="4">Tech Accessories</Button>
          </Box>
          {/* <Image src={Premium} backgroundColor="lightgray" p={10} />
          <Image src={Kids} backgroundColor="lightgray" p={10} /> */}
        </SimpleGrid>
      </Box>

      {/* Tech */}

      <SimpleGrid
        columns={{ base: "1", md: "2" }}
        w="90%"
        m="auto"
        gap="100px"
        mt="100px"
        mb={10}
      >
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

      {/* Subscribe */}

      <Center textAlign="center" mb={7}>
        <Box w={{ base: "90%", md: "45%" }}>
          <Heading as="h4" size="lg" mb={3}>
            Subscribe to our newsletter to get updates to our latest collections
          </Heading>
          <Text mb={3}>
            Get 20% off on your first order by subscribing to our newsletter{" "}
          </Text>
          <Box
            mb={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Input
              type="text"
              placeholder="Enter your email"
              w={{ base: "90%", md: "45%" }}
            />
            <Button backgroundColor="black" color="white">
              Subscribe
            </Button>
          </Box>
          <Text mb={3}>You will be able to unsubscribe at any time</Text>
          <Text mb={3}>Read our Privacy Policy here</Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
