import React from "react";
import { HStack, Button, Link } from "@chakra-ui/react";

const Subtitles = () => {
  const subtitles = ["Karatekas", "Compétitions", "Stage", "Palmares", "Subtitle 5", "Subtitle 6"];

  return (
    <HStack spacing={4} my={4}>
      {subtitles.map((subtitle, index) => (
        <Button key={index} colorScheme="teal" as={index === 0 ? Link : undefined} to={index === 0 ? "/karateka" : undefined}>
          {subtitle}
        </Button>
      ))}
    </HStack>
  );
};

export default Subtitles;
