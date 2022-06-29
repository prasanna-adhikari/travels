import { Box, Image, Center } from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <Box w={"100%"} h={"30vh"} overflow="hidden">
        <Center>
          <Image
            src={
              "https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            objectFit="cover"
            w="100%"
          ></Image>
        </Center>
      </Box>
    </>
  );
}
