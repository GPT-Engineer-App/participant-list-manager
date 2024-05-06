import React, { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, ListIcon, Heading, FormControl, FormLabel, Box } from "@chakra-ui/react";
import { FaUserPlus, FaUser } from "react-icons/fa";
import Subtitles from "../components/Subtitles";

const Index = () => {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState({ name: "", belt: "", city: "", instructor: "" });

  const handleAddParticipant = () => {
    if (newParticipant.name.trim() !== "") {
      setParticipants([...participants, newParticipant]);
      setNewParticipant({ name: "", belt: "", city: "", instructor: "" });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Subtitles />
      <VStack spacing={8} w="full">
        <Heading as="h1" size="xl">
          Participant List
        </Heading>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <FormControl>
            <FormLabel htmlFor="participant-name">Add New Participant</FormLabel>
            <Input id="participant-name" placeholder="Enter participant's name" value={newParticipant.name} onChange={(e) => setNewParticipant({ ...newParticipant, name: e.target.value })} />
            <Input id="participant-belt" placeholder="Enter belt ranking" value={newParticipant.belt} onChange={(e) => setNewParticipant({ ...newParticipant, belt: e.target.value })} mt={4} />
            <Input id="participant-city" placeholder="Enter city" value={newParticipant.city} onChange={(e) => setNewParticipant({ ...newParticipant, city: e.target.value })} mt={4} />
            <Input id="participant-instructor" placeholder="Enter instructor's name" value={newParticipant.instructor} onChange={(e) => setNewParticipant({ ...newParticipant, instructor: e.target.value })} mt={4} />
            <Button leftIcon={<FaUserPlus />} colorScheme="blue" mt={4} onClick={handleAddParticipant}>
              Add Participant
            </Button>
          </FormControl>
        </Box>
        <List spacing={3} w="full" borderWidth="1px" borderRadius="lg" p={4}>
          {participants.map((participant, index) => {
            return (
              <ListItem key={index}>
                <ListIcon as={FaUser} color="green.500" />
                {`${participant.name} - ${participant.belt} - ${participant.city} - ${participant.instructor}`}
              </ListItem>
            );
          })}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
