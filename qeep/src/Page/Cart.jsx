import {
  Box,
  Button,
  Card,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FcOk } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    removeItem,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(CartContext);

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const calculateSubTotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleProceedToBuy = () => {
    navigate("/checkout");
  };

  return (
    <Box backgroundColor="blackAlpha.200" p={5}>
      <SimpleGrid columns={2}>
        <Card m={6}>
          <Box>
            {cartItems.length === 0 ? (
              <Heading as="h3" size="xl" p={7}>
                Your cart is empty.
              </Heading>
            ) : (
              <>
                {cartItems.map((item) => (
                  <Card
                    key={item.id}
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="row"
                    alignItems="center"
                    m={6}
                    p={6}
                  >
                    <Image
                      src={item.image}
                      w="20%"
                      m={5}
                      aspectRatio="5/3"
                      objectFit="contain"
                    />
                    <Heading as="h5" size="md" m={3}>
                      {item.brand}
                    </Heading>
                    <Text m={2} fontSize="15px">
                      {item.name}
                    </Text>
                    <Heading as="h3" size="md" m={3}>
                      ₹{item.price}
                    </Heading>
                    <Button
                      m={3}
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </Button>
                    <Text>{item.quantity}</Text>
                    <Button
                      m={3}
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      onClick={() => handleRemoveItem(item.id)}
                      p={5}
                      w="150em"
                    >
                      Remove
                    </Button>
                  </Card>
                ))}
              </>
            )}

            <Divider color={"black"} />
            <Heading m={6} as="h4" size="md" textAlign="right">
              SubTotal: ₹{calculateSubTotal()}.00
            </Heading>
          </Box>
        </Card>

        <Box>
          <Card m={6} p={5}>
            {calculateSubTotal() > 500 ? (
              <Box display="flex" alignItems="center">
                <FcOk />
                <Text m={2}>Your order is eligible for FREE Delivery</Text>
              </Box>
            ) : (
              <Text>Your order is not eligible for FREE Delivery</Text>
            )}
            <Heading m={6} as="h4" size="md">
              SubTotal: ₹{calculateSubTotal()}.00
            </Heading>
            <Button
              p={4}
              onClick={handleProceedToBuy}
              disabled={cartItems.length === 0}
            >
              Proceed to Buy
            </Button>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Cart;
