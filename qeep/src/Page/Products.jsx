import React, { useEffect, useReducer, useState } from "react";
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
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("all");

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

  // Sorting handler
  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
  };

  // Filtering handler
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterBy(value);
  };

  // Apply sorting and filtering to products
  const filteredAndSortedProducts = state.products
    .filter((product) => {
      if (filterBy === "all") {
        return true;
      }
      return product.category === filterBy;
    })
    .sort((a, b) => {
      if (sortBy === "lth") {
        return a.price - b.price;
      } else if (sortBy === "htl") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <Box w="90%" m="auto" mt={6}>
      <Box mb={4} display="flex" justifyContent="space-between">
        <Select
          placeholder="Sort By Price"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="lth">Low to High</option>
          <option value="htl">High to Low</option>
        </Select>

        <Select
          placeholder="Sort By Category"
          value={filterBy}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="Men's Shoes">Men's Shoes</option>
          <option value="Women's Shoes">Women's Shoes</option>
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
          <SimpleGrid
            columns={{ base: "1", md: "3", lg: "4" }}
            gap={{ base: "6", md: "9" }}
          >
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default Product;
