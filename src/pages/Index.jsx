import React, { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, ListIcon, Heading, FormControl, FormLabel, Box } from "@chakra-ui/react";
import { FaUserPlus, FaUser } from "react-icons/fa";

const Index = () => {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState("");

  const handleAddParticipant = () => {
    if (newParticipant.trim() !== "") {
      setParticipants([...participants, newParticipant]);
      setNewParticipant("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} w="full">
        <Heading as="h1" size="xl">
          Participant List
        </Heading>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <FormControl>
            <FormLabel htmlFor="participant-name">Add New Participant</FormLabel>
            <Input
              id="participant-name"
              placeholder="Enter participant's name"
              value={newParticipant}
              onChange={(e) => setNewParticipant(e.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleAddParticipant();
                }
              }}
            />
            <Button leftIcon={<FaUserPlus />} colorScheme="blue" mt={4} onClick={handleAddParticipant}>
              Add Participant
            </Button>
          </FormControl>
        </Box>
        <List spacing={3} w="full" borderWidth="1px" borderRadius="lg" p={4}>
          {participants.map((participant, index) => (
            <ListItem key={index}>
              <ListIcon as={FaUser} color="green.500" />
              {participant}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
