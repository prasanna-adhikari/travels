import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Center,
  Box,
  useColorMode,
  useColorModeValue,
  Stack,
  Skeleton,
  InputGroup,
  Input,
  InputRightAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";

import ListPlaceSimmer from "../Skeleton/ListPlaceSimmer";
import { publicFetch } from "../../utils/fetch";
import IMAGE_URL from "../../utils/imageUrl";
export default function Places() {
  const [places, setPlaces] = useState();

  const getPlaces = async () => {
    try {
      const response = await publicFetch.get(`/place?limit=3`);
      console.log(response);
      setPlaces(response.data);
    } catch (error) {
      console.log(error);
      //   const responseMessage = error.response.data.message;
      //   console.log(responseMessage);
    }
  };
  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <>
      {places?.success ? (
        <>
          <SimpleGrid
            templateColumns={{ sm: "1fr ", md: "2fr 2fr", lg: "2fr 2fr 2fr" }}
            spacing={12}
            py={10}
            pb={5}
          >
            <>
              {places?.result?.map((place) => (
                <Link href={`/place/${place.slug}`}>
                  <Center py={6}>
                    <Box
                      maxW={"445px"}
                      w={"full"}
                      bg={useColorModeValue("white", "gray.900")}
                      boxShadow={"2xl"}
                      rounded={"md"}
                      p={6}
                      overflow={"hidden"}
                      cursor={"pointer"}
                    >
                      <Box
                        h={"240px"}
                        bg={"gray.100"}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={"relative"}
                      >
                        <Image
                          src={`${IMAGE_URL}${place.placeImage}`}
                          layout={"fill"}
                        />
                      </Box>
                      <Stack px={1}>
                        <Text
                          color={"green.500"}
                          textTransform={"uppercase"}
                          fontWeight={700}
                          fontSize={"sm"}
                          letterSpacing={1.1}
                        >
                          {place.city.cityName}, {place.country.countryName}
                        </Text>
                        <Heading
                          color={useColorModeValue("gray.700", "white")}
                          fontSize={"2xl"}
                          fontFamily={"body"}
                        >
                          {place.placeName}
                        </Heading>
                        <Text color={"gray.500"} noOfLines={[3, 5]}>
                          {place.description}
                        </Text>
                      </Stack>
                    </Box>
                  </Center>
                </Link>
              ))}
            </>
          </SimpleGrid>
        </>
      ) : (
        <ListPlaceSimmer />
      )}
    </>
  );
}
