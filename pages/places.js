import Image from "next/image";
import {
  Container,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Input,
  // Image,
  useColorModeValue,
  InputGroup,
  InputRightAddon,
  IconButton,
  SearchIcon,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { publicFetch } from "../utils/fetch";
import Link from "next/link";
import IMAGE_URL from "../utils/imageUrl";
import { FaSearch } from "react-icons/fa";
import Banner from "../components/Banner/Banner";
import Destinations from "../components/Card/Destinations";
import Card from "../components/Card/Card";
import ListPlaceSimmer from "../components/Skeleton/ListPlaceSimmer";

export default function Places() {
  const [places, setPlaces] = useState();
  // const { slug } = router.query;
  let length = 0;
  const getPlaces = async () => {
    try {
      const response = await publicFetch.get(`/place`);
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
    // setCountryName(slug.replace("-", " "));
  }, []);
  return (
    <>
      <Banner></Banner>
      <Container maxW={"7xl"} py={5}>
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
              // _after={{
              //   content: "''",
              //   width: "full",
              //   height: "30%",
              //   position: "absolute",
              //   bottom: 1,
              //   left: 0,
              //   bg: "blue.400",
              //   zIndex: -1,
              // }}
            >
              List of Places
            </Text>
          </Heading>
          <Text color={"gray.500"} pt={6} pb={2} fontSize="lg">
            rich coding snippets app that lets you create your own code snippets
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
        {/* <Center py={6}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Blog
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Boost your conversion rate
              </Heading>
              <Text color={"gray.500"} noOfLines={[4, 6]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
              </Text>
            </Stack> */}
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
        {/* </Box>
        </Center> */}
      </Container>
    </>
  );
}
