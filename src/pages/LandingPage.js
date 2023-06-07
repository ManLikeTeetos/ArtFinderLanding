import React from 'react';
import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

function LandingPage() {
    return (
        <Box>
            {/* Header */}
            <Flex align="center" justify="space-between" p={4}>
                <Heading as="h1" fontSize="xl">
                    Artfinder
                </Heading>
                <Flex>
                    <Link mr={4}>Artworks</Link>
                    <Link>Artists</Link>
                </Flex>
            </Flex>

            {/* Cover Image */}
            <Image src="path_to_cover_image.jpg" alt="Artfinder Cover" />

            {/* Project Description */}
            <Box p={4}>
                <Text fontSize="lg" textAlign="center" my={4}>
                    Discover and explore a diverse collection of artworks from around the world.
                </Text>
            </Box>

            {/* Button to Deployed Application */}
            <Box textAlign="center" mt={4}>
                <Button colorScheme="blue" size="lg" as={Link} href="link_to_deployed_application">
                    Explore Artfinder
                </Button>
            </Box>

            {/* Footer */}
            <Box bg="gray.200" p={4} mt={8} textAlign="center">
                &copy; 2023 Artfinder. All rights reserved.
            </Box>
        </Box>
    );
}

export default LandingPage;
