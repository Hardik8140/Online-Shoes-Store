import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
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
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
// import Carttotal from "../Components/Carttotal";
import { CartContext } from "../Context/CartContext";

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  //   const { cartTotal } = Carttotal();

  return (
    <SimpleGrid columns={2} w="90%" m="auto" mt="50px" gap={7}>
      {/* Select address */}
      <Card mb={7} p={4}>
        <Accordion allowMultiple mb={6}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Select a delivery address
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Button onClick={onOpen}>
                <AddIcon />
                <Text>Add a new address</Text>
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader backgroundColor="blackAlpha.200">
              Enter Delivery Address
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Heading as="h3" size="md" mb={5}>
                Add new address
              </Heading>

              <FormControl>
                <Box mb={4}>
                  <FormLabel>Country/Region</FormLabel>
                  <Select>
                    <option value="india">India</option>
                  </Select>
                </Box>

                <Box mb={4}>
                  <FormLabel>Full name (First and Last name)</FormLabel>
                  <Input type="text" />
                </Box>

                <Box mb={4}>
                  <FormLabel>Mobile number</FormLabel>
                  <Input type="number" />
                </Box>

                <Box mb={4}>
                  <FormLabel>Pincode</FormLabel>
                  <Input type="number" placeholder="6 digits [0-9] PIN code" />
                </Box>

                <Box mb={4}>
                  <FormLabel>
                    Flat, House no., Building, Company, Apartment
                  </FormLabel>
                  <Input type="text" />
                </Box>

                <Box mb={4}>
                  <FormLabel>Area, Street, Sector, Village</FormLabel>
                  <Input type="text" />
                </Box>

                <Box mb={4}>
                  <FormLabel>Landmark</FormLabel>
                  <Input type="text" placeholder="E.g. near zydus hospital" />
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <FormLabel>Town/City</FormLabel>
                    <Input type="text" />
                  </Box>

                  <Box>
                    <FormLabel>State</FormLabel>
                    <Select>
                      <option value="">Choose a state</option>
                      <option value="gujarat">Gujarat</option>
                    </Select>
                  </Box>
                </Box>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button backgroundColor="blackAlpha.300" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button backgroundColor="blackAlpha.300" mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Select Payment Method */}
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Select a Payment Methods
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Heading as="h4" size="md" mb={5}>
                CREDIT & DEBIT CARDS
              </Heading>
              <Divider />
              <FormControl>
                <FormLabel mt={5}>
                  Enter Your Credit/debit card last 6 digits
                </FormLabel>
                <Input type="number" placeholder="00 0000" mb={5} />
              </FormControl>

              <Heading as="h4" size="md" mb={5}>
                Another payment method
              </Heading>
              <Divider mb={5} />

              <FormControl>
                <Box display="flex" mb={3}>
                  <Checkbox mr={5} /> <Text>Net Banking</Text>
                </Box>
                <Box display="flex" mb={3}>
                  <Checkbox mr={5} /> <Text>UPI app</Text>
                </Box>
                <Box display="flex" mb={3}>
                  <Checkbox mr={5} /> <Text>Cash on Delivery</Text>
                </Box>
                <Button>Submit</Button>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>

      <Card p="0px 30px 30px 30px">
        <Text m="30px 30px 10px 0px">
          Choose a payment method to continue checking out. You will still have
          a chance to review and edit your order before it is final.
        </Text>
        <Divider />

        <Heading as="h3" size="lg">
          Order Summary
        </Heading>

        <Text>Total: {calculateTotal()}</Text>
      </Card>
    </SimpleGrid>
  );
};

export default Checkout;
