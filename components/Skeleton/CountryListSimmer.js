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
const CountryListSimmer = () => {
  return (
    <>
      <Stack>
        <SimpleGrid
          templateColumns={{ sm: "1fr ", md: "2fr 2fr", lg: "2fr 2fr 2fr" }}
          spacing={12}
          py={10}
          pb={5}
        >
          <Skeleton height="250px" rounded={"md"} pt={6} pb={2} />
          <Skeleton height="250px" rounded={"md"} pt={6} pb={2} />
          <Skeleton height="250px" rounded={"md"} pt={6} pb={2} />
        </SimpleGrid>
      </Stack>
    </>
  );
};
export default CountryListSimmer;
