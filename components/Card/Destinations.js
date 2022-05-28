import Image from "next/image";
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
} from "@chakra-ui/react";

export default function Destinations() {
  return (
    <Center py={6}>
      <Box
        maxW={"380px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        // p={6}
        overflow={"hidden"}
      >
        <Flex
          w={"full"}
          h={"250px"}
          backgroundImage={
            "url(https://images.unsplash.com/photo-1611516491426-03025e6043c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80)"
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
                Nepal
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Center>
  );
}
