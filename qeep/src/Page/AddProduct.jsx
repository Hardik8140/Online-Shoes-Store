import React, { useReducer } from "react";
import { reducer, initState } from "../Reducer/AddReducer";
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
  useDisclosure,
} from "@chakra-ui/react";
import { postData } from "../utils/api";

const AddProduct = ({ isOpen, onClose, onOpen }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(`https://growfin.onrender.com/products`, state)
      .then((res) => {
        dispatch({
          type: "RESET_FORM_FIELDS",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader backgroundColor="blackAlpha.200">
          Add New Product
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading as="h3" size="md" mb={5}>
            Add new Product
          </Heading>

          <FormControl>
            <Box mb={4}>
              <FormLabel>Product Name</FormLabel>
              <Input type="text" placeholder="Product Name" />
            </Box>

            <Box mb={4}>
              <FormLabel>Product Brand</FormLabel>
              <Input type="text" placeholder="Product Brand" />
            </Box>

            <Box mb={4}>
              <FormLabel>Product Price</FormLabel>
              <Input type="number" placeholder="Product Price" />
            </Box>

            <Box mb={4}>
              <FormLabel>Product Category</FormLabel>
              <Select>
                <option value="">Select Category</option>
                <option value="Men's Shoes">Men's Shoes</option>
                <option value="Women's Shoes">Women's Shoes</option>
                <option value="Tech">Tech</option>
              </Select>
            </Box>

            <Box mb={4}>
              <FormLabel>Product Image</FormLabel>
              <Input type="url" placeholder="Product Image URL" />
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

export default AddProduct;
