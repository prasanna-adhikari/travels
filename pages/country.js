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
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";

import { FaSearch } from "react-icons/fa";
import Banner from "../components/Banner/Banner";
import Destinations from "../components/Card/Destinations";
import { useEffect, useState } from "react";
import BASE_URL from "../utils/baseUrl";
import IMAGE_URL from "../utils/imageUrl";
import { publicFetch } from "../utils/fetch";
import NoResultFound from "../components/Error/NoResultFound";
import ServerError from "../components/Error/ServerError";
import PlaceSimmer from "../components/Skeleton/PlaceSimmer";
import ListSimmer from "../components/Skeleton/ListSimmer";
export default function ViewByCountry() {
  const [countries, setCountries] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [serverError, setServerError] = useState(false);

  const getCountry = async () => {
    try {
      if (searchTerm == "") {
        const response = await publicFetch.get(`country`);

        setCountries(response.data);
        setServerError(false);
      } else {
        const response = await publicFetch.get(`country/search/${searchTerm}`);

        setCountries(response.data);
        setServerError(false);
      }
    } catch (error) {
      setServerError(true);
      const responseMessage = error.response.data.message;
      console.log(responseMessage);
    }
  };

  useEffect(() => {
    getCountry();
  }, [searchTerm]);
  // useEffect(()=>{
  //   if
  // })

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
              List of Countries
            </Text>
          </Heading>
          <Text color={"gray.500"} pt={6} pb={2} fontSize="lg">
            rich coding snippets app that lets you create your own code snippets
          </Text>
        </Flex>
        <Center>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="#a1a1a1" />}
            />
            <Input
              type="text"
              placeholder="Search Country"
              onKeyUp={(e) => setSearchTerm(e.target.value)}
            />
            {/* <InputRightAddon
              children={<FaSearch />}
              style={{ cursor: "pointer" }}
            >
            </InputRightAddon> */}
            {/* <IconButton aria-label="Search database" icon={<FaSearch />} /> */}
          </InputGroup>
          {/* <Input maxW={"5xl"} placeholder="Search place by country" size="lg" /> */}
        </Center>
        {serverError ? (
          <ServerError />
        ) : (
          <>
            {countries?.success ? (
              <>
                {countries?.result?.length > 0 ? (
                  <>
                    <SimpleGrid
                      templateColumns={{
                        sm: "1fr ",
                        md: "2fr 2fr",
                        lg: "2fr 2fr 2fr",
                      }}
                      spacing={12}
                      py={10}
                      pb={5}
                    >
                      {countries?.result?.map((country) => (
                        <Link href={`/country/${country.slug}`}>
                          <Center py={6}>
                            <Box
                              maxW={"380px"}
                              w={"full"}
                              bg={useColorModeValue("white", "gray.900")}
                              boxShadow={"2xl"}
                              rounded={"md"}
                              // p={6}
                              overflow={"hidden"}
                              cursor={"pointer"}
                            >
                              <Flex
                                w={"full"}
                                h={"250px"}
                                backgroundImage={
                                  // "url(https://images.unsplash.com/photo-1611516491426-03025e6043c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80)"
                                  // `url(http://localhost:7000/pictures/1654319265780271619941_471568341244169_4397748050565967105_n.png)`
                                  `url(${IMAGE_URL}${country.countryImage.replace(
                                    "\\",
                                    "/"
                                  )})`
                                }
                                backgroundSize={"cover"}
                                backgroundPosition={"center center"}
                              >
                                <Stack
                                  w={"full"}
                                  justify={"end"}
                                  // px={useBreakpointValue({ base: 4, md: 8 })}
                                  bgGradient={
                                    "linear(to-tr, blackAlpha.600, transparent,transparent)"
                                  }
                                >
                                  <Stack
                                    maxW={"2xl"}
                                    align={"flex-start"}
                                    spacing={6}
                                  >
                                    <Text
                                      color={"white"}
                                      fontWeight={600}
                                      lineHeight={1.2}
                                      fontSize="lg"
                                      letterSpacing={1}
                                      pl={4}
                                      pb={3}
                                      // fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                                    >
                                      {country.countryName}
                                    </Text>
                                  </Stack>
                                </Stack>
                              </Flex>
                            </Box>
                          </Center>
                        </Link>
                      ))}
                    </SimpleGrid>
                  </>
                ) : (
                  <NoResultFound />
                  // <ServerError />
                )}
              </>
            ) : (
              <ListSimmer />
            )}
          </>
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
