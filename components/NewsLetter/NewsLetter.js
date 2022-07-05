import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  useToast,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";
import { publicFetch } from "../../utils/fetch";
// import { ToastContainer, toast } from "react-toastify";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const addNewsletter = async () => {
    try {
      if (validate()) {
        const response = await publicFetch.post(`add/newsletter`, {
          email: email,
        });
        console.log(response.data.message);
        toast({
          title: `${response.data.message}`,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast({
        description: `${error.response.data.message}`,
        duration: 3000,
        isClosable: true,
        status: "error",
      });
    }
  };
  const validate = () => {
    const com = email.substring(email.length - 4);
    console.log(com);
    if (email == "") {
      toast({
        description: "Email is required",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
      return false;
    }
    if (!email.includes("@")) {
      toast({
        description: "Email is not valid.",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
      return false;
    }
    if (!email.includes(com)) {
      toast({
        description: "Email is not valid.",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
      return false;
    }
    return true;
  };
  return (
    <Box bg={"blue.800"}>
      <Container maxW={"7xl"} py={28}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading color={"white"}>Subscribe to Our NewsLetter</Heading>
            <Text color={"white"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <SimpleGrid
              templateColumns={{
                sm: "1fr ",
                md: "3fr 1fr",
              }}
              spacing={5}
            >
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  color="white"
                />
              </FormControl>
              {/* <Input
                type={"email"}
                placeholder="Enter your email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              /> */}
              <Button colorScheme="pink" onClick={() => addNewsletter()}>
                Subscribe
              </Button>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
