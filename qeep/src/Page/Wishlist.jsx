import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext";

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <Box>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <SimpleGrid columns={4} w="90%" m="60px auto" p={7}>
          {wishlistItems.map((item) => (
            <Card
              key={item.id}
              borderRadius="20px"
              p={8}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              textAlign="center"
            >
              <Image src={item.image} />
              <Heading as="h5" size="md" m={3}>
                {item.brand}
              </Heading>
              <Text m={2} fontSize="15px">
                {item.name}
              </Text>
              <Heading as="h3" size="md" m={3}>
                ₹{item.price}
              </Heading>
              <Button onClick={() => handleAddToCart(item)} m={2}>
                Add to Cart
              </Button>
              <Button m={2}>Remove</Button>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Wishlist;
