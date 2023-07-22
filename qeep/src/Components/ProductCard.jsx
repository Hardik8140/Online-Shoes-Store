import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

const ProductCard = ({ id, image, name, brand, price, category }) => {
  const { wishlistItems, addToWishlist, removeFromWishlist, isItemInWishlist } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const [isAddWishlist, setIsAddWishlist] = useState(false);
  const toast = useToast();

  const handleAddToWishlist = () => {
    setIsAddWishlist(true);
    if (isItemInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      const newItem = {
        id,
        name,
        price,
        image,
      };
      addToWishlist(newItem);
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      id,
      name,
      price,
      image,
    };
    addToCart(newItem);
    toast({
      title: "Product Added Successful.",
      description: "The product has been added to your cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Card
      m="auto"
      p={6}
      textAlign="center"
      _hover={{ cursor: "pointer" }}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      borderRadius="10px"
    >
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
        <Button onClick={handleAddToCart}>Add To Cart</Button>
        <Button onClick={handleAddToWishlist}>
          {isAddWishlist ? <FiHeart style={{ fill: "red" }} /> : <FiHeart />}
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
