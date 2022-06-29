import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  VStack,
  Flex,
  // Image,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { publicFetch } from "../../utils/fetch";
import { useEffect, useState } from "react";
import BASE_URL from "../../utils/baseUrl";
import IMAGE_URL from "../../utils/imageUrl";

export default function Destinations({ length }) {
  const [countries, setCountries] = useState();
  const getCountry = async () => {
    try {
      if (length == 6) {
        console.log(length);
        const response = await publicFetch.get(`country?limit=2`);

        setCountries(response.data);
      } else {
        const response = await publicFetch.get(`country`);

        setCountries(response.data);
      }
    } catch (error) {
      const responseMessage = error.response.data.message;
      console.log(responseMessage);
    }
  };
  useEffect(() => {
    getCountry();
  }, []);
  return (
    <>
      {countries?.success && (
        <>
          {/* {

        } */}
          <>
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
                        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
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
          </>
        </>
      )}
    </>
  );
}
