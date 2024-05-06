import React from "react";
import { HStack, Button } from "@chakra-ui/react";

const Subtitles = () => {
  const subtitles = ["Karatekas", "Compétitions", "Stage", "Subtitle 4", "Subtitle 5", "Subtitle 6"];

  return (
    <HStack spacing={4} my={4}>
      {subtitles.map((subtitle, index) => (
        <Button key={index} colorScheme="teal">
          {subtitle}
        </Button>
      ))}
    </HStack>
  );
};

export default Subtitles;
