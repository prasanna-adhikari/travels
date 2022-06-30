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
const ListPlaceSimmer = () => {
  return (
    <>
      <Stack my={11}>
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
export default ListPlaceSimmer;
