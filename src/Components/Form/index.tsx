import React from "react";
import { Box, Flex, Grid, FormLabel, Input, Button } from "@chakra-ui/react";

function index({
    handleCreate
  }: {
    handleCreate: React.FormEventHandler<HTMLFormElement>;
  }) {
    return (
        <Box mx={5} p={3} borderRadius="lg" background="#9780ad" boxShadow="base">
            <form onSubmit={handleCreate}>
                <Grid templateColumns="1fr 1fr" columnGap="20px" mb="10px">
                    <Flex direction="column">
                        <FormLabel fontWeight="700" color="#fff">
                            Title
                        </FormLabel>
                        <Input
                            size="sm"
                            borderRadius="md"
                            name="title"
                            placeholder="Playlist Title ..."
                            background="#fff"
                            isRequired
                        />
                    </Flex>
                    <Flex direction="column">
                        <FormLabel fontWeight="700" color="#fff">
                            Description
                        </FormLabel>
                        <Input
                            size="sm"
                            borderRadius="md"
                            name="description"
                            placeholder="Description Playlist ..."
                            background="#fff"
                            isRequired
                        />
                    </Flex>
                </Grid>
                <Button size="xs" type="submit" color="#9970c2">
                    Add
                </Button>
            </form>
        </Box>
    )
}

export default index;
