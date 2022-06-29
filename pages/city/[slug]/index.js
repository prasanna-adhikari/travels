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
} from "@chakra-ui/react";
import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import IMAGE_URL from "../../../utils/imageUrl";
import Banner from "../../../components/Banner/Banner";
import Destinations from "../../../components/Card/Destinations";
import { publicFetch } from "../../../utils/fetch";
import CitySimmer from "../../../components/Skeleton/CitySimmer";
import { FaSearch } from "react-icons/fa";
import PlaceSimmer from "../../../components/Skeleton/PlaceSimmer";
const placesByCities = () => {
  const [places, setPlaces] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const [cityName, setCityName] = useState();
  let length = 0;
  const getPlacesByCities = async () => {
    try {
      console.log("wat");
      if (slug) {
        const response = await publicFetch.get(`/place/${slug}`);
        console.log(response);
        setPlaces(response.data);
      }
    } catch (error) {
      console.log(error);
      //   const responseMessage = error.response.data.message;
      //   console.log(responseMessage);
    }
  };
  useEffect(() => {
    if (slug) {
      getPlacesByCities();
      // setCityName(slug.replace("-", ", "));
    }
  }, [slug]);
  return (
    <>
      <Container maxW={"7xl"} py={20}>
        {places?.success ? (
          <>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              flexDirection={"column"}
              w={"full"}
              spacing={10}
              py={2}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  color={"gray.700"}
                  // textTransform={"capitalize"}
                >
                  List of Places
                </Text>
              </Heading>
              <Text color={"gray.500"} pt={6} pb={2} fontSize="lg">
                rich coding snippets app that lets you create your own code
                snippets
              </Text>
            </Flex>
            <Center>
              <InputGroup>
                <Input type="text" placeholder="Search Place" />
                <InputRightAddon
                  children={<FaSearch />}
                  style={{ cursor: "pointer" }}
                >
                  {/* <IconButton aria-label="Search database" icon={<FaSearch />} /> */}
                </InputRightAddon>
              </InputGroup>
              {/* <Input maxW={"5xl"} placeholder="Search place by country" size="lg" /> */}
            </Center>
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
                        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
                      </Box>
                    </Center>
                  </Link>
                ))}
              </>

              {/* <Destinations />
          <Destinations />
          <Destinations />
          <Destinations /> */}
            </SimpleGrid>
          </>
        ) : (
          // <Stack>
          //   <Skeleton height="20px" />
          //   <Skeleton height="20px" />
          //   <Skeleton height="20px" />
          // </Stack>
          <PlaceSimmer />
        )}
      </Container>
    </>
  );
};
export default placesByCities;
