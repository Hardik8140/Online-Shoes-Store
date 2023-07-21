import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, brand, price, category }) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  return (
    <Card m="auto" p={6} textAlign="center" _hover={{ cursor: "pointer" }}>
      <Link to={`/products/${id}`}>
        <Image
          src={image}
          w="70%"
          m={5}
          aspectRatio="4/3"
          objectFit="contain"
        />
        <Heading as="h5" size="md" m={3}>
          {brand}
        </Heading>
        <Text m={2} fontSize="15px">
          {name}
        </Text>
        <Heading as="h3" size="md" m={3}>
          ₹{price}
        </Heading>
      </Link>
      <Box display="flex" justifyContent="space-around">
        <Button>Add To Cart</Button>
        <Button onClick={handleAddToWishlist}>
          {isAddedToWishlist ? (
            <FiHeart style={{ fill: "red" }} />
          ) : (
            <FiHeart />
          )}
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
