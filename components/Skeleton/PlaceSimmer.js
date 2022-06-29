import {
  Box,
  SkeletonCircle,
  Skeleton,
  Stack,
  Container,
  Center,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
const PlaceSimmer = () => {
  return (
    <>
      <Stack my={11}>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          flexDirection={"column"}
        >
          <Skeleton
            height="50px"
            rounded={"sm"}
            width={"40%"}
            lineHeight={1.1}
          />
          <Skeleton
            height="20px"
            rounded={"sm"}
            width={"50%"}
            lineHeight={1.1}
            mt={6}
          />
          <Skeleton
            height="35px"
            rounded={"sm"}
            width={"100%"}
            lineHeight={1.1}
            mt={3}
          />
        </Flex>

        <SimpleGrid
          templateColumns={{ sm: "1fr ", md: "2fr 2fr", lg: "2fr 2fr 2fr" }}
          spacing={12}
          py={10}
          pb={5}
        >
          <Skeleton height="445px" rounded={"md"} pt={6} pb={2} />
          <Skeleton height="445px" rounded={"md"} pt={6} pb={2} />
          <Skeleton height="445px" rounded={"md"} pt={6} pb={2} />
        </SimpleGrid>
      </Stack>
    </>
  );
};
export default PlaceSimmer;
