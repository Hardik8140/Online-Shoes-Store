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
import React, { useContext, useEffect, useState } from "react";
// import Carttotal from "../Components/Carttotal";
import { CartContext } from "../Context/CartContext";
import { getUserAddressesFromAPI, postAddressToAPI } from "../utils/api";
import { AuthContext } from "../Context/AuthContext";

const Checkout = () => {
  const { isAuth } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useContext(CartContext);

  const [newAddress, setNewAddress] = useState({
    country: "India",
    fullName: "",
    mobileNumber: "",
    pincode: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    townCity: "",
    state: "",
  });

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  useEffect(() => {
    fetchUserAddresses();
  }, []);

  const fetchUserAddresses = () => {
    getUserAddressesFromAPI(`https://growfin.onrender.com/address`)
      .then((response) => {
        setSavedAddresses(response.data);
        if (response.data.length > 0) {
          setSelectedAddress(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
      });
  };

  const handleSubmitAddress = () => {
    postAddressToAPI("https://growfin.onrender.com/address", newAddress)
      .then((response) => {
        console.log("Address submitted successfully:", response.data);
        setSavedAddresses((pre) => [response.data, ...pre]);
        setSelectedAddress(response.data);
        onClose();
      })
      .catch((error) => {
        console.log("Error submitting address:", error);
      });
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
                  <Select
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, country: e.target.value })
                    }
                  >
                    <option value="india">India</option>
                  </Select>
                </Box>

                <Box mb={4}>
                  <FormLabel>Full name (First and Last name)</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, fullName: e.target.value })
                    }
                  />
                </Box>

                <Box mb={4}>
                  <FormLabel>Mobile number</FormLabel>
                  <Input
                    type="number"
                    onChange={(e) =>
                      setNewAddress({
                        ...newAddress,
                        mobileNumber: e.target.value,
                      })
                    }
                  />
                </Box>

                <Box mb={4}>
                  <FormLabel>Pincode</FormLabel>
                  <Input
                    type="number"
                    placeholder="6 digits [0-9] PIN code"
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, pincode: e.target.value })
                    }
                  />
                </Box>

                <Box mb={4}>
                  <FormLabel>
                    Flat, House no., Building, Company, Apartment
                  </FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setNewAddress({
                        ...newAddress,
                        addressLine1: e.target.value,
                      })
                    }
                  />
                </Box>

                <Box mb={4}>
                  <FormLabel>Area, Street, Sector, Village</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setNewAddress({
                        ...newAddress,
                        addressLine2: e.target.value,
                      })
                    }
                  />
                </Box>

                <Box mb={4}>
                  <FormLabel>Landmark</FormLabel>
                  <Input
                    type="text"
                    placeholder="E.g. near zydus hospital"
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, landmark: e.target.value })
                    }
                  />
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <FormLabel>Town/City</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          townCity: e.target.value,
                        })
                      }
                    />
                  </Box>

                  <Box>
                    <FormLabel>State</FormLabel>
                    <Select
                      onChange={(e) =>
                        setNewAddress({ ...newAddress, state: e.target.value })
                      }
                    >
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
              <Button
                backgroundColor="blackAlpha.300"
                mr={3}
                onClick={handleSubmitAddress}
              >
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
        {savedAddresses.map((el) => (
          <Box key={el.id}>
            {isAuth ? (
              <Text>
                {el.fullName} {el.addressLine1} {el.addressLine2} {el.pincode}{" "}
                {el.mobileNumber}
              </Text>
            ) : null}
          </Box>
        ))}
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
