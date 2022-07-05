import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import IMAGE_URL from "../../../utils/imageUrl";
import { publicFetch } from "../../../utils/fetch";
import { useRouter } from "next/router";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useState, useEffect } from "react";

export default function PlaceDetail() {
  const [placeDesc, setPlaceDesc] = useState();
  const [placeStatus, setPlaceStatus] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const getPlaceDetail = async () => {
    try {
      if (slug) {
        const response = await publicFetch.get(
          `/place?slug=${slug}&sortby=a-z`
        );
        console.log(response.data.result);
        setPlaceDesc(response.data.result[0]);
        setPlaceStatus(response.data);
      }
    } catch (error) {
      console.log(error);
      //   const responseMessage = error.response.data.message;
      //   console.log(responseMessage);
    }
  };
  useEffect(() => {
    if (slug) {
      getPlaceDetail();
    }
  }, [slug]);

  return (
    <Container maxW={"7xl"}>
      {/* <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      > */}
      {placeStatus?.success ? (
        <Box py={{ base: 18, md: 10 }}>
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={`
              ${IMAGE_URL}${placeDesc.placeImage}
              
              `}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 12 }}>
            <Box as={"header"} pt={"2"}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={400}
                fontSize={"1xl"}
                pl={"1"}
              >
                {placeDesc.city.cityName}, {placeDesc.country.countryName}
              </Text>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              >
                {placeDesc.placeName}
              </Heading>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              {/* <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
              </VStack> */}
              <Text fontSize={"lg"}>{placeDesc.description}</Text>
              {/* <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{" "}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box> */}
              {/* <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                  </ListItem>
                </List>
              </Box> */}
            </Stack>
          </Stack>
        </Box>
      ) : (
        <>Loading</>
      )}
      {/* </SimpleGrid> */}
    </Container>
  );
}
