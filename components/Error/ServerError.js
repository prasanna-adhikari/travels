import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { FcBrokenLink } from "react-icons/fc";
export default function ServerError() {
  return (
    <Box textAlign="center" py={28} px={10}>
      <Box display="inline-block">
        {/* <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        > */}
        <FcBrokenLink size={"100px"} color={"white"} />
        {/* </Flex> */}
      </Box>
      <Heading as="h2" size="xl" mt={2} mb={2}>
        Sorry! Internal Server Error
      </Heading>
      <Text color={"gray.500"}>
        Server Error. We apologies and are fixing the problem. Please try again
        at a later stage.
      </Text>
    </Box>
  );
}
