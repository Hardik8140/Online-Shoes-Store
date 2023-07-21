import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import {
  singleProductReducer,
  initialState,
} from "../Reducer/SingleProductPageReducer";
import { getData } from "../utils/api";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const SingleProduct = () => {
  const [state, dispatch] = useReducer(singleProductReducer, initialState);
  const { id } = useParams();

  useEffect(() => {
    const fetchAndUpdateData = async (id) => {
      dispatch({ type: "SINGLE_PRODUCT_LOADING" });
      try {
        const res = await getData(
          `https://growfin.onrender.com/products/${id}`
        );
        const response = res?.data;
        console.log(response);
        dispatch({ type: "SINGLE_PRODUCT_SUCCESS", payload: response });
      } catch (error) {
        dispatch({ type: "SINGLE_PRODUCT_ERROR" });
      }
    };
    fetchAndUpdateData(id);
  }, [id]);

  const { loading, products, error } = state;

  return (
    <Box w="90%" m="auto" mt="70px" mb={10}>
      <SimpleGrid columns={2} gap={7}>
        <Box m="auto">
          <Image src={products.image} />
        </Box>
        <Box>
          <Heading mb={1}>{products.name}</Heading>
          <Text mb={4}>{products.brand}</Text>
          <Heading as="h3" size="lg" mb={4}>
            ₹ {products.price}
          </Heading>

          <Heading as="h6" size="md" mb="4">
            Offer :
          </Heading>
          <SimpleGrid columns={3} w="100%" gap={5} mt={8} mb={8}>
            <Card p={3}>
              <Heading as="h4" size="md">
                Bank Offer
              </Heading>
              <Text>
                Upto ₹750.00 discount on select Credit CardsUpto ₹750.00
                discount on select Credit Cards
              </Text>
            </Card>
            <Card p={3}>
              <Heading as="h4" size="md">
                Bank Offer
              </Heading>
              <Text>
                Upto ₹750.00 discount on select Credit CardsUpto ₹750.00
                discount on select Credit Cards
              </Text>
            </Card>
            <Card p={3}>
              <Heading as="h4" size="md">
                Bank Offer
              </Heading>
              <Text>
                Upto ₹750.00 discount on select Credit CardsUpto ₹750.00
                discount on select Credit Cards
              </Text>
            </Card>
          </SimpleGrid>
          <UnorderedList mb={8}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>

          <Button w="100%">Buy Now</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SingleProduct;
