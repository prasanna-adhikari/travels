import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function contact() {
  return (
    <Container
      maxW="100%"
      height="89vh"
      mt={0}
      centerContent
      overflow="hidden"
      justifyContent={"center"}
    >
      <Flex alignItems={"center"}>
        <Box
          bg={"blue.800"}
          color="white"
          borderRadius="lg"
          m={{ sm: 5, md: 20, lg: 20, xl: 15 }}
          p={{ sm: 15, md: 15, lg: 16 }}
          w={{ sm: "1xl", md: "2xl" }}
        >
          <Box p={2}>
            <Heading>Contact</Heading>
            <Text mt={{ sm: 2, md: 2, lg: 3 }} color="gray.300">
              Fill up the form below to contact
            </Text>
            <VStack spacing={5} mt={{ sm: 3, md: 4, lg: 5 }}>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input type="text" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Mail</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="gray.800" />}
                  />
                  <Input type="text" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Place Description</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="message"
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                  Send
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
