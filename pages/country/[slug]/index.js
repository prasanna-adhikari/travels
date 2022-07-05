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
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import IMAGE_URL from "../../../utils/imageUrl";
import Banner from "../../../components/Banner/Banner";
import Destinations from "../../../components/Card/Destinations";
import { publicFetch } from "../../../utils/fetch";
import CitySimmer from "../../../components/Skeleton/CitySimmer";
import { FaSearch } from "react-icons/fa";
import ListSimmer from "../../../components/Skeleton/ListSimmer";
import NoResultFound from "../../../components/Error/NoResultFound";

const cityByCountry = () => {
  const [cities, setCities] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const [countryName, setCountryName] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [serverError, setServerError] = useState(false);
  let length = 0;
  const getCityByCountry = async () => {
    try {
      if (slug) {
        const response = await publicFetch.get(
          `/city/${slug}?search=${searchTerm}&sortby=a-z`
        );
        console.log(response);
        setCities(response.data);
      }
    } catch (error) {
      console.log(error);
      //   const responseMessage = error.response.data.message;
      //   console.log(responseMessage);
    }
  };
  useEffect(() => {
    if (slug) {
      getCityByCountry();
      setCountryName(slug.replace("-", " "));
    }
  }, [slug, searchTerm]);

  return (
    <>
      {/* <Banner /> */}
      <Container maxW={"7xl"} py={20}>
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
              {/* Cities of {countryName} */}
              List of Cities
            </Text>
          </Heading>
          <Text color={"gray.500"} pt={6} pb={2} fontSize="lg">
            rich coding snippets app that lets you create your own code snippets
          </Text>
        </Flex>
        <Center>
          <InputGroup>
            <Input
              type="text"
              placeholder="Search Cities"
              onKeyUp={(e) => setSearchTerm(e.target.value)}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="#a1a1a1" />}
            />
          </InputGroup>
          {/* <Input maxW={"5xl"} placeholder="Search place by country" size="lg" /> */}
        </Center>
        {cities?.success ? (
          <>
            {cities?.result?.length > 0 ? (
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
                  <>
                    {cities?.result?.map((city) => (
                      <Link href={`/city/${city.slug}`}>
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
                                `url(${IMAGE_URL}${city.cityImage.replace(
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
                                    {city.cityName}
                                  </Text>
                                </Stack>
                              </Stack>
                            </Flex>
                          </Box>
                        </Center>
                      </Link>
                    ))}
                  </>
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
      </Container>
    </>
  );
};
export default cityByCountry;
