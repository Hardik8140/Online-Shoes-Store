import React, { useEffect, useReducer } from "react";
import { initState, reducer } from "../Reducer/HomeReducer";
import { getData } from "../utils/api";
import {
  Box,
  Card,
  CircularProgress,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";

const Product = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const fetchAndUpdateData = async () => {
      dispatch({ type: "PRODUCTS_LOADING" });
      try {
        const res = await getData(`https://growfin.onrender.com/products`);
        const response = res?.data;
        console.log(response);
        dispatch({ type: "PRODUCTS_SUCCESS", payload: response });
      } catch (error) {
        dispatch({ type: "PRODUCTS_ERROR" });
      }
    };
    fetchAndUpdateData();
  }, []);

  return (
    <Box w="90%" m="auto" mt={6}>
      <Box mb={4} display="flex" justifyContent="space-between">
        <Select placeholder="Sort By Price">
          <option value="lth">Low to High</option>
          <option value="htl">High to Low</option>
        </Select>

        <Select placeholder="Sort By Category">
          <option value="all">All</option>
          <option value="mens_shoes">Men's Shoes</option>
          <option value="womens_shoes">Women's Shoes</option>
          <option value="Tech">Tech </option>
        </Select>
      </Box>

      <Box>
        {state.loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="200px"
          >
            <CircularProgress isIndeterminate color="green.300" />
          </Box>
        ) : (
          <SimpleGrid columns={4} gap={9}>
            {state.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default Product;
