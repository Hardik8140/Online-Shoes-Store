import {
  Box,
  Button,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { BiEdit } from "react-icons/bi";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { reducer, initState } from "../Reducer/HomeReducer";
import { getData } from "../utils/api";

const Admin = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    isOpen: isAddProductOpen,
    onOpen: onAddProductOpen,
    onClose: onAddProductClose,
  } = useDisclosure();
  const {
    isOpen: isEditProductOpen,
    onOpen: onEditProductOpen,
    onClose: onEditProductClose,
  } = useDisclosure();

  const handleAddProductClick = () => {
    onAddProductOpen();
  };
  const handleEditProductClick = (product) => {
    setSelectedProduct(product);
    onEditProductOpen();
  };

  useEffect(() => {
    dispatch({ type: "PRODUCTS_LOADING" });
    getData(`https://growfin.onrender.com/products`)
      .then((response) => {
        dispatch({ type: "PRODUCTS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "PRODUCTS_ERROR" });
      });
  }, []);

  const handleDeleteProduct = (id) => {
    fetch(`https://growfin.onrender.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Dispatch delete action to update the state
          dispatch({ type: "PRODUCT_DELETE", payload: id });
        } else {
          dispatch({ type: "PRODUCTS_ERROR" });
        }
      })
      .catch((error) => {
        dispatch({ type: "PRODUCTS_ERROR" });
      });
  };

  return (
    <Box w="90%" m="auto">
      <Box display="flex">
        <Button display="flex" m={5} onClick={handleAddProductClick}>
          <AddIcon mr={3} />
          <Text>Add a new Product</Text>
        </Button>
        {/* <Button display="flex" m={5} onClick={handleEditProductClick}>
          <BiEdit mr={9} />
          <Text>Edit Product</Text>
        </Button> */}
      </Box>
      {/* {showAddProduct && ( */}
      {isAddProductOpen && (
        <AddProduct isOpen={isAddProductOpen} onClose={onAddProductClose} />
      )}

      {isEditProductOpen && (
        <EditProduct
          isOpen={isEditProductOpen}
          onClose={onEditProductClose}
          selectedProduct={selectedProduct}
        />
      )}

      <TableContainer>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Product Name</Th>
              <Th>Product Brand</Th>
              <Th>Product Price</Th>
              <Th>Product Category</Th>
              <Th>Product Image</Th>
              <Th>Product Edit Details</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td maxW="100px" overflow="hidden" textOverflow="ellipsis">
                  {product.name}
                </Td>
                <Td>{product.brand}</Td>
                <Td>{product.price}</Td>
                <Td>{product.category}</Td>
                <Td>
                  <img src={product.image} alt={product.name} />
                </Td>
                <Td>
                  <Button
                    display="flex"
                    m={5}
                    onClick={() => handleEditProductClick(product)}
                  >
                    <BiEdit mr={9} />
                    <Text>Edit Product</Text>
                  </Button>
                </Td>
                <Td>
                  <Button
                    display="flex"
                    m={5}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <BiEdit mr={9} />
                    <Text>Delete</Text>
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* )} */}
    </Box>
  );
};

export default Admin;
