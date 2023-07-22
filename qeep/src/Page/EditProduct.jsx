import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { reducer, initState } from "../Reducer/EditReducer";
import { putData } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = ({ isOpen, onClose, onOpen }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { id } = useParams();
  //   const [productName, setProductName] = useState("");
  //   const [productBrand, setProductBrand] = useState("");
  //   const [productPrice, setProductPrice] = useState("");
  //   const [productCategory, setProductCategory] = useState("");
  //   const [productImage, setProductImage] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `https://growfin.onrender.com/products/${id}`,
    }).then((res) => {
      dispatch({
        type: "PREFILL_FORM_FIELD",
        payload: {
          name: res?.data?.name,
          brand: res?.data?.brand,
          price: res?.data?.price,
          category: res?.data?.category,
          image: res?.data?.image,
        },
      });
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    putData(`https://growfin.onrender.com/products`, id, state).then(() => {
      navigate(`/`);
    });
  };

  const handleChange = (e) => {
    const val =
      e.target.type === "number" ? Number(e.target.value) : e.target.value;

    dispatch({
      type: "EDIT_FORM_FIELD",
      payload: {
        key: e.target.name,
        value: val,
      },
    });
  };

  const { name, type, price, brand, image } = state;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader backgroundColor="blackAlpha.200">
          Edit Product Details
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading as="h3" size="md" mb={5}>
            Edit Product
          </Heading>

          <FormControl>
            <Box mb={4}>
              <FormLabel>Product Name</FormLabel>
              <Input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={handleChange}
                name="name"
              />
            </Box>

            <Box mb={4}>
              <FormLabel>Product Brand</FormLabel>
              <Input
                type="text"
                placeholder="Product Brand"
                value={brand}
                onChange={handleChange}
                name="brand"
              />
            </Box>

            <Box mb={4}>
              <FormLabel>Product Price</FormLabel>
              <Input
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={handleChange}
                name="price"
              />
            </Box>

            <Box mb={4}>
              <FormLabel>Product Category</FormLabel>
              <Select value={type} onChange={handleChange} name="type">
                <option value="">Select Category</option>
                <option value="Men's Shoes">Men's Shoes</option>
                <option value="Women's Shoes">Women's Shoes</option>
                <option value="Tech">Tech</option>
              </Select>
            </Box>

            <Box mb={4}>
              <FormLabel>Product Image</FormLabel>
              <Input
                type="url"
                placeholder="Product Image URL"
                value={image}
                onChange={handleChange}
                name="image"
              />
            </Box>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button backgroundColor="blackAlpha.300" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            backgroundColor="blackAlpha.300"
            mr={3}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProduct;
