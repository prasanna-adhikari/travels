import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function NoResultFound() {
  return (
    <Box textAlign="center" py={28} px={10}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          <CloseIcon boxSize={"20px"} color={"white"} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={2} mb={2}>
        Sorry! No result found :(
      </Heading>
      <Text color={"gray.500"}>
        What you searched was unfortunately not found.
      </Text>
    </Box>
  );
}
