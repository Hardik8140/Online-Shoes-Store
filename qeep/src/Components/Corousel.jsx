import { AspectRatio, Box, Center, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      centerPadding: "50px",
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Center>
        <Box w="90%" mb="80px" color="white">
          <Slider {...settings}>
            <Box p={5}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quibusdam tempore odit quam placeat similique alias quae quos
                asperiores pariatur perferendis, beatae dolorum et eos aperiam
                doloribus autem illo hic?
              </Text>
            </Box>
            <Box p={5}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quibusdam tempore odit quam placeat similique alias quae quos
                asperiores pariatur perferendis, beatae dolorum et eos aperiam
                doloribus autem illo hic?
              </Text>
            </Box>
            <Box p={5}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quibusdam tempore odit quam placeat similique alias quae quos
                asperiores pariatur perferendis, beatae dolorum et eos aperiam
                doloribus autem illo hic?
              </Text>
            </Box>
            <Box p={5}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quibusdam tempore odit quam placeat similique alias quae quos
                asperiores pariatur perferendis, beatae dolorum et eos aperiam
                doloribus autem illo hic?
              </Text>
            </Box>
            <Box p={5}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quibusdam tempore odit quam placeat similique alias quae quos
                asperiores pariatur perferendis, beatae dolorum et eos aperiam
                doloribus autem illo hic?
              </Text>
            </Box>
            <Box p={5}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quibusdam tempore odit quam placeat similique alias quae quos
                asperiores pariatur perferendis, beatae dolorum et eos aperiam
                doloribus autem illo hic?
              </Text>
            </Box>
          </Slider>
        </Box>
      </Center>
    );
  }
}
